import { type PageProps } from "@/utils/types";
import Link from "next/link";
import {
  RiFacebookFill,
  RiGithubFill,
  RiInstagramLine,
  RiLinkedinFill,
} from "react-icons/ri";

const SocialMedia = ({ page }: PageProps) => {
  const socialMediaItems: {
    name: string;
    link: string;
    icon: JSX.Element;
  }[] = [
    {
      name: "facebook",
      link: "https://web.facebook.com/ODIK91/",
      icon: <RiFacebookFill />,
    },
    {
      name: "instagram",
      link: "https://www.instagram.com/ali.shoddiqien/",
      icon: <RiInstagramLine />,
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/ali-shoddiqien-80752064",
      icon: <RiLinkedinFill />,
    },
    {
      name: "github",
      link: "https://github.com/odik91",
      icon: <RiGithubFill />,
    },
  ];

  const homeUlClass =
    "justify-center m-auto sm:m-2 md:m-2 lg:m-2 sm:justify-center md:justify-center lg:justify-start";
  const homeTextColor = "text-slate-50 hover:text-slate-200";
  const otherUlClass = "justify-start";
  const otherTextColor = "text-rose-500 hover:text-rose-600";
  return (
    <ul
      className={`flex ${
        page === "home" ? homeUlClass : otherUlClass
      } list-none pl-0 max-w-[180px] pt-3`}
    >
      {socialMediaItems.map((socialMediaItem) => {
        const { name, link, icon } = socialMediaItem;
        return (
          <li className="list-item box-border mr-4" key={name}>
            <Link
              href={link}
              target="_blank"
              className={`font-light text-[24px] ${
                page === "home" ? homeTextColor : otherTextColor
              }`}
            >
              {icon}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default SocialMedia;
