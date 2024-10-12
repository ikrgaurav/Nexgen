"use client";

const Separator = () => (
  <div className="w-full border-t border-gray-300 my-8" />
);

const AboutUs = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      {/* HEADER */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Orthopedic Implants Manufacturers & Suppliers
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Welcome to Uteshiya Medicare, where cutting-edge innovation meets compassionate care.
          We are committed to revolutionizing orthopedic solutions, one implant at a time.
        </p>
      </div>

      {/* CUSTOM SEPARATOR */}
      <Separator />

      {/* WHY CHOOSE US Section */}
      <div className="space-y-10">
        <div className="bg-gray-100 rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800">Why Choose Us</h2>
          <ul className="mt-4 space-y-3 text-gray-600 list-disc pl-5">
            <li>
              <strong>Comprehensive Range:</strong> High-quality orthopedic implants designed to meet global standards.
            </li>
            <li>
              <strong>Patient-Centric Solutions:</strong> Commitment to superior quality, patient safety, and customized care.
            </li>
            <li>
              <strong>Innovative Designs:</strong> Solutions that enhance surgical efficiency with state-of-the-art technology.
            </li>
            <li>
              <strong>Global Reach:</strong> Extensive distribution network ensuring timely delivery worldwide.
            </li>
            <li>
              <strong>Customer Support:</strong> Exceptional post-surgical care and support services for healthcare professionals.
            </li>
          </ul>
        </div>

        {/* CUSTOM SEPARATOR */}
        <Separator />

        {/* GOAL Section */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800">Our Goal</h2>
          <p className="mt-4 text-gray-600">
            To provide healthcare professionals with the highest quality orthopedic implants and instruments, ensuring better patient outcomes globally.
          </p>
        </div>

        {/* CUSTOM SEPARATOR */}
        <Separator />

        {/* MISSION Section */}
        <div className="bg-gray-100 rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
          <p className="mt-4 text-gray-600">
            To improve patient outcomes and quality of life through innovative orthopedic solutions, setting new standards in patient care.
          </p>
        </div>

        {/* CUSTOM SEPARATOR */}
        <Separator />

        {/* SPECIALITY Section */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800">Our Speciality</h2>
          <ul className="mt-4 space-y-3 text-gray-600 list-disc pl-5">
            <li>Wide range of orthopedic implants, such as joint replacements, trauma implants, spine implants, and sports medicine implants.</li>
            <li>Anatomically accurate and custom-fitted implant options.</li>
            <li>Using advanced manufacturing methods and materials.</li>
            <li>Collaboration with healthcare professionals to ensure optimal care.</li>
            <li>Strict attention to regulations and compliance.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
