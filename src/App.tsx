import React from 'react'
import './App.css';
import Connect from './components/Connect';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Project from './components/Project';
import SectionOne from './components/SectionOne';
import Sercvice from './components/Sercvice';
import Sidebar from './components/Sidebar';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <Navbar/>
      <Sidebar/>
      <HeroSection/>
      <SectionOne/>
      <Sercvice/>
      <Project/>
      <Connect/>
      <Skills/>
    </>
  )
}

export default App
