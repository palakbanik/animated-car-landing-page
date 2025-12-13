import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";

export default function App() {
    return (
        <main className="w-full h-full overflow-hidden">
            <Navbar />
            <Hero />
        </main>
    );
}
