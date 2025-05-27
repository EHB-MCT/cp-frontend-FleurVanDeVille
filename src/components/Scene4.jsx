import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./Scene4.css";
import "../../src/App.css";

function Scene4() {
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end 100%"],
	});

	const sharedX = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

	const titleScale = useTransform(scrollYProgress, [0, 0.3], [0.5, 1]);
	const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

	return (
		<section ref={ref} className="scene4">
			<div className="scene4-content">
				<motion.img
					src="./sprookjes/image3.1.png"
					alt="Window"
					className="background-image"
					style={{ x: sharedX }}
				/>

				<motion.img
					src="./sprookjes/image3.2.png"
					alt="Lanterns"
					className="lanterns"
					style={{ x: sharedX }}
				/>

				<motion.div
					className="story-text"
					style={{
						scale: titleScale,
						opacity: titleOpacity,
					}}
				>
					<p>
						Rapunzel grew up in isolation, curious about the world, especially the
						<br />
						floating lanterns she saw in the sky every year on her birthday.
						<br />
						She dreamed of leaving the tower, but Gothel always refused.
					</p>
				</motion.div>
			</div>
		</section>
	);
}

export default Scene4;
