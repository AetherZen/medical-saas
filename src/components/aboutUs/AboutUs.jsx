import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="section-padding-x bg-[#F1F4FB]">
      {/* about us section */}

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
    </div>
  );
};

export default AboutUs;
