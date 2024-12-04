"use client";

import React, { useEffect } from "react";
import NavBar from "@/Components/NavBar";
import MainSection from "@/Components/MainSection";
import KeyHighlights from "@/Components/KeyHighlights";
import AOS from 'aos';
import 'aos/dist/aos.css';
import CustomConstruction from "@/Components/CustomConstruction";
import StickyBar from "@/Components/StickyBar";

const HomePage = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out',
        });

        return () => AOS.refresh();
    }, []);

    return (
        <>
            <NavBar />
            <MainSection />
            <KeyHighlights />
            <CustomConstruction />
            <StickyBar />
        </>
    );
};

export default HomePage;
