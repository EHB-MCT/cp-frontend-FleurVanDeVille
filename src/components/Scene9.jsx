import "../../src/App.css";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import "./Scene9.css";

function Scene9() {
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end 100%"],
	});

	const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
	const foregroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
	const foregroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

	const smoothForegroundScale = useSpring(foregroundScale, { stiffness: 10, damping: 20 });
	const smoothBackgroundScale = useSpring(backgroundScale, { stiffness: 10, damping: 20 });

	const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
	const titleY = useTransform(scrollYProgress, [0, 0.3], ["20%", "0%"]);

	return (
		<section ref={ref} className="scene9">
			<div className="scene9-content">
				<motion.img
					src="./sprookjes/image8.1.jpg"
					alt="forest"
					className="background-image"
					style={{ scale: smoothBackgroundScale }}
				/>

				<div className="overlay-gradient" />

				<motion.img
					src="./sprookjes/image8.2.png"
					alt="foreground-trees"
					className="foreground-trees"
					style={{ scale: smoothForegroundScale, y: foregroundY }}
				/>

				<motion.div
					className="story-text"
					style={{
						opacity: titleOpacity,
						y: titleY,
					}}
				>
					<p>
						Desperate to regain the magic, Mother Gothel kidnapped Rapunzel and
						<br />
						hid her in a tall, hidden tower deep in the forest. She raised
						<br />
						Rapunzel as her own, never allowing her to leave, claiming it was for
						<br />
						her safety.
					</p>
				</motion.div>
			</div>
		</section>
	);
}

export default Scene9;
