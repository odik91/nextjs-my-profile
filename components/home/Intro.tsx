"use client";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import MyExpertises from "./MyExpertises";
import PersonalInfo from "./PersonalInfo";
import WhoAmI from "./WhoAmI";

const Intro = () => {
  const {isVisible, elementRef} = useIntersectionObserver(0.1, false)

  return (
    <div
      ref={elementRef}
      className={`grid lg:grid-cols-3 border-b border-gray-200 transition-all duration-1000 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      id="about"
    >
      <WhoAmI />

      <div className="px-[60px] lg:hidden">
        <hr />
      </div>

      <PersonalInfo />

      <div className="px-[60px] lg:hidden">
        <hr />
      </div>

      <MyExpertises />
    </div>
  );
};
export default Intro;
