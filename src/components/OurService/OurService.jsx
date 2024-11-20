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
      <div className="bg-gradient-to-br from-white to-blue-50 p-8 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side: Services */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

          <div>
            <div className=" my-16  px-6 lg:px-8">
              <div className="max-w-7xl mx-auto text-left">
                <h2 className="text-3xl font-bold  text-gray-900 sm:text-4xl">
                  Our Services Made Us Confident.
                </h2>
                <p className="my-4 text-sm text-gray-600">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>

              <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                <div className="bg-white shadow-md rounded-lg ">
                  <Image
                    src="https://i.postimg.cc/5N6DYK1y/Rectangle-2.png"
                    alt="Service 1"
                    className="w-full h-auto object-cover"
                    height={400}
                    width={300}
                  />
                </div>
                <div className="bg-white shadow-md rounded-lg ">
                  <Image
                    src="https://i.postimg.cc/5N6DYK1y/Rectangle-2.png"
                    alt="Service 2"
                    className="w-full h-auto object-cover"
                    height={400}
                    width={300}
                  />
                </div>
                <div className="bg-white shadow-md rounded-lg ">
                  <Image
                    src="https://i.postimg.cc/5N6DYK1y/Rectangle-2.png"
                    alt="Service 2"
                    className="w-full h-auto object-cover"
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
