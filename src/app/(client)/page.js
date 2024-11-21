import FAQ from "@/components/home/FAQ/FAQ";
import Hero from "@/components/home/Hero/Hero";
import OurService from "@/components/OurService/OurService";
import PackageSection from "@/components/PackageSection/PackageSection";

const page = () => {
  return (
    <div>
      <Hero />
      <OurService />
      <PackageSection />
      <FAQ />
    </div>
  );
};

export default page;
