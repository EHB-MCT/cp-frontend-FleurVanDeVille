import "../../src/App.css";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import "./Scene7.css";

function Scene7() {
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end 100%"],
	});

	const zoomScaleRaw = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
	const zoomScale = useSpring(zoomScaleRaw, { stiffness: 30, damping: 30 });
	const zoomScale2Raw = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
	const zoomScale2 = useSpring(zoomScale2Raw, { stiffness: 30, damping: 30 });
	const titleScale = useTransform(scrollYProgress, [0, 0.3], [0, 0.9]);
	const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

	return (
		<section ref={ref} className="scene7">
			<div className="scene7-content">
				<img
					src="./sprookjes/image6.1.jpg"
					alt="forest"
					className="background-image"
				/>

				<motion.img
					src="./sprookjes/image6.2.png"
					alt="foreground-trees"
					className="foreground-trees"
					style={{ scale: zoomScale2 }}
				/>

				<motion.p
					className="story-text"
					style={{
						scale: titleScale,
						opacity: titleOpacity,
					}}
				>
					Desperate to regain the magic, Mother Gothel kidnapped Rapunzel and{" "}
					<br></br>
					hid her in a tall, hidden tower deep in the forest. She raised{" "}
					<br></br>
					Rapunzel as her own, never allowing her to leave, claiming it was for{" "}
					<br></br>
					her safety.
				</motion.p>
			</div>
		</section>
	);
}

export default Scene7;
