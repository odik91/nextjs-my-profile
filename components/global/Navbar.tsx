"use client";
import avatar from "@/public/images/avatar.jpg";
import { type PageProps } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiMenuFill } from "react-icons/ri";
import { Button } from "../ui/button";
import { useState } from "react";

const Navbar = ({ page }: PageProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`${page !== 'home' ? 'sticky top-0 z-50 bg-gray-100 bg-opacity-80' : ''}`}>
      <div className="px-[15px] py-3 md:flex justify-evenly shadow-gray-200 shadow-md">
        <div className="flex md:hidden justify-end items-center px-4 py-2">
          <Button
            variant="secondary"
            className="block md:hidden lg:hidden active:bg-rose-400 active:shadow-sm active:shadow-gray-300 active:text-white"
            onClick={toggleMenu}
          >
            <RiMenuFill className="text-xl" />
          </Button>
        </div>

        <ul className={`md:flex md:justify-between md:items-center transition-all duration-1000 ease-in-out overflow-hidden ${isOpen ? 'h-[120px]' : 'h-0 md:h-auto'}`}>
          <li className={`${isOpen ? 'h-[40px] opacity-100 md:h-auto' : 'h-0 opacity-0 md:h-auto md:opacity-100 py-0'} box-border list-item py-2 pl-10 md:text-center md:py-0 md:pl-0 transition-all duration-1000 ease-in-out overflow-hidden`}>
            <Link
              href="/"
              className={`font-bold px-6 ${
                pathName === "/"
                  ? "text-rose-500"
                  : "text-gray-800 hover:text-opacity-80"
              }`}
            >
              Home
            </Link>
          </li>
          <li className={`${isOpen ? 'h-[40px] opacity-100 md:h-auto' : 'h-0 opacity-0 md:h-auto md:opacity-100 py-0'} box-border list-item py-2 pl-10 md:text-center md:py-0 md:pl-0 transition-all duration-1000 ease-in-out overflow-hidden`}>
            <Link
              href="/#about"
              className={`font-bold px-6 ${
                pathName === "/*"
                  ? "text-rose-500"
                  : "text-gray-800 hover:text-opacity-80"
              }`}
            >
              About
            </Link>
          </li>
          <li className={`${isOpen ? 'h-[40px] opacity-100 md:h-auto' : 'h-0 opacity-0 md:h-auto md:opacity-100 py-0'} box-border list-item py-2 pl-10 md:text-center md:py-0 md:pl-0 transition-all duration-1000 ease-in-out overflow-hidden`}>
            <Link
              href="/resume"
              className={`font-bold px-6 ${
                pathName === "/resume"
                  ? "text-rose-500"
                  : "text-gray-800 hover:text-opacity-80"
              }`}
            >
              Resume
            </Link>
          </li>
        </ul>
        <ul className="hidden md:block text-center relative min-w-[170px]">
          <Image
            alt="avatar"
            src={avatar}
            placeholder="blur"
            quality={80}
            className={`${
              page === "home" ? "block" : "hidden"
            } absolute left-[50%] top-[50%] border-[10px] border-white shadow-md z-10 rounded-full transform -translate-x-[50%] -translate-y-[50%] transition-all`}
            style={{ width: "170px" }}
          />
          <li className={`${page === "home" ? "text-white" : ""}`}>
            <h5 className="text-xl font-medium">Ali Shoddiqien</h5>
            <div className="text-xs font-light">
              Fullstack Developer | Graphic Designer
            </div>
          </li>
        </ul>
        <ul className={`md:flex md:justify-between md:items-center transition-all duration-1000 ease-in-out overflow-hidden ${isOpen ? 'h-[120px]' : 'h-0 md:h-auto'}`}>
          <li className={`${isOpen ? 'h-[40px] opacity-100 md:h-auto' : 'h-0 opacity-0 md:h-auto md:opacity-100 py-0'} box-border list-item py-2 pl-10 md:text-center md:py-0 md:pl-0 transition-all duration-1000 ease-in-out overflow-hidden`}>
            <Link
              href="/services"
              className={`font-bold px-6 ${
                pathName === "/services"
                  ? "text-rose-500"
                  : "text-gray-800 hover:text-opacity-80"
              }`}
            >
              Services
            </Link>
          </li>
          <li className={`${isOpen ? 'h-[40px] opacity-100 md:h-auto' : 'h-0 opacity-0 md:h-auto md:opacity-100 py-0'} box-border list-item py-2 pl-10 md:text-center md:py-0 md:pl-0 transition-all duration-1000 ease-in-out overflow-hidden`}>
            <Link
              href="/portfolio"
              className={`font-bold px-6 ${
                pathName === "/portfolio"
                  ? "text-rose-500"
                  : "text-gray-800 hover:text-opacity-80"
              }`}
            >
              Portfolio
            </Link>
          </li>
          <li className={`${isOpen ? 'h-[40px] opacity-100 md:h-auto' : 'h-0 opacity-0 md:h-auto md:opacity-100 py-0'} box-border list-item py-2 pl-10 md:text-center md:py-0 md:pl-0 transition-all duration-1000 ease-in-out overflow-hidden`}>
            <Link
              href="/contact"
              className={`font-bold px-6 ${
                pathName === "/contact"
                  ? "text-rose-500"
                  : "text-gray-800 hover:text-opacity-80"
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
