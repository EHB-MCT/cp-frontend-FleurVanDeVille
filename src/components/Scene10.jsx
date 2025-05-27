import "../../src/App.css";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import "./Scene10.css";

function Scene10() {
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end 100%"],
	});

	const treesYRaw = useTransform(scrollYProgress, [0, 1], ["-70%", "-5%"]);
	const treesY = useSpring(treesYRaw, { stiffness: 60, damping: 20 });

	const treesYYRaw = useTransform(scrollYProgress, [0, 1], ["-70%", "-5%"]);
	const treesYY = useSpring(treesYYRaw, { stiffness: 60, damping: 20 });

	const titleScaleRaw = useTransform(scrollYProgress, [0, 0.3], [0.1, 0.8]);
	const titleScale = useSpring(titleScaleRaw, { stiffness: 30, damping: 30 });

	const titleOpacityRaw = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
	const titleOpacity = useSpring(titleOpacityRaw, {
		stiffness: 30,
		damping: 30,
	});

	const [hasPlayed, setHasPlayed] = useState(false);

	useEffect(() => {
		const unsubscribe = titleOpacity.on("change", (value) => {
			if (value >= 0.99 && !hasPlayed) {
				const audio = new Audio("/applause-cheer-236786.mp3");
				audio.play();
				setHasPlayed(true);
			}
		});

		return () => unsubscribe();
	}, [titleOpacity, hasPlayed]);

	return (
		<section ref={ref} className="scene10">
			<div className="scene10-content">
				<img
					src="./sprookjes/image9.1.jpg"
					alt="background"
					className="background-image"
				/>

				<motion.img
					src="./sprookjes/image9.2.png"
					alt="woman"
					className="woman"
					style={{ y: treesY }}
				/>

				<motion.img
					src="./sprookjes/image9.3.png"
					alt="men"
					className="men"
					style={{ y: treesYY }}
				/>

				<motion.p
					className="end-text"
					style={{
						scale: titleScale,
						opacity: titleOpacity,
					}}
				>
					The end
				</motion.p>
			</div>
		</section>
	);
}

export default Scene10;
