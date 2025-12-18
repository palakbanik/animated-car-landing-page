import React from "react";

export default function HeadingText({ text }) {
    return (
        <h2 className="w-full max-w-60 sm:max-w-[278px] font-semibold text-xl sm:text-2xl leading-[140%] tracking-normal text-custom-text-heading">
            {text}
        </h2>
    );
}
