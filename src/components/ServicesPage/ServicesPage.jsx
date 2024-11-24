import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const ServicesPage = () => {
  const services = [
    {
      title: "Health Checkup Center",
      image: "https://i.postimg.cc/L4f6r97H/Frame-29-1.png",
    },
    {
      title: "Dialysis Center",
      image: "https://i.postimg.cc/rp0Lxg28/Frame-76414.png",
    },
    {
      title: "Health Checkup Center",
      image: "https://i.postimg.cc/zfsYjWqT/Frame-76415.png",
    },
    {
      title: "Aortic Center",
      image: "https://i.postimg.cc/HnHDGgcx/Frame-76416.png",
    },
    {
      title: "Maternity Care Center",
      image: "https://i.postimg.cc/2jFNQVMB/Frame-76417.png",
    },
    {
      title: "Radiology Center",
      image: "https://i.postimg.cc/15vxdb9m/Frame-76418.png",
    },
    {
      title: "Surgical Center",
      image: "https://i.postimg.cc/Z50kzjRr/Frame-76419.png",
    },
    {
      title: "Intensive Care Unit",
      image: "https://i.postimg.cc/XJStFbg8/Frame-76420.png",
    },
  ];

  return (
    <div>
      <div className="py-10 bg-gradient-to-l from-pink-100 via-blue-100 to-pink-100">
        <div className="max-w-7xl mx-auto ">
          <div className="flex justify-center">
            <h1 className="lg:text-5xl text-2xl font-bold py-14 max-w-xl text-center">
              We Provide Multiple Services Centers to You
            </h1>
          </div>

          {/* card  */}
          <div className=" py-10">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="relative group rounded-lg overflow-hidden shadow-md"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      width={400}
                      height={300}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-50 transition-all duration-300 flex items-end p-4">
                      <h3 className="text-white font-medium text-lg">
                        {service.title}
                      </h3>
                      <span className="ml-auto text-white text-xl group-hover:translate-x-1 transition-transform duration-300">
                        <BsArrowRight />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
