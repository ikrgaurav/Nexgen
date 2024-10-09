// src/app/Home.js
"use client"; // Mark this component as a Client Component

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample images for the slideshow
const images = [
  {
    src: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Welcome to NexGen Orthopedic Solutions",
    description: "Nexgen Ortho is dedicated to providing products to improve current treatments in orthopaedic trauma surgery. Our Locking System includes straight and formed plates, available in 316L Stainless Steel and Titanium.",
    buttonText: "Enquire Now"
  },
  {
    src: "https://images.unsplash.com/photo-1580281780460-82d277b0e3f8?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Advanced Medical Solutions",
    description: "We specialize in innovative and cutting-edge medical solutions for a variety of healthcare needs.",
    buttonText: "Learn More"
  },
  {
    src: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Cutting-edge Technology",
    description: "Our technology is designed to meet the modern healthcare challenges.",
    buttonText: "Discover More"
  },
  {
    src: "https://images.unsplash.com/photo-1706777193603-76c3e9613553?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Expert Medical Care",
    description: "Our team of experts ensures the best outcomes for patients with state-of-the-art treatments.",
    buttonText: "Contact Us"
  },
  {
    src: "https://images.unsplash.com/photo-1551524559-8af4e6624178?q=80&w=3126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Innovative Solutions",
    description: "Our solutions are tailored to meet the unique needs of every patient.",
    buttonText: "Get Started"
  },
];

const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
    pauseOnHover: true, // To pause autoplay when user hovers
    arrows: true, // Show navigation arrows for manual slide control
  };

  return (
    <div className="mt-0"> {/* Remove margin-top */}
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative">
            {/* Image */}
            <img src={image.src} alt={`Slide ${index + 1}`} className="w-full h-[75vh] object-cover" />

            {/* Overlay with translucent content box */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="bg-black bg-opacity-60 rounded-lg p-8 text-white max-w-lg mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{image.title}</h2>
                <p className="text-md md:text-lg mb-6">{image.description}</p>
                <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition duration-300 ease-in-out">
                  {image.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <main className="p-0"> {/* Remove padding */}
        <Slideshow />
      </main>
    </div>
  );
};

export default Home;
