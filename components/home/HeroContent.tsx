import { MainLinkButton } from "../global/GlobalButton";

const HeroContent = () => {
  const name = "Ali Shoddiqien";
  const skills = ["Fullstack Developer", "Graphic Designer"];
  const linkCv =
    "https://drive.google.com/file/d/1j9h0sQTCCMAAAtn8WbHXa0hwQ28gw2DM/view?usp=sharing";
  return (
    <div className="absolute w-[100%] left-0 top-[55%] -translate-y-[50%] text-slate-50 px-4 md:px-8">
      <h4
        className="font-normal leading-10"
        style={{
          fontSize: "calc(20px + (45 - 20) * ((100vw - 300px) / (1600 - 300)))",
        }}
      >
        Hello, I am
      </h4>
      <h1
        className="font-bold leading-none mb-2"
        style={{
          fontSize:
            "calc(40px + (120 - 40) * ((100vw - 300px) / (1600 - 300)))",
        }}
      >
        {name}
      </h1>
      <h6
        className="tracking-widest mb-10"
        style={{
          fontSize: "calc(12px + (19 - 12) * ((100vw - 300px) / (1600 - 300)))",
        }}
      >
        {skills.map((skill, index) => {          
          if (index == skills.length - 1) {
            return <>{skill}</>
          }
          return <>{skill} | </>
        })}
      </h6>
      <MainLinkButton linkCv={linkCv} />
    </div>
  );
};
export default HeroContent;
