"use client";

import Image from "next/image";
import { useState } from "react";

const Appointment = () => {
  const [department, setDepartment] = useState("All Departments");

  const doctors = [
    {
      name: "Dr. Sohan Islam",
      department: "Neurology",
      patients: "2000+ Patients",
      rating: "5.0",
      reviews: "(350)",
      address: "Dhanmondi 32, w-17/A, Dhaka, Bangladesh.",
      image: "https://i.postimg.cc/4x747H9k/Frame-76821-1.png",
    },
    {
      name: "Dr. Hosneara Pervin",
      department: "Neurology",
      patients: "2000+ Patients",
      rating: "5.0",
      reviews: "(350)",
      address: "Dhanmondi 32, w-17/A, Dhaka, Bangladesh.",
      image: "https://i.postimg.cc/KjpF4mc8/Frame-76822-1.png",
    },
    {
      name: "Dr. Halima Sadiya",
      department: "Neurology",
      patients: "2000+ Patients",
      rating: "5.0",
      reviews: "(350)",
      address: "Dhanmondi 32, w-17/A, Dhaka, Bangladesh.",
      image: "https://i.postimg.cc/7YbwdJXG/Frame-76823.png",
    },
    {
      name: "Dr. Nafiul Islam Jim",
      department: "Neurology",
      patients: "2000+ Patients",
      rating: "5.0",
      reviews: "(350)",
      address: "Dhanmondi 32, w-17/A, Dhaka, Bangladesh.",
      image: "https://i.postimg.cc/3wjTmXr6/Frame-76381.png",
    },
  ];

  return (
    <section className="py-12 bg-[#EAF2F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl lg:mb-20 mb-5 lg:text-5xl font-bold text-gray-900 text-center max-w-3xl mx-auto lg:!leading-[70px]">
          Your Problem Our Commitment! Meet Our Experience Doctors.
        </h1>
        <div className="flex md:justify-center items-center  lg:justify-between mb-4  md:gap-6">
          <p className="text-center text-gray-600 lg:mb-4 ">
            Short your specific Department save your time and afford.
          </p>
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="border border-gray-300 outline-none rounded-md px-4 py-2 text-xs lg:sm text-gray-600 bg-[#EAF2F8] md:ml-0 ml-16"
          >
            <option value="All Departments">All Departments</option>
            <option value="Neurology">Neurology</option>
            <option value="Cardiology">Cardiology</option>
          </select>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 shadow-sm  rounded-lg"
            >
              <Image
                src={doctor.image}
                alt={doctor.name}
                width={400}
                height={400}
                className=" w-full h-auto object-cover  rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="lg:text-xl text-md font-semibold">{doctor.name}</h3>
                <div className="flex justify-between">
                  <span className="inline-block bg-[#e8f6ff] text-[#2eafff] text-sm font-medium px-3 py-1 rounded-lg mt-2">
                    {doctor.department}
                  </span>
                  <div className="flex items-center mt-2">
                    <span className="text-sm font-semibold">⭐ {doctor.rating}</span>
                    <span className="text-sm font-semibold">
                      {doctor.reviews}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-2">{doctor.patients}</p>

                <p className="text-xs text-gray-500 mt-2">{doctor.address}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-md font-medium">
            See all doctor
          </button>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
