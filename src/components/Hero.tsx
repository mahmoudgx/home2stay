import React from "react";
import active from "../assets/active.svg";
import inactive from "../assets/inactive.svg";
import leftarrow from "../assets/leftArrow.svg";
import rightArrow from "../assets/rightArrow.svg";

interface HeroProps {
  currentSlide: number;
  totalSlides: number;
  onNextSlide: () => void;
  onPrevSlide: () => void;
}

const Hero: React.FC<HeroProps> = ({
  currentSlide,
  totalSlides,
  onNextSlide,
  onPrevSlide,
}) => {
  return (
    <>
      <div className="px-4 pt-12 md:pt-32 md:pl-36 md:pr-32 lg:pr-[566px]">
        <div>
          <h1 className="text-base md:text-lg text-white pb-2">20/14</h1>
        </div>
        <div>
          <h2 className="text-4xl md:text-6xl lg:text-[88px] font-medium text-white leading-tight md:leading-[90%] pb-6 md:pb-8">
            FIND THE PERFECT AND SIMPLE
            <br className="hidden md:block" /> - PROPERTIES
          </h2>
        </div>
        <div>
          <p className="text-white text-sm md:text-base uppercase leading-relaxed md:leading-[140%] pb-8 md:pb-10">
            Find a variety of studio apartments of your own, share fantastic
            living and work spaces, and discover modern properties with one
            simple payment fee.
          </p>
        </div>
        <div className="pb-16 md:pb-60">
          <button className="border uppercase border-white py-3 px-8 rounded-full text-white text-base hover:bg-white hover:text-black transition-colors">
            Discovery
          </button>
        </div>
      </div>

      <div className="flex justify-between px-4 pb-8 md:pb-8 md:px-14 lg:pl-[59px] lg:pr-[563px]">
        <div className="flex items-center text-white">
          <h1 className="pr-4">{`0${currentSlide + 1}`}</h1>
          <div className="flex items-center space-x-2">
            {[...Array(totalSlides)].map((_, index) => (
              <img
                key={index}
                src={index === currentSlide ? active : inactive}
                alt={index === currentSlide ? "active" : "inactive"}
                className="w-4 md:w-auto"
              />
            ))}
          </div>
        </div>
        <div className="flex space-x-1 md:space-x-2 text-white">
          <button onClick={onPrevSlide} className="p-2 hover:opacity-80">
            <img
              src={leftarrow}
              alt="Previous slide"
              className="w-8 md:w-auto"
            />
          </button>
          <button onClick={onNextSlide} className="p-2 hover:opacity-80">
            <img src={rightArrow} alt="Next slide" className="w-8 md:w-auto" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
