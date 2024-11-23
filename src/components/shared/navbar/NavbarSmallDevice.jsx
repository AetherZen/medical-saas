"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiHome5Line } from "react-icons/ri";
import { RiHome5Fill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FaSquarePlus } from "react-icons/fa6";
import { BsList } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NavbarSmallDevice = ({ navItems }) => {
  const pathName = usePathname();
  return (
    <div className="z-50 bg-white border-t  lg:hidden  fixed bottom-0 left-0 w-full section-padding-x">
      <div className="flex  justify-between py-3 items-center  max-w-lg mx-auto  ">
        <div className="flex md:justify-around gap-7 flex-1 ">
          <Link href="/">
            {" "}
            {pathName === "/" && "text-az-primary" ? (
              <RiHome5Fill className={`text-3xl md:text-4xl text-az-primary`} />
            ) : (
              <RiHome5Line
                className={`text-3xl md:text-4xl text-az-primary `}
              />
            )}
          </Link>
          <div>
            <IoSearch className="text-3xl md:text-4xl text-az-primary" />
          </div>
        </div>
        <div className="flex-1">
          <div className="p-4 bg-az-primary rounded-full mx-auto w-max -mt-14">
            <FaCalendarAlt className="text-white text-2xl" />
          </div>
        </div>
        <div className="flex gap-7 flex-1 md:justify-around justify-end">
          <Link href="/">
            {" "}
            {pathName === "/services" && "text-az-primary" ? (
              <FaSquarePlus
                className={`text-3xl md:text-4xl text-az-primary`}
              />
            ) : (
              <FaRegSquarePlus
                className={`text-3xl md:text-4xl text-az-primary `}
              />
            )}
          </Link>

          <Sheet className="">
            <SheetTrigger asChild>
              <BsList className="text-az-primary text-3xl md:text-4xl" />
            </SheetTrigger>
            <SheetContent className="bg-white ">
              <SheetHeader>
                <SheetTitle></SheetTitle>
                <SheetDescription></SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                {navItems?.map((item, idx) => (
                  <Link
                    className={`${
                      pathName === item?.route &&
                      "text-az-primary font-semibold underline"
                    } text-sm md:text-base`}
                    key={idx}
                    href={item?.route}
                  >
                    <p>{item?.navItem}</p>
                  </Link>
                ))}
              </div>
              <SheetFooter>
                <SheetClose asChild></SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default NavbarSmallDevice;
