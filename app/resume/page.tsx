"use client";
import Footer from "@/components/global/Footer";
import GlobalHero from "@/components/global/GlobalHero";
import Navbar from "@/components/global/Navbar";
import CardInfo from "@/components/resume/CardInfo";
import bg from "@/public/images/bg-resume.png";

const ResumePage = () => {
  const workExperiences = [
    {
      header: "Desc 2022 - March 2024",
      subHeader: "Fullstack Web Developer at PT. Graha Kreasi Solusindo",
      description: "Responsible to build, maintenance and deploy web aplication.",
    },
    {
      header: "May 2018 - Sept 2022",
      subHeader: "Graphic Designer & Operator Outdoor Printer at Syscom Printing Batam",
      description: "Responsible to design and print banners, books, leaflet, brochure, book cover, id card, name card, etc.",
    },
  ];

  const educations = [
    {
      header: "Sept 2018 - Sept 2022",
      subHeader: "Batam University (Graduate With GPA 3.84)",
      description: "Sistem Informasi (Bachelor Degree) Major: Analyze system, web developer, sistem management, accpunting information system, healthcare system information, etc.",
    },
    {
      header: "Feb 2022 - Jul 2022",
      subHeader: "Bangkit Academy (Graduate)",
      description: "(Cloud Computing Learning Path). MSIB Kemendikbud Bangkit Academy 2022 by Google, GoTo, Traveloka - Cloud Computing Learning Path in major program Cloud Computing with Google Cloud Platform for analyze and solution infrastructure needed.",
    },
    {
      header: "Sept 2005 - Sept 2008",
      subHeader: "UNISA (Partial Graduate)",
      description: "Nurse (Bachelor Degree)",
    },
    {
      header: "Jul 2005 - Jul 2008",
      subHeader: "SMA N 2 KUNDUR (Graduate)",
      description: "Program Studi IPA",
    },
  ]

  const certifications = [
    {
      header: "Junior Web Programmer (BNSP)",
      subHeader: "Agustus 2022 - Agustus 2025",
      description: "The BSNP (Badan Sertifikasi Nasional Profesi) awards this certificate for the competence of a junior web programmer.",
    },
  ]

  const skills = [
    {
      header: "HTML & CSS",
      subHeader: "76",
    },
    {
      header: "Javascript",
      subHeader: "75",
    },
    {
      header: "PHP",
      subHeader: "85",
    },
    {
      header: "SQL",
      subHeader: "70",
    },
    {
      header: "Laravel",
      subHeader: "80",
    },
    {
      header: "ReactJS",
      subHeader: "70",
    },
    {
      header: "NextJS",
      subHeader: "70",
    },
    {
      header: "React Native",
      subHeader: "60",
    },
    {
      header: "NodeJS",
      subHeader: "68",
    },
    {
      header: "Corel Draw",
      subHeader: "90",
    },
  ]

  const languages = [
    {
      header: "Indonesia",
      subHeader: "100",
    },
    {
      header: "English",
      subHeader: "65",
    },
    {
      header: "Melayu",
      subHeader: "85",
    },
  ]
  return (
    <main>
      <Navbar page="other" />
      <GlobalHero background={bg.src} title="Resume" />
      <div className="px-5 my-6">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-5">
          <CardInfo title="Work Experience" type="content" data={workExperiences} />
          <CardInfo title="Educations" type="content" data={educations} />
          <CardInfo title="Certifications" type="content" data={certifications} />
          <CardInfo title="Skills" type="skill" data={skills} />
          <CardInfo title="Languages" type="skill" data={languages} />
        </div>
      </div>
      <Footer />
    </main>
  );
};
export default ResumePage;
