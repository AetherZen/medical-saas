"use client";

import { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";

const DoctorsSuggestion = () => {
  const suggestionData = [
    {
      patientName: "Nafiul Islam",
      patientAge: "20 Years",
      date: "10-11-2024",
      medicines: [
        {
          name: "Napa",
          timePeriod: "Morning + Noon + Night",
          consumptionTime: "3 Month",
        },
        {
          name: "Napa",
          timePeriod: "Morning + Noon + Night",
          consumptionTime: "3 Month",
        },
        {
          name: "Napa",
          timePeriod: "Morning + Noon + Night",
          consumptionTime: "3 Month",
        },
      ],
      tests: [
        "Liver Function Test (LFT)",
        "Complete Blood Count",
        "Kidney Function Test (KFT)",
      ],
      problems: [
        "Health Issues",
        "Economic Challenges",
        "Environmental Concerns",
      ],
    },
    {
      patientName: "Halima Tus Sadia",
      patientAge: "23 Years",
      date: "10-11-2024",
      medicines: [
        {
          name: "Napa",
          timePeriod: "Morning + Noon + Night",
          consumptionTime: "3 Month",
        },
        {
          name: "Napa",
          timePeriod: "Morning + Noon + Night",
          consumptionTime: "3 Month",
        },
        {
          name: "Napa",
          timePeriod: "Morning + Noon + Night",
          consumptionTime: "3 Month",
        },
      ],
      tests: [
        "Liver Function Test (LFT)",
        "Complete Blood Count",
        "Kidney Function Test (KFT)",
      ],
      problems: [
        "Health Issues",
        "Economic Challenges",
        "Environmental Concerns",
      ],
    },
  ];

  const [data, setData] = useState(suggestionData[0]);

  const handleEdit = (type, index) => {
    console.log(`Edit ${type} at index ${index}`);
  };

  const handleDelete = (type, index) => {
    setData((prev) => ({
      ...prev,
      [type]: prev[type].filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-white to-purple-200 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-semibold text-center my-10">
          Your Suggestion
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className=" p-2 text-left">Patient Name</th>
                <th className=" p-2  text-left">Patient Age</th>
                <th className=" p-2  text-left">Date</th>
                {/* <th className=" p-2 text-center">
                    Actions
                  </th> */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className=" p-2 text-sm">{data.patientName}</td>
                <td className=" p-2 text-sm">{data.patientAge}</td>
                <td className=" p-2 text-sm">{data.date}</td>
                <td className="  text-center">
                  <button
                    onClick={() => handleEdit("medicines", index)}
                    className="text-gray-800 hover:underline mr-2"
                  >
                    <BiEdit className="inline-block" />
                  </button>
                  <button
                    onClick={() => handleDelete("medicines", index)}
                    className="text-red-500 hover:underline"
                  >
                    <RiDeleteBinLine className="inline-block" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="my-10">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className=" p-2 text-left">Medicine Name</th>
                  <th className=" p-2 text-left">Time Period</th>
                  <th className=" p-2 text-left">Consumption Time</th>
                </tr>
              </thead>
              <tbody>
                {data.medicines.map((medicine, index) => (
                  <tr key={index}>
                    <td className=" p-2 text-sm">{medicine.name}</td>
                    <td className=" p-2 text-sm">{medicine.timePeriod}</td>
                    <td className=" p-2 text-sm">{medicine.consumptionTime}</td>
                    <td className=" p-2 text-center">
                      <button
                        onClick={() => handleEdit("medicines", index)}
                        className="text-gray-800 hover:underline mr-2"
                      >
                        <BiEdit className="inline-block" />
                      </button>
                      <button
                        onClick={() => handleDelete("medicines", index)}
                        className="text-red-500 hover:underline"
                      >
                        <RiDeleteBinLine className="inline-block" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-10 px-2">
          <h2 className="text-xl font-semibold mb-4">Some Test</h2>
          <ul className="space-y-2">
            {data.tests.map((test, index) => (
              <li
                key={index}
                className="flex justify-between items-center text-sm"
              >
                <span>{test}</span>
                <div className="pr-4">
                  <button
                    onClick={() => handleEdit("tests", index)}
                    className="text-gray-800 hover:underline mr-2"
                  >
                    <BiEdit className="inline-block" />
                  </button>
                  <button
                    onClick={() => handleDelete("tests", index)}
                    className="text-red-500 hover:underline"
                  >
                    <RiDeleteBinLine className="inline-block" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="px-2">
          <h2 className="text-xl font-semibold mb-4">Your Problem</h2>
          <ul className="space-y-2">
            {data.problems.map((problem, index) => (
              <li
                key={index}
                className="flex justify-between items-center text-sm"
              >
                <span>{problem}</span>
                <div className="pr-4">
                  <button
                    onClick={() => handleEdit("problems", index)}
                    className="text-gray-800 hover:underline mr-2"
                  >
                    <BiEdit className="inline-block" />
                  </button>
                  <button
                    onClick={() => handleDelete("problems", index)}
                    className="text-red-500 hover:underline"
                  >
                    <RiDeleteBinLine className="inline-block" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-sm text-gray-900 mt-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
    </div>
  );
};

export default DoctorsSuggestion;
