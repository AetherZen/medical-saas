import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const FAQ = () => {
  return (
    <div className="max-content-width section-padding-x section-padding-y bg-[#EAF2F8]">
      <div className="grid grid-cols-1 items-center lg:grid-cols-5 gap-7 lg:h-[500px]">
        <div className="col-span-5 lg:col-span-3 py-5">
          <h1 className="text-xl md:text-5xl font-semibold text-center lg:text-left ">
            Frequently Asked <br />
            Questions.
          </h1>
          <Accordion
            type="single"
            collapsible
            className="w-full mt-12 lg:h-[280px]"
          >
            <AccordionItem className="bg-white px-2 rounded-lg" value="item-1">
              <AccordionTrigger className="text-sm md:text-base font-semibold">
                Is it accessible?
              </AccordionTrigger>
              <AccordionContent className="text-[#6E6E6E] text-[12px] md:text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="bg-white px-2 rounded-lg mt-2"
              value="item-2"
            >
              <AccordionTrigger className="text-sm md:text-base font-semibold">
                Is it styled?
              </AccordionTrigger>
              <AccordionContent className="text-[#6E6E6E] text-[12px] md:text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="bg-white px-2 rounded-lg mt-2"
              value="item-3"
            >
              <AccordionTrigger className="text-sm md:text-base font-semibold">
                Is it animated?
              </AccordionTrigger>
              <AccordionContent className="text-[#6E6E6E] text-[12px] md:text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="lg:col-span-2  h-[300px] rounded-md bg-[#C0E8EC99] relative py-10 hidden lg:block">
          <Image
            height={608}
            width={293}
            src="/faq.png"
            className="mx-auto absolute bottom-0 left-[20%]"
            alt="faq"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
