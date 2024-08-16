const Footer = () => {
  return (
    <footer className="bg-[#17263C] py-4">
      <div className="container max-w-[90vw] px-[15px]">
        <p className="text-slate-100 font-light text-sm">
          Ali Shoddiqien &copy; {new Date().getFullYear()}. This website was
          build with Nextjs, TypeScrypt and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
