import "../../src/App.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./Scene5.css";

function Scene5() {
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end 100%"],
	});

	const boyY = useTransform(scrollYProgress, [0, 1], ["20%", "-40%"]);
	const titleScale = useTransform(scrollYProgress, [0, 0.3], [0.1, 0.8]);
	const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

	return (
		<section ref={ref} className="scene5">
			<div className="scene5-content">
				<img
					src="./sprookjes/image4.1.jpg"
					alt="tower wall"
					className="background-image"
				/>

				<motion.img
					src="./sprookjes/image4.2.png"
					alt="boy"
					className="boy"
					style={{ y: boyY }}
				/>

				<motion.p
					className="story-text"
					style={{
						scale: titleScale,
						opacity: titleOpacity,
					}}
				>
					One day, Flynn Rider, a thief on the run, discovered the tower and
					<br></br>
					climbed inside. Rapunzel knocks him out but then makes a deal—if he
					<br></br>
					takes her to see the floating lights, she’ll return his stolen
					satchel.
				</motion.p>
			</div>
		</section>
	);
}

export default Scene5;
