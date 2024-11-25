import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="section-padding-x bg-[#F1F4FB]">
      {/* About Us Section */}
      <div className="section-padding-y">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-center">
          About Us
        </h1>
        <div className=" grid grid-cols-1  lg:grid-cols-7 items-center gap-6 lg:gap-10 xl:gap-14 mt-14 xl:mt-28">
          <div className="col-span-7 lg:col-span-4 ">
            <h1 className="md:text-lg lg:text-2xl font-semibold">
              “HOSPITAL NAME” General Information{" "}
            </h1>
            <div className="text-justify mt-5 space-y-6">
              <p className="text-[12px] md:text-sm lg:text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>

              <p className="text-[12px] md:text-sm lg:text-base hidden lg:block">
                Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
                Cicero, written in 45 BC. This book is a treatise on the theory
                of ethics, very popular during the Renaissance. written in 45
                BC. This book is a treatise on the theory of ethics, very
                popular during the Renaissance.
              </p>

              <p className="text-[12px] md:text-sm lg:text-base hidden xl:block">
                Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
                Cicero, written in 45 BC. This book is a treatise on the theory
                of ethics, very popular during the Renaissance. The first line
                of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a
                line in section 1.10.32.
              </p>
            </div>
          </div>
          <div className="col-span-7 lg:col-span-3">
            <Image
              src="/about_us_1.png"
              alt="about us"
              height={500}
              width={538}
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/*  Mission & Vision*/}
      <div className="section-padding-y grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6 xl:gap-14">
        <div className="grid grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-1 md:gap-2.5">
          <Image
            height={320}
            width={190}
            alt="about us"
            className="rounded-md md:flex-1 h-full w-full"
            src="/about_us_2.1.png"
          />
          <Image
            height={320}
            width={190}
            alt="about us"
            className="rounded-md h-full w-full"
            src="/about_us_2.2.png"
          />
          <Image
            height={320}
            width={190}
            alt="about us"
            className="rounded-md lg:hidden xl:block h-full w-full "
            src="/about_us_2.3.png"
          />
        </div>
        <div className="order-first lg:order-last">
          <div className="text-justify  space-y-6">
            <h1 className="md:text-lg lg:text-2xl font-semibold">
              “HOSPITAL NAME” Mission{" "}
            </h1>
            <p className="text-[12px] md:text-sm lg:text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book.
            </p>
          </div>
          <div className="text-justify mt-5 space-y-6">
            <h1 className="md:text-lg lg:text-2xl font-semibold">
              “HOSPITAL NAME” Vision{" "}
            </h1>
            <p className="text-[12px] md:text-sm lg:text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="section-padding-y">
        <div className="text-justify space-y-3 md:space-y-6">
          <h1 className="text-lg md:text-2xl font-semibold">
            Meet Our Board of Directors{" "}
          </h1>
          <p className="text-[12px] md:text-sm lg:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
            <span className="hidden md:inline">
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1.5 md:gap-4 mt-6 md:mt-10">
          {teamMembers?.map((item, idx) => (
            <div className="rounded-lg text-center" key={idx}>
              <Image src={item?.image} alt={item?.name} height={300} width={315} />
          <div className="bg-white border-2 border-[#65C8D0] border-t-0 py-5 rounded-b-lg">
          <h1 className=" md:text-2xl font-semibold ">{item?.name}</h1>
          <p className="text-[10px] md:text-base text-[#14A5FF] w-max py-0.5 md:py-1 px-4 md:px-10 bg-[#E8F6FF] mt-1 rounded-md mx-auto">{item?.position}</p>
          </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

const teamMembers = [
  {
    name: "Arif Rahman",
    position: "Chairman",
    image: "/arif.png",
  },
  {
    name: "Nusrat Jahan",
    position: "Chairman",
    image: "/nusrat.png",
  },
  {
    name: "Tanvir Ahmed",
    position: "Chairman",
    image: "/tanvir.png",
  },
  {
    name: "Shirin Akter",
    position: "Chairman",
    image: "/shirin.png",
  },
  {
    name: "Mahmudul Hasan",
    position: "Chairman",
    image: "/mahmudul.png",
  },
  {
    name: "Imran Hossain",
    position: "Chairman",
    image: "/imran.png",
  },
  {
    name: "Farhana Islam",
    position: "Chairman",
    image: "/farhana.png",
  },
  {
    name: "Shakib Al Hasan",
    position: "Chairman",
    image: "/shakib.png",
  },
];
