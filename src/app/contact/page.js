// src/app/about.js
"use client";
import Navbar from "../Navbar";
import ContactUs from "./ContactUs";
import Footer from "../Footer";

export default function AboutPage(){
  return (
    <div>
      <Navbar />
      <ContactUs />
      <Footer/>
      
      <div>
        {/* Other content if needed */}
      </div>
    </div>
  );
}

