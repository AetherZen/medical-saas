import Image from "next/image";

const OurService = () => {
  const serviceData = [
    {
      image: "https://i.postimg.cc/9QjfM22c/Group-5.png",
      title: "Quick Treatment",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      image: "https://i.postimg.cc/QMGYw6c4/Frame-4.png",
      title: "Quick Treatment",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      image: "https://i.postimg.cc/YCgb61T1/Frame-5.png",
      title: "Quick Treatment",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      image: "https://i.postimg.cc/9Q3BQDzz/Frame-6.png",
      title: "Quick Treatment",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
  ];

  return (
    <div>
      <div className="bg-[#EAF2F8] p-8 md:p-16">
        <div className="max-w-7xl mx-auto text-left lg:hidden block">
          <h2 className="text-xl font-bold  text-gray-900 lg:text-5xl !leading-[28px]">
            Our Services Made Us Confident.
          </h2>
          <p className="mb-4 mt-4 text-sm lg:text-base text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side: Services */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Service Cards */}
              {serviceData?.map((service, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-md p-6 text-center hover:shadow-xl hover:shadow-[#E3eff6] transition-shadow"
                >
                  <div className="flex justify-center items-center mb-4">
                    <Image
                      src={service.image}
                      alt="service"
                      height={90} // Increased size
                      width={90}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Images */}

          <div className="lg:block hidden">
            <div className=" px-6 lg:px-8">
              <div className="max-w-7xl mx-auto text-left">
                <h2 className="text-xl font-bold  text-gray-900 lg:text-5xl !leading-[65px]">
                  Our Services Made Us Confident.
                </h2>
                <p className="mb-4 mt-8 text-sm lg:text-base text-gray-600">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>

              <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                <div className="">
                  <Image
                    src="https://i.postimg.cc/yNxJKM21/Rectangle-2.png"
                    alt="Service 1"
                    className="w-full h-auto object-cover rounded-lg"
                    height={400}
                    width={300}
                  />
                </div>
                <div className="">
                  <Image
                    src="https://i.postimg.cc/1XQ5827N/Rectangle-3.png"
                    alt="Service 2"
                    className="w-full h-auto object-cover rounded-lg"
                    height={400}
                    width={300}
                  />
                </div>
                <div className="">
                  <Image
                    src="https://i.postimg.cc/5NPbJXJz/Rectangle-4.png"
                    alt="Service 2"
                    className="w-full h-auto object-cover rounded-lg"
                    height={400}
                    width={300}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
