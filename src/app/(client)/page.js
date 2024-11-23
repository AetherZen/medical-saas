import Appointment from "@/components/Appointment/Appointment";
import FAQ from "@/components/home/FAQ/FAQ";
import Hero from "@/components/home/Hero/Hero";
import Review from "@/components/home/review/Review";

import OurService from "@/components/OurService/OurService";
import PackageSection from "@/components/PackageSection/PackageSection";

const page = () => {
  return (
    <div>
      <Hero />
      <OurService />
      <PackageSection />
      <Review />
      <FAQ />
    </div>
  );
};

export default page;
