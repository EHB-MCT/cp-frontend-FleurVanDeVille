import "../../src/App.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./Scene8.css";

function Scene8() {
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end 100%"],
	});

	const treesY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
	const titleScale = useTransform(scrollYProgress, [0, 0.3], [0.1, 0.8]);
	const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

	return (
		<section ref={ref} className="scene8">
			<div className="scene8-content">
				<img
					src="./sprookjes/image7.1.jpg"
					alt="Rapunzel"
					className="background-image"
				/>

				<motion.img
					src="./sprookjes/image7.2.png"
					alt="Tear"
					className="tear"
					style={{ y: treesY }}
				/>

				<motion.p
					className="story-text"
					style={{
						scale: titleScale,
						opacity: titleOpacity,
					}}
				>
					A golden flower with healing magic was found and used to save a dying <br></br>
					queen. Her baby, Rapunzel, was born with magical golden hair. An old <br></br>
					lady tried to kidnap Rapunzel to have the power for her own.
				</motion.p>
			</div>
		</section>
	);
}

export default Scene8;
