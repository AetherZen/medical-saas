import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-[#F0FAFA] dark:bg-gray-900 section-padding-x ">
      <div className="max-content-width grid grid-cols-10 py-10 lg:py-16 gap-y-5">
        <div className="col-span-10 lg:col-span-4">
          <div className="lg:mr-10 text-center lg:text-left">
            <h1 className="text-lg md:text-2xl dark:text-az-textDark">Logo</h1>
            <p className="my-4 md:my-8 text-sm md:text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-5">
              <FaFacebook className="text-az-primary h-5 w-5 lg:h-6 lg:w-6" />
              <RiInstagramFill className="text-az-primary h-6 w-6 lg:h-7 lg:w-7" />
              <FaYoutube className="text-az-primary h-6 lg:h-7  w-7 lg:w-8" />
            </div>
          </div>
        </div>
        <div className="col-span-10 lg:col-span-2">
          <h1 className="lg:text-xl dark:text-az-textDark whitespace-nowrap text-center lg:text-left">QUICK LINK</h1>
          <div className="flex mt-3 justify-center flex-wrap  lg:flex-col gap-3 lg:mt-8 ">
            <Link className="text-sm md:text-base dark:text-az-textDark text-[#4D4D4D] inline-block lg:block" href="/home">
              <p>Home</p>
            </Link>
            <Link className="text-sm md:text-base dark:text-az-textDark text-[#4D4D4D] inline-block lg:block" href="/home">
              <p>Team</p>
            </Link>
            <Link className="text-sm md:text-base dark:text-az-textDark text-[#4D4D4D] inline-block lg:block" href="/home">
              <p>Testimonials</p>
            </Link>
            <Link className="text-sm md:text-base dark:text-az-textDark text-[#4D4D4D] inline-block lg:block" href="/home">
              <p className="whitespace-nowrap">Blog Grid</p>
            </Link>
            <Link className="text-sm md:text-base dark:text-az-textDark text-[#4D4D4D] inline-block lg:block" href="/home">
              <p>FAQ</p>
            </Link>
          </div>
        </div>
        <div className="hidden lg:block lg:col-span-2">
          <h1 className="text-xl dark:text-az-textDark">INFORMATION</h1>
          <div className="space-y-3 mt-8">
            <Link className="dark:text-az-textDark text-sm md:text-base text-[#4D4D4D] block" href="/home">
              <p>Privacy Policy</p>
            </Link>
            <Link className="dark:text-az-textDark text-sm md:text-base text-[#4D4D4D] block" href="/home">
              <p>Terms & Conditions</p>
            </Link>
            <Link className="dark:text-az-textDark text-sm md:text-base text-[#4D4D4D] block" href="/home">
              <p>Accessibility Statements</p>
            </Link>
            <Link className="dark:text-az-textDark text-sm md:text-base text-[#4D4D4D] block" href="/home">
              <p>Cookie Policy</p>
            </Link>
            <Link className="dark:text-az-textDark text-sm md:text-base text-[#4D4D4D] block" href="/home">
              <p>Languages</p>
            </Link>
          </div>
        </div>
        <div className="hidden lg:block lg:col-span-2">
          <h1 className="text-xl dark:text-az-textDark">CONTACT US</h1>
          <div className="space-y-3 mt-8">
            <Link className="text-sm md:text-base dark:text-az-textDark text-[#4D4D4D] block" href="/home">
              <p>+8801702 000000</p>
            </Link>
            <Link className="text-sm md:text-base dark:text-az-textDark text-[#4D4D4D] block" href="/home">
              <p>+8801702 000000</p>
            </Link>
            <Link className="text-sm md:text-base dark:text-az-textDark text-[#4D4D4D] block" href="/home">
              <p>+8801702 000000</p>
            </Link>
            <Link className="text-sm md:text-base dark:text-az-textDark text-[#4D4D4D] block" href="/home">
              <p>hellocompany@gmail.com</p>
            </Link>
            <Link className="text-sm md:text-base dark:text-az-textDark text-[#4D4D4D] block" href="/home">
              <p>hellocompany@gmail.com</p>
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <p className="text-center text-[#4D4D4D] dark:text-[#726e6e] py-8 font-medium">
        © Copyright AetherZen IT 2023 . All right reserved.
      </p>
    </div>
  );
};

export default Footer;
