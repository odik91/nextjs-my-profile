"use client";
import Footer from "@/components/global/Footer";
import GlobalHero from "@/components/global/GlobalHero";
import Navbar from "@/components/global/Navbar";
import SingleWordUnderline from "@/components/global/SingleWordUnderline";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import bg from "@/public/images/bg-resume.png";

const ResumePage = () => {
  return (
    <main>
      <Navbar page="other" />
      <GlobalHero background={bg.src} title="Resume" />
      <div className="px-5 my-20 py-3 border border-red-500">
        <div className="container grid grid-cols-3 gap-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-medium">Work Experience</CardTitle>
              <SingleWordUnderline />
            </CardHeader>
            <CardContent>
              <h5 className="text-rose-500 font-medium" style={{fontSize:"calc(15px + (20 - 15) * ((100vw - 300px) / (1300 - 300)))"}}>Desc 2022 - March 2024</h5>
            </CardContent>
          </Card>
          <div>content</div>
          <div>content</div>
        </div>
      </div>
      <Footer />
    </main>
  );
};
export default ResumePage;
