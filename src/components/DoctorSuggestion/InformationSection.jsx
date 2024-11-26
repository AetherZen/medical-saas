"use client";
import { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
const InformationSection = () => {
  const [selected, setSelected] = useState(null);
  const [patientInfo, setPatientInfo] = useState({
    p_name: "",
    p_age: "",
    p_date: "",
  });

  const [medicineInfo, setMedicineInfo] = useState({
    m_name: "",
    m_time_period: "",
    m_consumption_time: "",
  });

  //  ONCHANGE HANDLER
  const handleMedicineInfo = (e) => {
    const { name, value } = e.target;
    setMedicineInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handlePatientInfo = (e) => {
    const { name, value } = e.target;
    setPatientInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  //   SUBMIT HANDLER
  const handlePatientInfoSubmit = (e) => {
    e.preventDefault();
    console.log(patientInfo);
    e.target.reset();
  };

  const handleMedicineInfoSubmit = (e) => {
    e.preventDefault();
    console.log(medicineInfo);
    e.target.reset();
  };
  const handleTestInfoSubmit = (e) => {
    const testName = e.target.testName.value;
    e.preventDefault();
    console.log(testName);
    e.target.reset();
  };

  return (
    <div className="section-padding-y">
      <div>
        <h1 className="text-xl md:text-[32px] font-semibold text-center">
          Add suggestion for your patient
        </h1>
        <p className="max-w-3xl text-[12px] md:text-sm mx-auto mt-4 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since.
        </p>
      </div>

      <div className="flex gap-2 mt-8 md:mt-16 flex-wrap justify-center ">
        {/* Patient */}
        <Dialog>
          <DialogTrigger asChild>
            <button
              onClick={() => setSelected(0)}
              className={`${
                selected == 0
                  ? "bg-white text-black border border-az-primary"
                  : "bg-az-primary text-white"
              }  text-[12px] md:text-base  flex gap-1 md:gap-2.5 items-center rounded py-2 md:py-2.5 px-3  w-[164px] md:w-[196px]`}
            >
              <IoMdAddCircleOutline className="text-xl" /> Add Patient Info
            </button>
          </DialogTrigger>
          <DialogContent className="md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
            <DialogClose
              onClick={() => {
                setSelected(null);
                console.log("closed");
                console.log(selected);
              }}
              className="absolute right-4 top-1"
              asChild
            >
              <p className="z-50 cursor-pointer text-4xl text-[#ffffff00]">x</p>
            </DialogClose>
            <DialogHeader>
              <DialogTitle className="text-center md:text-2xl">
                Add Patient Information{" "}
              </DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <form onSubmit={handlePatientInfoSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 lg:mt-20">
                <div>
                  <label className="font-semibold text-sm md:text-base">
                    Patient Name
                  </label>
                  <br />
                  <input
                    className="focus:outline-none border-b mt-2 text-[12px] md:text-sm w-full py-1"
                    placeholder="Enter Patient Name"
                    name="p_name"
                    type="text"
                    onChange={handlePatientInfo}
                  />
                </div>
                <div>
                  <label className="font-semibold text-sm md:text-base">
                    Patient Age
                  </label>
                  <br />
                  <input
                    className="focus:outline-none border-b mt-2 text-sm w-full py-1"
                    placeholder="Enter Patient Name"
                    name="p_age"
                    type="text"
                    onChange={handlePatientInfo}
                  />
                </div>
                <div>
                  <label className="font-semibold text-sm md:text-base">
                    Date
                  </label>
                  <br />
                  <input
                    className="focus:outline-none border-b mt-2 text-sm w-full py-1"
                    placeholder="Enter Patient Name"
                    name="p_date"
                    type="text"
                    onChange={handlePatientInfo}
                  />
                </div>
              </div>
              <div className="flex justify-end mt-10 md:mt-14">
                <button
                  type="submit"
                  className={`  bg-az-primary text-white text-[12px] md:text-base  flex gap-1 md:gap-2.5 items-center rounded py-2 md:py-2.5 px-6 w-max  md:px-8`}
                >
                  Save
                </button>
              </div>
            </form>
            <DialogFooter></DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Medicine */}
        <Dialog>
          <DialogTrigger asChild>
            <button
              onClick={() => setSelected(1)}
              className={`${
                selected == 1
                  ? "bg-white text-black border border-az-primary"
                  : "bg-az-primary text-white"
              } text-[12px] md:text-base  flex gap-1  md:gap-2.5 items-center rounded py-2 md:py-2.5 px-3  w-[164px] md:w-[196px]`}
            >
              <IoMdAddCircleOutline className="text-xl" /> Add Medicine Info
            </button>
          </DialogTrigger>
          <DialogContent className="md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
            <DialogClose
              onClick={() => {
                setSelected(null);
              }}
              className="absolute right-4 top-1"
              asChild
            >
              <p className="z-50 cursor-pointer text-4xl text-[#ffffff00]">x</p>
            </DialogClose>
            <DialogHeader>
              <DialogTitle className="text-center md:text-2xl">
                Add Medicine Information{" "}
              </DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <form onSubmit={handleMedicineInfoSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 lg:mt-20">
                <div>
                  <label className="font-semibold text-sm md:text-base">
                    Medicine Name
                  </label>
                  <br />
                  <input
                    className="focus:outline-none border-b mt-2 text-[12px] md:text-sm w-full py-1"
                    placeholder="Enter Patient Name"
                    name="m_name"
                    type="text"
                    onChange={handleMedicineInfo}
                  />
                </div>
                <div>
                  <label className="font-semibold text-sm md:text-base">
                    Time Period
                  </label>
                  <br />
                  <input
                    className="focus:outline-none border-b mt-2 text-sm w-full py-1"
                    placeholder="Enter Patient Name"
                    name=" m_time_period"
                    type="text"
                    onChange={handleMedicineInfo}
                  />
                </div>
                <div>
                  <label className="font-semibold text-sm md:text-base">
                    Consumption Time
                  </label>
                  <br />
                  <input
                    className="focus:outline-none border-b mt-2 text-sm w-full py-1"
                    placeholder="Enter Patient Name"
                    name="m_consumption_time"
                    type="text"
                    onChange={handleMedicineInfo}
                  />
                </div>
              </div>
              <div className="flex justify-end mt-10 md:mt-14">
                <button
                  type="submit"
                  className={`  bg-az-primary text-white text-[12px] md:text-base  flex gap-1 md:gap-2.5 items-center rounded py-2 md:py-2.5 px-6 w-max  md:px-8`}
                >
                  Save
                </button>
              </div>
            </form>
            <DialogFooter></DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Test */}
        <Dialog>
          <DialogTrigger asChild>
            <button
              onClick={() => setSelected(2)}
              className={`${
                selected == 2
                  ? "bg-white text-black border border-az-primary"
                  : "bg-az-primary text-white"
              } text-[12px] md:text-base  flex gap-1  md:gap-2.5 items-center rounded py-2 md:py-2.5 px-3 w-[164px] md:w-[196px]`}
            >
              <IoMdAddCircleOutline className="text-xl" /> Add Test Info
            </button>
          </DialogTrigger>
          <DialogContent className="md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
            <DialogClose
              onClick={() => {
                setSelected(null);
              }}
              className="absolute right-4 top-1"
              asChild
            >
              <p className="z-50 cursor-pointer text-4xl text-[#ffffff00]">x</p>
            </DialogClose>
            <DialogHeader>
              <DialogTitle className="text-center md:text-2xl">
                Add Test Information{" "}
              </DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <form onSubmit={handleTestInfoSubmit}>
              <div className="grid grid-cols-1  gap-6 md:gap-8 mt-8 lg:mt-20">
                <div>
                  <label className="font-semibold text-sm md:text-base">
                    Test Name
                  </label>
                  <br />
                  <input
                    className="focus:outline-none border-b mt-2 text-[12px] md:text-sm w-full py-1"
                    placeholder="Enter Patient Name"
                    name="testName"
                    type="text"
                  />
                </div>
                
              </div>
              <div className="flex justify-end mt-10 md:mt-14">
                <button
                  type="submit"
                  className={`  bg-az-primary text-white text-[12px] md:text-base  flex gap-1 md:gap-2.5 items-center rounded py-2 md:py-2.5 px-6 w-max  md:px-8`}
                >
                  Save
                </button>
              </div>
            </form>
            <DialogFooter></DialogFooter>
          </DialogContent>
        </Dialog>

        <button
          onClick={() => setSelected(3)}
          className={`${
            selected == 3
              ? "bg-white text-black border border-az-primary"
              : "bg-az-primary text-white"
          }  text-[12px] md:text-base  flex gap-1  md:gap-2.5 items-center rounded py-2 md:py-2.5 px-3  w-[164px] md:w-[196px]`}
        >
          <IoMdAddCircleOutline className="text-xl" /> Add Problem Info
        </button>
      </div>
    </div>
  );
};

export default InformationSection;
