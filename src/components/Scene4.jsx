import "../../src/App.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./Scene4.css";

function Scene4() {
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end 100%"],
	});

	const treesX = useTransform(scrollYProgress, [0, 1], ["35%", "0%"]);
	const titleScale = useTransform(scrollYProgress, [0, 0.3], [0.1, 0.8]);
	const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

	return (
		<section ref={ref} className="scene4">
			<div className="scene4-content">
				<img
					src="./sprookjes/image3.1.png"
					alt="Window"
					className="background-image"
				/>

				<motion.img
					src="./sprookjes/image3.2.png"
					alt="Lanterns"
					className="lanterns"
					style={{ x: treesX }}
				/>

				<motion.p
					className="story-text"
					style={{
						scale: titleScale,
						opacity: titleOpacity,
					}}
				>
					Rapunzel grew up in isolation, curious about the world, especially the <br></br>
					floating lanterns she saw in the sky every year on her birthday. She<br></br>
					dreamed of leaving the tower, but Gothel always refused.
				</motion.p>
			</div>
		</section>
	);
}

export default Scene4;
