import "../../src/App.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./Scene1.css";

function Scene1() {
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});

	const treesX = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
    const treesXX = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
	const titleScale = useTransform(scrollYProgress, [0, 0.3], [0.1, 0.8]);
	const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

	return (
		<section ref={ref} className="scene1">
			<div className="scene1-content">
				<img
					src="./sprookjes/start-image.1.jpg"
					alt="Background Castle"
					className="background-image"
				/>

				<motion.img
					src="./sprookjes/start-image.2.png"
					alt="Foreground Trees"
					className="foreground-trees"
					style={{ x: treesX }}
				/>

                <motion.img
					src="./sprookjes/start-image.3.png"
					alt="Foreground Trees"
					className="foreground-trees"
					style={{ x: treesXX }}
				/>

				<motion.h1
					className="rapunzel-title"
					style={{
						scale: titleScale,
						opacity: titleOpacity,
					}}
				>
					Rapunzel
				</motion.h1>
			</div>
		</section>
	);
}

export default Scene1;
