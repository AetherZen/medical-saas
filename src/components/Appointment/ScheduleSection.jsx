"use client";

import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { GoDownload } from "react-icons/go";
import "./calendar.css";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const ScheduleSection = () => {
  const [date, setDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedWay, setSelectedWay] = useState(null);
  const [description, setDescription] = useState("");

  useEffect(() => {
    setDate(
      new Date().toLocaleString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    );
    console.log(date);
  }, []);

  return (
    <div className="section-padding-y bg-[#ffffff] bg-opacity-60 section-padding-x">
      <h1 className="text-2xl md:text-5xl font-semibold text-center  ">
        Book An Appointment
      </h1>

      {/* for small devices */}
      <div className="flex flex-col gap-y-4 mt-10 md:hidden">
        {" "}
        <div className="p-[18px] rounded-lg bg-white shadow-xl shadow-[#65C8D033]">
          <h1 className="font-semibold">Select your flexible Date</h1>
          <input
            onChange={(e) => setDate(e.target.value)}
            className="focus:outline-none border-[1.4px] mt-4 py-2 px-5 w-full rounded-sm border-[#ABABAB]"
            type="date"
          />
        </div>
        <div className="p-[18px] rounded-lg bg-white shadow-xl shadow-[#65C8D033]">
          <h1 className="font-semibold">Select your flexible time</h1>
          <select
            onChange={(e) => setSelectedSlot(e.target.value)}
            className="focus:outline-none border-[1.4px] mt-4 py-2 px-5 w-full rounded-sm border-[#ABABAB]"
          >
            {timeSlots?.map((slot, idx) => (
              <option
                className={`${!slot?.isAvailable && "text-gray-300"}`}
                key={idx}
                value={slot?.time}
              >
                {slot?.time.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
        <div className="p-[18px] rounded-lg bg-white shadow-xl shadow-[#65C8D033]">
          <h1 className="font-semibold">Select your flexible Way</h1>
          <select
            className="focus:outline-none border-[1.4px] mt-4 py-2 px-5 w-full rounded-sm border-[#ABABAB]"
            onChange={(e) => setSelectedWay(e.target.value)}
          >
            <option value="offline">Offline</option>
            <option value="online">Online</option>
          </select>
        </div>
        <div className="p-[18px] rounded-lg bg-white shadow-xl shadow-[#65C8D033]">
          <h1 className="font-semibold">Select your flexible Date</h1>
          <textarea
          rows={3}
          placeholder="write your problem shortly"
            onChange={(e) => setDescription(e.target.value)}
            className="focus:outline-none text-sm border-[1.4px] mt-4 py-2 px-5 w-full rounded-sm border-[#ABABAB]"
            type="date"
          />
        </div>
      </div>

      {/* For Medium To Large Devices */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10 md:mt-16">
        {/* Date Section */}
        <div className="bg-white shadow-lg rounded-md p-6">
          {" "}
          <h1 className="text-sm md:text-xl font-semibold mb-4 pl-2">
            Select your flexible date
          </h1>
          {date && (
            <Calendar
              minDate={new Date()}
              onChange={(date) =>
                setDate(
                  date.toLocaleString("en-GB", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })
                )
              }
              value={date}
            />
          )}
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
        <div className=" flex xl:flex-col justify-between md:col-span-2 xl:col-span-1 gap-6">
          <div className="bg-white p-6 shadow-lg rounded-sm flex-1">
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

          <div className="bg-white p-6 shadow-lg rounded-sm flex-1 ">
            <h1 className="text-sm md:text-xl font-semibold mb-6 pl-2">
              Write your problem shortly
            </h1>
            <div className="flex gap-6">
              <textarea
                rows={5}
                onChange={(e) => setDescription(e.target.value)}
                name=""
                placeholder="write your problem here"
                className="focus:outline-none border-2 w-full p-2 rounded-lg"
                id=""
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      {/* Appointment Details */}
      <div className="mt-6 md:mt-10">
        <h1 className="md:text-[32px] font-semibold">
          Your Appointment Details
        </h1>
        <div className="mt-4 md:mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5">
          {/* date */}
          {date && (
            <div>
              <h1 className="text-[#121212] text-sm font-medium md:font-normal md:text-2xl">
                Appointment Date
              </h1>
              <p className="mt-1 md:mt-3 text-[12px] md:text-base text-[#434343]">
                {date}
              </p>
            </div>
          )}
          {/* time */}
          {selectedSlot && (
            <div>
              <h1 className="text-[#121212] text-sm md:text-2xl">
                Appointment Time
              </h1>
              <p className="mt-1 md:mt-3 text-[12px] md:text-base text-[#434343]">
                {selectedSlot}
              </p>
            </div>
          )}
          {/* way */}
          {selectedWay && (
            <div>
              <h1 className="text-[#121212] text-sm md:text-2xl">
                Appointment Way
              </h1>
              <p className="mt-1 md:mt-3 text-[12px] md:text-base text-[#434343]">
                {selectedWay}
              </p>
            </div>
          )}

          {/* Department */}
          <div>
            <h1 className="text-[#121212] text-sm md:text-2xl">
              Department Name
            </h1>
            <p className="mt-1 md:mt-3 text-[12px] md:text-base text-[#434343]">
              Anesthesiology specialties
            </p>
          </div>
        </div>
      </div>

      {/* Submission  */}
      <div className="flex justify-center">
        {" "}
        <AlertDialog className="border mx-auto">
          <AlertDialogTrigger className="border" asChild>
            <button className="bg-az-primary text-white max-auto text-[12px] md:text-sm lg:text-base py-2 px-6 lg:px-10 rounded-sm mt-12 lg:mt-16">
              Submit Your Appointment
            </button>
          </AlertDialogTrigger>
          <AlertDialogContent className="max-w-5xl">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-center mb-3 md:mb-6 xl:mb-12">
                {" "}
                <span className="text-2xl md:text-4xl xl:text-5xl font-semibold text-center  ">
                  Make Confirmed
                </span>
              </AlertDialogTitle>
              <AlertDialogDescription></AlertDialogDescription>
              <div className="mt-6 xl:mt-10">
                <h1 className="md:text-xl lg:text-2xl font-medium">
                  Your Appointment Has Been Confirmed!
                </h1>
                <div className="mt-4 lg:mt-6 gap-4 xl:gap-y-10 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4">
                  {/* date */}
                  {date && (
                    <div>
                      <h1 className="text-[#121212] text-sm lg:text-base font-medium">
                        Appointment Date
                      </h1>
                      <p className="mt-1 xl:mt-3 text-[12px] lg:text-sm text-[#434343]">
                        {date}
                      </p>
                    </div>
                  )}
                  {/* time */}
                  {selectedSlot && (
                    <div>
                      <h1 className="text-[#121212] text-sm lg:text-base font-medium">
                        Appointment Time
                      </h1>
                      <p className="mt-1 xl:mt-3 text-[12px] lg:text-sm text-[#434343]">
                        {selectedSlot}
                      </p>
                    </div>
                  )}
                  {/* way */}
                  {selectedWay && (
                    <div>
                      <h1 className="text-[#121212] text-sm lg:text-base font-medium">
                        Appointment Way
                      </h1>
                      <p className="mt-1 xl:mt-3 text-[12px] lg:text-sm text-[#434343]">
                        {selectedWay}
                      </p>
                    </div>
                  )}

                  {/* Department */}
                  <div>
                    <h1 className="text-[#121212] text-sm lg:text-base font-medium">
                      Department Name
                    </h1>
                    <p className="mt-1 xl:mt-3 text-[12px] lg:text-sm text-[#434343]">
                      Anesthesiology specialties
                    </p>
                  </div>
                </div>

                <p className="mt-8 xl:mt-11 hidden md:block text-sm xl:text-base">
                  {description}
                </p>
              </div>
            </AlertDialogHeader>
            <AlertDialogFooter className="mt-6 md:mt-10 xl:mt-16">
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction className="bg-az-primary hover:bg-az-primary flex items-center">
                Download Document <GoDownload />
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
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
