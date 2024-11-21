import Appointment from "@/components/Appointment/Appointment";
import OurService from "@/components/OurService/OurService";
import PackageSection from "@/components/PackageSection/PackageSection";


const page = () => {
    return (
        <div>
           <OurService />
           <Appointment />
           <PackageSection />
        </div>
    );
};

export default page;