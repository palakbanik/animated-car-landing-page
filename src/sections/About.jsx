import React from "react";
import { motion } from "motion/react";

import aboutImage from "../assets/images/about-image.png";
import BlueButton from "../components/BlueButton";
import HeadingText from "../components/HeadingText";

export default function About() {
    return (
        <section
            id="about"
            className="w-full max-w-7xl mx-auto px-6 sm:px-20 lg:px-32 pt-16 md:pt-20 pb-8"
        >
            <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-2.5 md:gap-[88px]">
                {/* image content */}
                <motion.div
                    initial={{
                        x: -100,
                        opacity: 0,
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                        transition: { duration: 1.6 },
                    }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="relative mb-[94px]"
                >
                    <img src={aboutImage} alt="about car" />
                    <div className="w-[197px] h-[104px] bg-custom-text-light/10 backdrop-blur-lg rounded-[20px] absolute right-0 -bottom-10 flex flex-col items-center text-center justify-center gap-2">
                        <h3 className="font-semibold text-base leading-[140%] tracking-normal">
                            2.500+
                        </h3>
                        <p className="font-normal text-xs leading-[140%] tracking-normal">
                            Supercharges placed along popular routes
                        </p>
                    </div>
                </motion.div>

                {/* text content */}
                <motion.div
                    initial={{
                        x: 100,
                        opacity: 0,
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                        transition: { duration: 1.6, delay: 1 },
                    }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="w-full max-w-[400px] flex flex-col items-start gap-4"
                >
                    <HeadingText text={"Machines With Future Technology"} />
                    <p className="font-normal text-[15px] sm:text-base leading-[140%] text-custom-text-gray-light mb-4">
                        See the future with high-performance electric cars
                        produced by renowned brands. They feature futuristic
                        builds and designs with new and innovative platforms
                        that last a long time.
                    </p>

                    <a href="#">
                        <BlueButton text={"Know more"} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
