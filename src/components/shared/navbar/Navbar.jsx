"use client";
import Link from "next/link";
import ButtonFilled from "../ButtonFilled/ButtonFilled";
import ThemeSwitch from "@/components/ThemeSwitch";
import NavbarSmallDevice from "./NavbarSmallDevice";

const Navbar = () => {
  const navItems = [
    {
      navItem: "Home",
      route: "/",
    },
    {
      navItem: "Specialties",
      route: "/specialties",
    },
    {
      navItem: "Services",
      route: "/services",
    },
    {
      navItem: "About us",
      route: "/about-us",
    },
    {
      navItem: "Blog",
      route: "/blog",
    },
  ];
  return (
    <div className="max-content-width section-padding-x ">
      <NavbarSmallDevice  navItems={navItems}/>
      <div className="hidden lg:flex py-6 justify-between items-center">
        <div>
          <h1 className="text-xl">Logo</h1>
        </div>
        <div>
          <ul className="flex items-center gap-10 xl:gap-16">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  className="font-semibold text-[#121212] dark:text-az-textDark text-sm md:text-base"
                  href={item?.route}
                >
                  {item?.navItem}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex items-center gap-3">
            <ThemeSwitch />
            <ButtonFilled text="Book Schedule" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
