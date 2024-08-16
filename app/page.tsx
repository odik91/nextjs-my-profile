import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";

export default function Home() {
  return (
    <>
      <Hero />
      <Navbar page="home" />
      <Intro />
      <Footer />
    </>
  );
}
