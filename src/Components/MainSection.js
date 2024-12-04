"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

const bgImages = [
    'bg-BG1', 'bg-BG2', 'bg-BG3', 'bg-BG4', 'bg-BG5'
];

const MainSection = () => {

    const [currentBg, setCurrentBg] = useState(bgImages[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBg((prevBg) => {
                const currentIndex = bgImages.indexOf(prevBg);
                const nextIndex = (currentIndex + 1) % bgImages.length;
                return bgImages[nextIndex];
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className={`${currentBg} bg-no-repeat relative bg-cover bg-center flex items-center justify-center animate-zoomInOut h-[90vh] max-md:h-fit max-sm:h-fit py-24`}>
            <div className="absolute w-full h-full bg-gradient-to-r from-black/70 to-white/0 opacity-0.2" />
            <div className="max-w-[1400px] mx-auto px-3 w-full relative z-10 max-sm:w-full mb-6">
                <div className="flex justify-between items-center space-x-3 w-full max-md:flex-col max-sm:flex-col max-sm:space-x-0">
                    <div className="w-8/12 space-y-4 mb-3 max-lg:w-6/12 max-md:w-10/12 max-sm:w-10/12 max-[400px]:w-full">
                        <div className="space-y-2">
                            <h3 className="text-6xl text-white relative max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">
                                Welcome to, <br />
                                Your Himalayan Escape Awaits<br />
                                <strong className="max-lg:text-5xl max-md:text-4xl max-sm:text-3xl">Mukteshwar, Uttarakhand</strong>
                            </h3>
                            <p className="block mt-2 text-xl text-white max-sm:text-base max-sm:mt-1">
                                Discover north-facing plots in serene Mukteshwar with breathtaking Himalayan views.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MainSection;
