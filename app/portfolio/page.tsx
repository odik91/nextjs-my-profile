import Footer from "@/components/global/Footer";
import { StandartLinkButton } from "@/components/global/GlobalButton";
import GlobalHero from "@/components/global/GlobalHero";
import Navbar from "@/components/global/Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import bg from "@/public/images/bg-resume.png";
import portfolio1 from "@/public/images/portfolio1.png";
import portfolio2 from "@/public/images/portfolio2.png";
import portfolio3 from "@/public/images/portfolio3.png";
import portfolio4 from "@/public/images/portfolio4.png";
import Image from "next/image";
import { Fragment } from "react";

const PortfolioPage = () => {
  const categories = [
    {
      title: "all",
      description:
        "All portfolio from all categoies include website, mobile app, desktop app, etc",
    },
    {
      title: "web",
      description:
        "This is my portfolio about web applications. This website was created using various technologies such as HTML, CSS, JavaScript, PHP, MySQL, Laravel, Node JS, React JS, Next JS, and many more.",
    },
    {
      title: "mobile",
      description:
        "This is my portfolio about mobile applications. The main technologies I used to build this application include React Native, Expo, and API endpoint technology built using Node JS or Laravel.",
    },
    {
      title: "etc",
      description:
        "All portfolio from all categoies include website, mobile app, desktop app, etc",
    },
  ];

  const listPortfolios = [
    {
      category: "web",
      title: "Content Management System (CMS) for Blog",
      image: portfolio1.src,
      description:
        "The tools used to create this project are PHP, Laravel 8, MySQL, and NGINX. This web application was developed to control the website's content, including news, blogs, and other types.",
      link: "/",
    },
    {
      category: "web",
      title: "Web Application Sistem Informasi Apotek",
      image: portfolio2.src,
      description:
        "This application was created with PHP Laravel, MySQL, and NGINX. This app was created for a college final assignment. This app searches for pharmacies, medications, and medical gadgets in the Riau Islands.",
      link: "/",
    },
    {
      category: "web",
      title: "Cookieshare",
      image: portfolio3.src,
      description:
        "Cookieshare is an example of a simple social networking front-end design. This website was built using html5, bootstrap 4, custom CSS3, and javascript.",
      link: "/",
    },
    {
      category: "web",
      title: "Simple PHPCMS Web App",
      image: portfolio4.src,
      description:
        "This web application was created with procedural PHP and is an old practice file for understanding the use of CRUD for blog management.",
      link: "/",
    },
    {
      category: "mobile",
      title: "test",
      image: portfolio4.src,
      description:
        "This web application was created with procedural PHP and is an old practice file for understanding the use of CRUD for blog management.",
      link: "/",
    },
  ];

  return (
    <main>
      <Navbar page="other" />
      <GlobalHero background={bg.src} title="Portfolio" />
      <div className="px-5 my-6 container">
        <Tabs defaultValue={categories[0].title}>
          <TabsList className="flex justify-center items-center">
            {categories.map((category) => {
              const { title, description } = category;
              return (
                <TabsTrigger value={title} key={title} className="capitalize">
                  {title}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {categories.map((category, index) => {
            const { title, description } = category;
            return (
              <TabsContent value={title} key={index}>
                <div className="border rounded-sm p-4 shadow-gray-200 shadow-md">
                  <h1 className="text-base font-medium">
                    <span className="capitalize text-rose-500">{title}</span>{" "}
                    Categories
                  </h1>
                  <p className="text-sm text-gray-700">{description}</p>
                  <Separator className="mt-4" />
                  <div className="grid md:grid-cols-3 gap-3 mt-3">
                    {title === "all" ? (
                      listPortfolios.map((item, i) => {
                        const { category, title: subtitle, image, description, link } =
                          item;

                        return (
                          <Card key={i}>
                            <CardHeader>
                              <CardTitle className="text-center">
                                {subtitle}
                              </CardTitle>
                              <CardDescription className="text-center">
                                Category: {category}
                              </CardDescription>
                              <Separator />
                            </CardHeader>
                            <CardContent>
                              <div className="flex justify-center items-center my-6">
                                <Image
                                  alt="portofolio1"
                                  src={image}
                                  sizes="(max-width: 768px) 100vw, 33vw"
                                  width={300}
                                  height={300}
                                />
                              </div>
                              <div className="text-center mb-4">
                                {description}
                              </div>
                              <div className="text-center mb-4">
                                <StandartLinkButton
                                  link={link}
                                  text="Read more..."
                                />
                              </div>
                            </CardContent>
                          </Card>
                        );
                      })
                    ) : (
                      listPortfolios
                        .filter((list) => list.category === category.title)
                        .map((item, i) => (
                          <Card key={i}>
                            <CardHeader>
                              <CardTitle className="text-center">{item.title}</CardTitle>
                              <CardDescription className="text-center">
                                Category: {item.category}
                              </CardDescription>
                              <Separator />
                            </CardHeader>
                            <CardContent>
                              <div className="flex justify-center items-center my-6">
                                <Image
                                  alt={item.title}
                                  src={item.image}
                                  sizes="(max-width: 768px) 100vw, 33vw"
                                  width={300}
                                  height={300}
                                />
                              </div>
                              <div className="text-center mb-4">{item.description}</div>
                              <div className="text-center mb-4">
                                <StandartLinkButton link={item.link} text="Read more..." />
                              </div>
                            </CardContent>
                          </Card>
                        ))
                    )}
                  </div>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
      <Footer />
    </main>
  );
};
export default PortfolioPage;
