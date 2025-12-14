import React from "react";
import { motion } from "motion/react";

import blueThunderIcon from "../assets/icons/thunder-blue-icon.svg";
import whiteThunderIcon from "../assets/icons/thunder-white-icon.svg";
import speedIcon from "../assets/icons/speed-icon.svg";
import tempIcon from "../assets/icons/temp-icon.svg";
import car from "../assets/images/hero-car.png";

const items = [
    { id: 1, image: tempIcon, title: "24°", para: "TEMPERATURE" },
    { id: 2, image: speedIcon, title: "873", para: "MILEAGE" },
    { id: 3, image: whiteThunderIcon, title: "94%", para: "BATTERY" },
];

export default function Hero() {
    return (
        <section
            id="home"
            className="w-full h-full max-w-7xl mx-auto px-6 sm:px-20 lg:px-32 pt-[133px] pb-8 relative"
        >
            {/* blobs */}
            <div className="w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-custom-blob/50 rounded-full blur-[100px] absolute -top-[59px] -left-[141px] lg:-left-[131px] animate-pulse -z-50 pointer-events-none"></div>
            <div className="w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-custom-blob/50 rounded-full blur-[100px] absolute top-[317px] left-[200px] sm:left-[550px] md:left-[800px] lg:left-[1031px] animate-pulse -z-50 pointer-events-none"></div>
            <div className="flex flex-col items-center text-center">
                <div className="flex flex-col gap-4 mb-1">
                    <motion.h1
                        initial={{
                            y: 100,
                            opacity: 0,
                        }}
                        whileInView={{
                            y: 0,
                            opacity: 1,
                        }}
                        transition={{
                            duration: 1,
                            ease: "easeOut",
                        }}
                        className="font-semibold text-2xl sm:text-4xl leading-[140%] tracking-normal "
                    >
                        Choose The Best Car
                    </motion.h1>
                    <motion.h3
                        initial={{
                            y: 100,
                            opacity: 0,
                        }}
                        whileInView={{
                            y: 0,
                            opacity: 1,
                        }}
                        transition={{
                            duration: 1.1,
                            ease: "easeOut",
                        }}
                        className="font-semibold text-base sm:text-2xl leading-[140%]"
                    >
                        Porsche Mission E
                    </motion.h3>
                </div>
                <motion.p
                    initial={{
                        y: 100,
                        opacity: 0,
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                    }}
                    transition={{
                        duration: 1.3,
                        ease: "easeOut",
                    }}
                    className="flex items-center gap-1 mb-12"
                >
                    <img
                        src={blueThunderIcon}
                        alt="thunder icon"
                        draggable="false"
                    />
                    <span className="font-normal text-[13px] sm:text-base leading-[140%] text-custom-text-gray-light">
                        Electric car
                    </span>
                </motion.p>

                <motion.img
                    initial={{
                        scale: 0,
                        // opacity: 0,
                    }}
                    whileInView={{ scale: 1 }}
                    transition={{
                        duration: 1.4,
                    }}
                    src={car}
                    alt="car"
                    className="px-4"
                />

                <div className="w-full max-w-[406px] flex items-center justify-between mt-10 mb-13 sm:mb-14">
                    {items.map(({ image, title, para }, i) => (
                        <motion.div
                            initial={{
                                y: 100,
                                opacity: 0,
                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1,
                            }}
                            transition={{
                                duration: 1.5,
                            }}
                            key={i}
                            className="flex flex-col items-center"
                        >
                            <div className="bg-custom-bg-dark-color p-2 rounded-full">
                                <img
                                    src={image}
                                    alt="temperature icon"
                                    draggable="false"
                                />
                            </div>
                            <h2 className="font-medium text-xl leading-[100%] mt-3 mb-1">
                                {title}
                            </h2>
                            <p className="font-normal text-[10px] leading-none tracking-normal text-custom-text-gray-dark">
                                {para}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.button
                    initial={{
                        scale: 0,
                    }}
                    animate={{
                        scale: 1,
                        transition: { duration: 1.6, delay: 1 },
                    }}
                    viewport={{ once: false, amount: 0.1 }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    className="border-2 border-custom-hero-btn-second-border p-2.5 rounded-full shadow-[0_0_16px_0_#02db8a] hover:opacity-80 transition-opacity cursor-pointer"
                >
                    <span className="flex items-center justify-center w-[70px] h-[70px] border-2 border-custom-hero-btn-first-border rounded-full font-medium text-[13px] leading-[140%] tracking-normal">
                        START
                    </span>
                </motion.button>
            </div>
        </section>
    );
}
