import Image from "next/image";
import Link from "next/link";

const packagesData = [
  {
    id: 1,
    image: "https://i.postimg.cc/9QrMV7fq/Frame-76394.png",
    title: "Orthopedic Surgery",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 2,
    image: "https://i.postimg.cc/KcfvMNkM/Frame-76394-1.png",
    title: "Cardiac Surgery",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 3,
    image: "https://i.postimg.cc/j5KtWwRc/Frame-76394-2.png",
    title: "Neurosurgery",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 4,
    image: "/path-to-image-4.jpg",
    title: "Plastic Surgery",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 5,
    image: "/path-to-image-5.jpg",
    title: "General Surgery",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

const PackageSection = () => {
  return (
    <div>
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto">
          {/* Centered Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center max-w-3xl mx-auto">
            We try to Provide Affordable Package. <br />
            Explore our Package!
          </h2>

          {/* Package Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4">
            {packagesData.slice(0, 3).map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-lg  overflow-hidden"
              >
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  width={400}
                  height={200}
                  className="w-[423px] h-[245px] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {pkg.title}
                  </h3>
                  <p className="text-gray-600 text-xs mt-2">
                    {pkg.description}
                  </p>
                  <Link
                    href="#"
                    className="flex justify-center items-center text-sm text-black font-medium mt-4"
                  >
                    Package Details
                    <span className="ml-2">&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* See All Button */}
          <Link  href="#">        
            <div className="mt-8 flex justify-center items-center">
              <button className="bg-[#65ced0] hover:bg-[#275750] text-white text-sm font-medium py-2 px-6 rounded-md">
                See all package
              </button>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PackageSection;
