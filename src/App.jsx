import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Popular from "./sections/Popular";

export default function App() {
    return (
        <main className="w-full h-full overflow-hidden">
            <Navbar />
            <Hero />
            <About />
            <Popular />
        </main>
    );
}
