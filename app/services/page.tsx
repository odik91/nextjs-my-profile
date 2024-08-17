import Footer from "@/components/global/Footer";
import GlobalHero from "@/components/global/GlobalHero";
import Navbar from "@/components/global/Navbar";
import ServiceCard from "@/components/myservices/ServiceCard";
import bg from "@/public/images/bg-services.png";
import { RiArchiveStackLine, RiBrush4Line, RiCloudWindyLine, RiCodeBlock, RiComputerLine, RiShieldCheckLine, RiSmartphoneLine } from "react-icons/ri";

const ServicesPage = () => {
  return (
    <main>
      <Navbar page="other" />
      <GlobalHero background={bg.src} title="Services" />
      <section className="w-full h-32 min-h-10 bg-gray-700 align-middle flex justify-center items-center">
        <h1 className="text-gray-300 font-medium text-3xl">
          I Am Available For FreeLance
        </h1>
      </section>
      <section className="px-5 mb-6 mt-16">
        <div className="container grid justify-items-center grid-cols-1 md:grid-cols-3 gap-5">
          <ServiceCard
            icon={<RiCodeBlock className="text-5xl" />}
            title="Web Development"
            description="You want to create a website or a website-based application. You can rely on me as a web developer to create websites and applications that will help you promote your business and simplify your operations. You don't have to wait any longer. I have these abilities, as evidenced by the attachments to my portfolio."
          />
          <ServiceCard
            icon={<RiCloudWindyLine className="text-5xl" />}
            title="Web App Deployment"
            description="You want to create a website or a website-based application. You can rely on me as a web developer to create websites and applications that will help you promote your business and simplify your operations. You don't have to wait any longer. I have these abilities, as evidenced by the attachments to my portfolio."
          />
          <ServiceCard
            icon={<RiSmartphoneLine className="text-5xl" />}
            title="Mobile App Development"
            description="You want to create a website or a website-based application. You can rely on me as a web developer to create websites and applications that will help you promote your business and simplify your operations. You don't have to wait any longer. I have these abilities, as evidenced by the attachments to my portfolio."
          />
          <ServiceCard
            icon={<RiComputerLine className="text-5xl" />}
            title="Software for Desktop"
            description="You want to create a website or a website-based application. You can rely on me as a web developer to create websites and applications that will help you promote your business and simplify your operations. You don't have to wait any longer. I have these abilities, as evidenced by the attachments to my portfolio."
          />
          <ServiceCard
            icon={<RiArchiveStackLine className="text-5xl" />}
            title="System Analyst"
            description="You want to create a website or a website-based application. You can rely on me as a web developer to create websites and applications that will help you promote your business and simplify your operations. You don't have to wait any longer. I have these abilities, as evidenced by the attachments to my portfolio."
          />
          <ServiceCard
            icon={<RiBrush4Line className="text-5xl" />}
            title="Graphic Design"
            description="You want to create a website or a website-based application. You can rely on me as a web developer to create websites and applications that will help you promote your business and simplify your operations. You don't have to wait any longer. I have these abilities, as evidenced by the attachments to my portfolio."
          />
          <ServiceCard
            icon={<RiShieldCheckLine className="text-5xl" />}
            title="Consultation"
            description="You want to create a website or a website-based application. You can rely on me as a web developer to create websites and applications that will help you promote your business and simplify your operations. You don't have to wait any longer. I have these abilities, as evidenced by the attachments to my portfolio."
          />
        </div>
      </section>
      <Footer />
    </main>
  );
};
export default ServicesPage;
