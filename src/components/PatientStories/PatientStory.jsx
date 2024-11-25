import Image from "next/image";
import Link from "next/link";

const PatientStory = () => {
  const storyData = [
    {
      title: "Dr. M. Ali successfully conducted a knee surgery",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: "https://i.postimg.cc/0Q5vGgRg/Frame-76831.png",
    },
    {
      title: "Dr. A. Smith performs groundbreaking heart surgery",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image: "https://i.postimg.cc/SsZhDZkn/Frame-76832.png",
    },
    {
      title: "Dr. A. Smith performs groundbreaking heart surgery",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image: "https://i.postimg.cc/0NrtmxcK/Frame-76669.png",
    },
    {
      title: "Dr. A. Smith performs groundbreaking heart surgery",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image: "https://i.postimg.cc/wxDwDwc2/Frame-76833.png",
    },
    {
      title: "Dr. A. Smith performs groundbreaking heart surgery",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image: "https://i.postimg.cc/Zq9cnH5r/Frame-76834.png",
    },
    {
      title: "Dr. A. Smith performs groundbreaking heart surgery",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image: "https://i.postimg.cc/2yxdMX0f/Frame-76835.png",
    },
    
  ];

  return (
    <div className="bg-[#f1f4fb] py-10 section-padding-x">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center">
          <h1 className="lg:text-5xl text-xl font-bold py-14 max-w-xl text-center">
            Patient Stories
          </h1>
        </div>

        {/* main part */}
        <div>
          <div className="py-4">
            <h1 className="lg:text-2xl text-lg font-bold mb-5">
              We proudly share our Patient Stories
            </h1>
            <p className="lg:text-base text-sm mb-8 lg:text-start text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
          </div>

          <div className="lg:grid lg:grid-cols-12 gap-6">
            {/* left part  */}
            <div className="lg:col-span-8 ">
              <div className="space-y-7">
                {storyData.slice(0, 2).map((item, index) => (
                  <div
                    key={index}
                    className="bg-white  rounded-lg overflow-hidden flex flex-col lg:flex-row p-2"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={300}
                      className=" lg:w-[380px] lg:h-[246px] w-full object-cover  rounded-lg"
                    />
                    <div className="p-6">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                        {item.description}
                      </p>
                      <Link
                        href="#"
                        className="text-blue-500 font-medium mt-4 inline-flex items-center"
                      >
                        Read more <span className="ml-2">&rarr;</span>
                      </Link>
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

export default PatientStory;
