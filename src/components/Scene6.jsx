import "../../src/App.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./Scene6.css";

function Scene6() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end 100%"],
    });

    const witchScale = useTransform(scrollYProgress, [0, 1], [0.7, 1.2]);
    const witchOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const titleScale = useTransform(scrollYProgress, [0, 0.3], [0.1, 0.8]);
    const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    return (
        <section ref={ref} className="scene6">
            <div className="scene6-content">
                <img
                    src="./sprookjes/image5.1.jpg"
                    alt="Rapunzel room"
                    className="background-image"
                />

                <motion.img
                    src="./sprookjes/image5.2.png"
                    alt="Witch"
                    className="witch"
                    style={{ scale: witchScale, opacity: witchOpacity }}
                />

                <motion.p
                    className="story-text"
                    style={{
                        scale: titleScale,
                        opacity: titleOpacity,
                    }}
                >
                    A golden flower with healing magic was found and used to save a dying <br />
                    queen. Her baby, Rapunzel, was born with magical golden hair. An old <br />
                    lady tried to kidnap Rapunzel to have the power for her own.
                </motion.p>
            </div>
        </section>
    );
}

export default Scene6;