import React from "react";

// SVG logos for Visa, PayPal, Stripe, MasterCard, and Cash on Delivery
const paymentLogos = [
  { src: "/path-to-visa-logo.svg", alt: "Visa", label: "Visa" },
  { src: "/path-to-paypal-logo.svg", alt: "PayPal", label: "PayPal" },
  { src: "/path-to-stripe-logo.svg", alt: "Stripe", label: "Stripe" },
  { src: "/path-to-mastercard-logo.svg", alt: "MasterCard", label: "MasterCard" },
  { src: "/path-to-cod-logo.svg", alt: "Cash on Delivery", label: "Cash on Delivery" }
];

export const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p>Email: <a href="mailto:info@nexgenortho.com" className="underline">info@nexgenortho.com</a></p>
          <p>Phone: <a href="tel:+919999999999" className="underline">+91-9999999999</a></p>
        </div>

        {/* Recent Posts Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
          <ul className="space-y-2">
            <li>
              <p>07 Oct - <a href="#" className="underline">K-Nail for Femur Fractures: An Overview</a></p>
            </li>
            <li>
              <p>03 Oct - <a href="#" className="underline">HA Coated Polyaxial Screws: Breakthrough</a></p>
            </li>
            <li>
              <p>09 Sep - <a href="#" className="underline">Master Femur Nail: Step-by-Step Guide</a></p>
            </li>
          </ul>
        </div>

        {/* Product Categories Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Product Categories</h3>
          <ul className="space-y-2">
            <li><a href="#" className="underline">Cmf</a></li>
            <li><a href="#" className="underline">External Fixator System</a></li>
            <li><a href="#" className="underline">General Instruments</a></li>
            <li><a href="#" className="underline">Joints Reconstruction</a></li>
            <li><a href="#" className="underline">Spinal Implants</a></li>
            <li><a href="#" className="underline">Sports Medicine</a></li>
            <li><a href="#" className="underline">Trauma</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <form>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 text-gray-800 rounded mb-2"
            />
            <button className="bg-white text-blue-600 px-4 py-2 rounded w-full">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Payment logos */}
      <div className="border-t border-gray-300 mt-8 pt-4">
        <div className="container mx-auto flex justify-between items-center">
          <p>&copy; 2024 nexgenortho</p>
          <div className="flex space-x-4">
            {paymentLogos.map((logo) => (
              <a
                key={logo.alt}
                href="#"
                className="group"
                aria-label={logo.label}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-6 w-auto grayscale group-hover:grayscale-0 group-hover:brightness-110 transition duration-200"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
