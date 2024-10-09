// src/app/Navbar.js
"use client";

import Link from "next/link";
import { useState } from "react";
import { FaGlobeAmericas } from "react-icons/fa";
import CountryFlag from "react-country-flag";

export default function Navbar() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [dropdownOpen, setDropdownOpen] = useState(false); // Manage dropdown visibility

  const languages = [
    { code: "en", name: "English", flag: "GB" },
    { code: "ar", name: "Arabic", flag: "SA" },
    { code: "zh", name: "Chinese", flag: "CN" },
    { code: "nl", name: "Dutch", flag: "NL" },
    { code: "eo", name: "Esperanto", flag: "EU" },
    { code: "fr", name: "French", flag: "FR" },
    { code: "es", name: "Spanish", flag: "ES" },
  ];

  const handleLanguageChange = (code) => {
    setSelectedLanguage(code);
    setDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center text-gray-700 hover:text-gray-900">
              <span className="font-bold text-lg">NexGen</span>
            </Link>
          </div>

          {/* Primary Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900">About Us</Link>
            <Link href="/products" className="text-gray-700 hover:text-gray-900">Products</Link>
            <Link href="/blogs" className="text-gray-700 hover:text-gray-900">Blogs</Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900">Contact Us</Link>
          </div>

          {/* Language Selector (Custom Dropdown) */}
          <div className="relative inline-block text-left">
            <button
              className="flex items-center bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-50 focus:outline-none"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
            >
              <FaGlobeAmericas className="mr-2" />
              {languages.find(lang => lang.code === selectedLanguage).name}
            </button>
            {dropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10"
                role="menu"
                aria-hidden={!dropdownOpen}
              >
                {languages.map(lang => (
                  <div
                    key={lang.code}
                    className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleLanguageChange(lang.code)}
                    role="menuitem"
                  >
                    <CountryFlag countryCode={lang.flag} svg className="mr-2" />
                    <span>{lang.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
