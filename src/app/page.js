// src/app/page.js
import Navbar from "./Navbar";
import Home from "./Home";
import InfoCards from "./InfoCards";
import AboutUs from "./AboutUs";
import Footer from "./footer";
import BlogSection from "./BlogSection";
export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Home />
      <InfoCards />
      <AboutUs/>

      <Footer/>
      <div>
        {/* Other content */}
      </div>
    </div>
  );
}


