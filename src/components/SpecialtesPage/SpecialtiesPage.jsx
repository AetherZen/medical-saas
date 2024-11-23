"use client";

import Image from "next/image";

const SpecialtiesPage = () => {
  const specialties = [
    { name: "Cardiology", image: "https://i.postimg.cc/0yRPb9DV/Frame-76825-1.png" },
    { name: "Neurology", image: "https://i.postimg.cc/XJJ0Tq6Y/Frame-76826.png" },
    { name: "Orthopedics", image: "https://i.postimg.cc/14xhnKn8/Frame-76827.png" },
    { name: "Hematology", image: "https://i.postimg.cc/wxn7Q8Dm/Frame-76828.png" },
    { name: "Dermatology", image: "https://i.postimg.cc/Cxg59GPM/Frame-76829.png" },
    { name: "Oncology", image: "https://i.postimg.cc/mrZDgbW0/Frame-76830.png" },
    { name: "Pediatrics", image: "https://i.postimg.cc/qRzv2jRw/Frame-76713.png" },
    { name: "Infectious Disease", image: "https://i.postimg.cc/hj6PsTQB/Frame-76714.png" },
    { name: "Endocrinology", image: "https://i.postimg.cc/J7Hhn6S4/Frame-76715.png" },
  ];

  return (
    <div>
      <div className="py-10 bg-gradient-to-l from-pink-100 via-blue-100 to-pink-100">
        <h2 className="lg:text-5xl text-2xl font-semibold text-center my-16">Specialties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto px-4">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            >
              {/* Image with overlay */}
              <Image
                src={specialty.image}
                alt={specialty.name}
                width={400}
                height={300}
                className="w-[427px] h-[106px] object-cover"
              />
              {/* Overlay and Text */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl lg:text-3xl font-medium">
                {specialty.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialtiesPage;
