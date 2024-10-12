"use client";
import { useForm } from 'react-hook-form';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useState } from 'react';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 23.0225, // Latitude of your location
  lng: 72.5714, // Longitude of your location
};

export default function ContactUs() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setFormSubmitted(true); // For demo, just log the form data
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold">Customer feedback is the lifeblood of our business</h1>
      <p className="mt-2">Tell us what’s on your mind, good or bad. We respond to all customer feedback and look forward to hearing from you!</p>
      
      {/* Google Maps Integration */}
      <div className="mt-8">
        <LoadScript googleMapsApiKey="AIzaSyC6_3szh9EMV1EZEA5cY5D5uO5FlL5U-Vg">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">Your Name (Required)</label>
          <input
            id="name"
            {...register("name", { required: true })}
            placeholder="Your Name"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.name && <span className="text-red-500">Name is required</span>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium">Your Email (Required)</label>
          <input
            id="email"
            type="email"
            {...register("email", { required: true })}
            placeholder="Your Email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.email && <span className="text-red-500">Email is required</span>}
        </div>

        <div>
          <label htmlFor="honeypot-umpl" className="block text-sm font-medium">Your Mobile (Required)</label>
          <input
            id="mobile"
            type="tel"
            {...register("mobile", { required: true })}
            placeholder="Your Mobile"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.mobile && <span className="text-red-500">Mobile number is required</span>}
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
          <input
            id="subject"
            {...register("subject")}
            placeholder="Subject"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium">Your Message</label>
          <textarea
            id="message"
            {...register("message")}
            placeholder="Your Message"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <button type="submit" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Send
        </button>
        
        {formSubmitted && <p className="text-green-500 mt-4">Thank you! We will get back to you soon.</p>}
      </form>
    </div>
  );
}
