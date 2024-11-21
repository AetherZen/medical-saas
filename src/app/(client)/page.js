
import Appointment from "@/components/Appointment/Appointment";

import FAQ from "@/components/home/FAQ/FAQ";
import Hero from "@/components/home/Hero/Hero";

import OurService from "@/components/OurService/OurService";
import PackageSection from "@/components/PackageSection/PackageSection";

const page = () => {

  return (
    <div>
      <Hero />
      <OurService />
      <Appointment />
      <PackageSection />
      <FAQ />
    </div>
  );

};

export default page;
