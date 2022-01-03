import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import SectionOne from "../components/SectionOne";
import Sercvice from "../components/Sercvice";
import Project from "../components/Project";
import Connect from "../components/Connect";
import Skills from "../components/Skills";
import Footer from "../components/Footer"


const Home = () => {
    return (
        <div>
            <Navbar/>
            <Sidebar/>
            <HeroSection/>
            <SectionOne/>
            <Sercvice/>
            <Project/>
            <Connect/>
            <Skills/>
            <Footer/>

        </div>
    )
};

export default Home;