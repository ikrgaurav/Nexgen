// src/app/page.js
import Navbar from "./Navbar";
import Home from "./Home";
import InfoCards from "./InfoCards";
import AboutUs from "./AboutUs";
export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Home />
      <InfoCards />
      <AboutUs/>
      <div>
        {/* Other content */}
      </div>
    </div>
  );
}


