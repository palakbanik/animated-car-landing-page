import React from "react";
import { motion } from "motion/react";

export default function BlueButton({ text }) {
    return (
        <motion.button
            whileHover={{
                scale: 1.2,
            }}
            whileTap={{ scale: 0.9 }}
            className="bg-custom-btn-bg px-8 py-4 rounded-sm font-medium text-[15px] leading-[140%] tracking-normal cursor-pointer"
        >
            {text}
        </motion.button>
    );
}
