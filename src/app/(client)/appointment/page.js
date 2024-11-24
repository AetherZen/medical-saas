import DoctorSection from "@/components/Appointment/DoctorSection";
import ScheduleSection from "@/components/Appointment/ScheduleSection";


const page = () => {
    return (
        <div className=" bg-[#F1F4FB]">
            <DoctorSection />
            <ScheduleSection />
        </div>
    );
};

export default page;