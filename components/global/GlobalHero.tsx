const GlobalHero = ({
  background,
  title,
}: {
  background: string;
  title: string;
}) => {
  return (
    <div
      className="h-[30vh] min-h-[300px] flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1
        className="text-white text-6xl capitalize"
        style={{
          textShadow: "0 0 3px #00000f, 0 0 5px #00000f",
          fontSize: "calc(40px + (45 - 20) * ((100vw - 300px) / (1600 - 300)))",
        }}
      >
        <span className="text-red-400">My</span> {title}
      </h1>
    </div>
  );
};
export default GlobalHero;
