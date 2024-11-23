import Image from "next/image";

const DoctorSection = () => {
  return (
    <div className="section-padding-y">
      {/* heading section */}
      <div>
        <h1 className="text-2xl md:text-5xl font-semibold text-center  ">
          Make Appointment
        </h1>
        <p className="text-[12px] md:text-base block mt-6 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>

      {/* About Specialist Section */}
      <div className="grid grid-cols-12 items-center lg:gap-14 mt-10 md:mt-28">
        <div className="col-span-12 lg:col-span-5 ">
          <Image className="lg:h-[514px] lg:w-[493px] mx-auto xl:py-4" alt="Specialist" src="/doctor.png" height={514} width={493} />
        </div>
        <div className="col-span-12 lg:col-span-7">
          <div className="text-center lg:text-start mt-6 md:mt-8 lg:mt-0 ">
            <h1 className="font-semibold text-[26px] md:text-[40px]">
              Dr. Arif Rahman
            </h1>
            <p className="text-sm md:text-[20px] font-semibold mt-1.5">
              Anesthesiology Specialties.
            </p>
            <p className="text-sm md:text-xl font-semibold mt-1">
              Dhaka Medical Collage & Hospital
            </p>
          </div>

          <div className="mt-10 mb-4 lg:my-5">
            <p className="md:text-xl font-semibold">About</p>
            <p className=" text-[12px] md:text-sm text-[#121212]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="">
            <p className="md:text-xl font-semibold">Working Hours</p>
            <p className=" text-[12px] md:text-sm text-[#121212]">
              Monday-Friday, 08.00 AM- 11.00 AM
            </p>
          </div>

          <div className="flex flex-wrap justify-around gap-3 md:gap-10 mt-4 md:mt-16">
            <div className="text-[#121212] bg-[#F0FAFA] p-3 md:p-4  text-center rounded-lg shadow-md flex flex-col justify-center items-center">
              <h1 className="font-semibold text-sm md:text-[32px]">2000+</h1>
              <p className="text-[12px] md:text-base md:mt-3">Patients</p>
            </div>

            <div className="text-[#121212] bg-[#F0FAFA] p-3 md:p-4  text-center rounded-lg shadow-md flex flex-col justify-center items-center">
              <h1 className="font-semibold text-sm md:text-[32px]">11+</h1>
              <p className="text-[12px] md:text-base md:mt-3">Experience</p>
            </div>

            <div className="text-[#121212] bg-[#F0FAFA] p-3 md:p-4  text-center rounded-lg shadow-md flex flex-col justify-center items-center">
              <h1 className="font-semibold text-sm md:text-[32px]">3000+</h1>
              <p className="text-[12px] md:text-base md:mt-3">Reviews</p>
            </div>

            <div className="text-[#121212] bg-[#F0FAFA] py-3 md:py-4 px-4 md:px-8 text-center rounded-lg shadow-md flex flex-col justify-center items-center">
              <h1 className="font-semibold text-sm md:text-[32px]">5.0</h1>
              <p className="text-[12px] md:text-base mt-3">Ratings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorSection;
