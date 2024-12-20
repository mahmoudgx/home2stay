import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Search from "./components/Search";
import About from "./components/About";
import Service from "./components/Service";
import Project from "./components/Project";
import Testimonial from "./components/Testimonial";
import Client from "./components/Client";
import Notification from "./components/Notification";
import Footer from "./components/Footer";

const backgrounds = [
  "https://images.unsplash.com/photo-1513052467476-a11357d170a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1721623905125-af5f7b7fb18b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1732090710564-930fd2f8b296?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const App = () => {
  const [currentBackground, setCurrentBackground] = useState(0);

  const handleNextBackground = () => {
    setCurrentBackground((prev) => (prev + 1) % backgrounds.length);
  };

  const handlePrevBackground = () => {
    setCurrentBackground((prev) =>
      prev === 0 ? backgrounds.length - 1 : prev - 1
    );
  };

  return (
    <>
      <div
        className="relative bg-cover bg-center min-h-screen lg:h-auto"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${backgrounds[currentBackground]}')`,
        }}
      >
        <Header />
        <hr className="opacity-30" />
        <div className="relative">
          <Hero
            currentSlide={currentBackground}
            totalSlides={backgrounds.length}
            onNextSlide={handleNextBackground}
            onPrevSlide={handlePrevBackground}
          />
          {/* Search positioned absolutely on desktop, normally in flow on mobile */}
          <div className="px-4 lg:px-0 pb-8 lg:pb-0">
            <Search />
          </div>
        </div>
      </div>
      <About />
      <Service />
      <Project />
      <Testimonial />
      <Client />
      <Notification />
      <Footer />
    </>
  );
};

export default App;
