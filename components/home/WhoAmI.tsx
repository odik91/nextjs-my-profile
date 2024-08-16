import { StandartLinkButton } from "../global/GlobalButton";
import SingleWordUnderline from "../global/SingleWordUnderline";

const WhoAmI = () => {
  return (
    <div className="p-[60px]">
      <h3 className="text-3xl">Who am I ?</h3>
      <SingleWordUnderline />
      <h5 className="text-xl mb-4">Fullstack Developer and Graphic Designer</h5>
      <p
        className="opacity-80 text-gray-700 mb-6"
        style={{
          fontSize: "calc(13px + (14 - 13) * ((100vw - 300px) / (1300 - 300)))",
        }}
      >
        I am a full-stack web developer with personal project experience in
        various programming languages, particularly PHP and the Laravel
        framework. I am also a graphic designer with over four years of
        experience working on real-world projects. Experienced and capable of
        incorporating customer needs into a digital printing product.
      </p>
      <StandartLinkButton
        link="https://drive.google.com/file/d/1j9h0sQTCCMAAAtn8WbHXa0hwQ28gw2DM/view?usp=sharing"
        text="Download My CV"
      />
    </div>
  );
};
export default WhoAmI;
