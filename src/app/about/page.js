// src/app/about.js
"use client";
import Navbar from "../Navbar";
import AboutUs from "./aboutpagecontent";
import Footer from "../Footer";

export default function AboutPage(){
  return (
    <div>
      <Navbar />
      <AboutUs />
      <Footer/>
      <div>
        {/* Other content if needed */}
      </div>
    </div>
  );
}

