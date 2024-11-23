import ButtonFilled from "@/components/shared/ButtonFilled/ButtonFilled";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="max-content-width section-padding-x section-padding-y bg-[#EAF2F8]">
      <div className="grid grid-cols-1 items-center xl:grid-cols-2 lg:gap-11">
        <div>
          <h1 className="text-2xl md:text-6xl text-center lg:text-start font-semibold">
            World s Best No.1 Hospital Support and Services Platform.
          </h1>
          <p className="my-14 hidden lg:block ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 md:gap-5 my-8 lg:my-0">
            {" "}
            <ButtonFilled text="Explore Our Services" />{" "}
            <Link className="underline font-medium text-[12px]" href="/">
              <p>Contact Emergency Schedule</p>
            </Link>
          </div>
        </div>
        <div>
          <div>
            <div className="hidden xl:flex bg-[#F8F8FD] h-[332px] relative rounded-xl">
              <div className="">
                <div className=" flex gap-6 items-center">
                  <div className="w-[69px] h-[100px] bg-[#D8EBF2] rounded-tl-xl rounded-br-xl "></div>
                  <h1 className="text-xl max-w-[296px] font-medium">
                    What is the Problem Happening with You Today?
                  </h1>
                </div>
                {/* navigation section */}
                <div className="flex flex-wrap gap-5 max-w-[410px] my-6 px-7">
                  <Link href="/">
                    <button className="border border-az-primary rounded-sm   md:py-1.5 px-4 text-sm md:text-base">
                      Back pain
                    </button>
                  </Link>
                  <Link href="/">
                    <button className="border border-az-primary rounded-sm   md:py-1.5 px-4 text-sm md:text-base">
                      Headache
                    </button>
                  </Link>
                  <Link href="/">
                    <button className="border border-az-primary rounded-sm   md:py-1.5 px-4 text-sm md:text-base">
                      Fever
                    </button>
                  </Link>
                  <Link href="/">
                    <button className="border border-az-primary rounded-sm   md:py-1.5 px-4 text-sm md:text-base">
                      Itching
                    </button>
                  </Link>
                  <Link href="/">
                    <button className="border border-az-primary bg-az-primary text-white rounded-sm   md:py-1.5 px-4 text-sm md:text-base">
                      Stress
                    </button>
                  </Link>
                </div>

                <div className="px-7 mt-8">
                  <Link className="flex items-center gap-3" href="/">
                    See Details <FaArrowRight />{" "}
                  </Link>
                </div>
              </div>
              <Image
                alt="Banner_Doctor"
                src="/banner_doctor.png"
                height={410}
                width={300}
                className="absolute bottom-0 -right-10 h-[300px] w-[200px] xl:h-[410px] xl:w-[300px]"
              />
            </div>

            {/* form section */}
            <div className="bg-white relative p-8 mt-5 rounded-xl">
              <div className=" flex gap-6 items-center">
                <div className="md:hidden absolute top-0 left-0  w-14 h-14 bg-[#D8EBF2] rounded-tl-xl rounded-br-xl "></div>
                <h1 className="text-xl ml-12 md:ml-0 font-medium">
                  Book an Make Appointment Now!
                </h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10   mt-10">
                <div>
                  <input
                    className="border-b-2 placeholder:text-[#121212] py-1 text-[12px] md:text-base w-full focus:outline-none border-gray-300"
                    type="text"
                    placeholder="Name *"
                    name="name"
                  />
                </div>
                <div>
                  <input
                    className="border-b-2 placeholder:text-[#121212] py-1 text-[12px] md:text-base w-full focus:outline-none border-gray-300"
                    type="text"
                    placeholder="Email *"
                    name="email"
                  />
                </div>
                <div>
                  {" "}
                  <input
                    className="border-b-2 placeholder:text-[#121212] py-1 text-[12px] md:text-base w-full focus:outline-none border-gray-300"
                    type="text"
                    placeholder="Appointment Date* *"
                    name="appointment_date"
                  />
                </div>
                <div>
                  <input
                    className="border-b-2 placeholder:text-[#121212] py-1 text-[12px] md:text-base w-full focus:outline-none border-gray-300"
                    type="text"
                    placeholder="Appointment Time* *"
                    name="appointment_time"
                  />
                </div>
                <div className="md:col-span-2 flex justify-center">
                  <ButtonFilled text="Submit Now" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
