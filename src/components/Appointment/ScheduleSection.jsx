"use client";

import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css";

const ScheduleSection = () => {
  const [value, onChange] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedWay, setSelectedWay] = useState(null);

  useEffect(() => {
    onChange(new Date());
  }, []);

  return (
    <div className="section-padding-y bg-[#ffffff] bg-opacity-60 section-padding-x">
      <h1 className="text-2xl md:text-5xl font-semibold text-center  ">
        Make Appointment
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10 md:mt-16">
        {/* Date Section */}
        <div className="bg-white shadow-lg rounded-md p-6">
          {" "}
          <h1 className="text-sm md:text-xl font-semibold mb-4 pl-2">
            Select your flexible date
          </h1>
         {value && <Calendar
            calendarType={"gregory"}
            minDate={new Date()}
            onChange={onChange}
            value={value}
          />}
        </div>

        {/* Time Slot Section */}
        <div className="bg-white p-6 shadow-lg rounded-sm">
          <h1 className="text-sm md:text-xl font-semibold mb-6 pl-2">
            Select your flexible Time
          </h1>
          <div className="flex flex-wrap gap-x-3 lg:gap-x-5  gap-y-3 ">
            {timeSlots?.map((item, idx) => (
              <button
                onClick={() => setSelectedSlot(item?.time)}
                disabled={!item?.isAvailable}
                className={`py-2  lg:py-[9px] px-3 lg:px-4 text-sm lg:text-base rounded-sm border lg:border-2   ${
                  item?.isAvailable
                    ? "border-az-primary text-az-primary"
                    : "bg-[#EBF4F8] text-[#C4C4C4]"
                }
              ${selectedSlot === item?.time && "bg-az-primary text-white"}`}
                key={idx}
              >
                {item?.time}
              </button>
            ))}
          </div>
        </div>

        {/* Others */}
        <div className=" flex flex-col justify-between">
          <div className="bg-white p-6 shadow-lg rounded-sm">
            <h1 className="text-sm md:text-xl font-semibold mb-6 pl-2">
              Select your flexible Way
            </h1>
            <div className="flex gap-6">
              <button
                onClick={() => setSelectedWay("offline")}
                className={`py-2.5 px-10 text-sm lg:text-base rounded-sm border-2 border-az-primary
              ${selectedWay === "offline" && "bg-az-primary text-white"}`}
              >
                Offline
              </button>
              <button
                onClick={() => setSelectedWay("online")}
                className={`py-2.5  px-10 text-sm lg:text-base rounded-sm border-2 border-az-primary
              ${selectedWay === "online" && "bg-az-primary text-white"}`}
              >
                Online
              </button>
            </div>
          </div>

          <div className="bg-white p-6 shadow-lg rounded-sm">
            <h1 className="text-sm md:text-xl font-semibold mb-6 pl-2">
              Write your problem shortly
            </h1>
            <div className="flex gap-6">
              <textarea
                rows={5}
                name=""
                placeholder="write your problem here"
                className="focus:outline-none border-2 w-full p-2 rounded-lg"
                id=""
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleSection;

const timeSlots = [
  { time: "08:30 AM", isAvailable: true },
  { time: "09:00 AM", isAvailable: false },
  { time: "09:30 AM", isAvailable: true },
  { time: "10:00 AM", isAvailable: false },
  { time: "10:30 AM", isAvailable: true },
  { time: "11:00 AM", isAvailable: true },
  { time: "11:30 AM", isAvailable: false },
  { time: "12:00 PM", isAvailable: true },
  { time: "12:30 PM", isAvailable: false },
  { time: "13:00 PM", isAvailable: true },
  { time: "13:30 PM", isAvailable: false },
  { time: "14:00 PM", isAvailable: true },
  { time: "14:30 PM", isAvailable: false },
  { time: "15:00 PM", isAvailable: true },
  { time: "15:30 PM", isAvailable: true },
  { time: "16:00 PM", isAvailable: false },
  { time: "16:30 PM", isAvailable: true },
  { time: "17:00 PM", isAvailable: false },
];
