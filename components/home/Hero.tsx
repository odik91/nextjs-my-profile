"use client";

import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import bg from "@/public/images/bg.jpg";
import SocialMedia from "../global/SocialMedia";
import HeroContent from "./HeroContent";

const Hero = () => {
  const {isVisible, elementRef} = useIntersectionObserver()
  
  return (
    <header
      className="relative flex justify-center h-[80vh] min-h-[600px]"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        ref={elementRef}
        className={`relative container h-[100%] max-w-[90vw] p-[15px] transition-all duration-1000 ease-in-out delay-150 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[400px]"
        }`}
      >
        <SocialMedia page="home" />
        <HeroContent />
      </div>
    </header>
  );
};
export default Hero;
