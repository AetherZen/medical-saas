import Image from "next/image";

const CareCenter = () => {
  const services = [
    {
      name: "Prenatal Care",
      brand: "Nurture Nest",
      price: "10,000 tk",
      pushingCharge: "5,000 tk",
      totalPrice: "15,000 tk",
    },
    {
      name: "Postnatal Care",
      brand: "Blossom Care",
      price: "20,000 tk",
      pushingCharge: "5,000 tk",
      totalPrice: "25,000 tk",
    },
    {
      name: "Pediatric Services",
      brand: "Little Miracles",
      price: "5,000 tk",
      pushingCharge: "5,000 tk",
      totalPrice: "35,000 tk",
    },
    {
      name: "Lactation Consultation",
      brand: "Tender Hearts",
      price: "6,000 tk",
      pushingCharge: "5,000 tk",
      totalPrice: "15,000 tk",
    },
    {
      name: "Childbirth Education Classes",
      brand: "Mommy & Me Haven",
      price: "2,000 tk",
      pushingCharge: "5,000 tk",
      totalPrice: "15,000 tk",
    },
    {
      name: "Neonatal Intensive Care Unit",
      brand: "Cherished Beginnings",
      price: "500 tk",
      pushingCharge: "5,000 tk",
      totalPrice: "3,000 tk",
    },
    {
      name: "Vaccination Programs",
      brand: "Family First Clinic",
      price: "50,000 tk",
      pushingCharge: "5,000 tk",
      totalPrice: "80,000 tk",
    },
    {
      name: "Nutritional Counseling",
      brand: "Joyful Journeys",
      price: "90,000 tk",
      pushingCharge: "5,000 tk",
      totalPrice: "60,000 tk",
    },
    {
      name: "Family Planning Services",
      brand: "Caring Cradle",
      price: "10,000 tk",
      pushingCharge: "5,000 tk",
      totalPrice: "50,000 tk",
    },
    {
      name: "Parenting Workshops",
      brand: "Precious Moments",
      price: "1,000 tk",
      pushingCharge: "5,000 tk",
      totalPrice: "9,000 tk",
    },
  ];

  return (
    <div className="bg-[#f1f4fb] py-10 section-padding-x">
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-center">
          <h1 className="lg:text-5xl text-xl font-bold py-14 max-w-xl text-center">
            Mother & Child Center
          </h1>
        </div>
        <div className="mb-10">
          <h2 className="lg:text-2xl text-base font-medium mb-3">
            About Mother & Child Center
          </h2>
          <p className="lg:text-base text-sm font-medium lg:text-start text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </div>
        <div className="mb-10">
          <h2 className="lg:text-2xl text-base font-medium mb-3">
            Our Promise
          </h2>
          <p className="lg:text-base text-sm font-medium lg:text-start text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </div>
        <div>
          <Image
            src="https://i.postimg.cc/5yYVq3C5/Frame-76632.png"
            alt="care center"
            className="w-full h-full object-cover"
            width={400}
            height={300}
          />
        </div>
        <div className="my-10">
          <div className="mb-10">
            <h2 className="lg:text-xl text-base font-medium">Our Package </h2>
            <p className="lg:text-base text-sm font-medium lg:text-start text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
          </div>
          {/* table  */}
          <div>
            <div className="max-w-7xl mx-auto overflow-x-auto ">
              <table className="w-full border-collapse ">
                <thead className="">
                  <tr className=" text-black ">
                    <th className="px-0 pt-4 text-left font-semibold">
                      Services Name
                    </th>
                    <th className="px-0 pt-4 text-left font-semibold">
                      Brand Name/ Trade Name
                    </th>
                    <th className="px-0 pt-4 text-left font-semibold">
                      Services Price
                    </th>
                    <th className="px-0 pt-4 text-left font-semibold">
                      Pushing Charge
                    </th>
                    <th className="px-0 pt-4 text-left font-semibold">
                      Total Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service, index) => (
                    <tr
                      key={index}
                      className={`border-t ${index % 2 === 0 ? "" : ""}`}
                    >
                      <td className="px-0 pt-4">{service.name}</td>
                      <td className="px-0 pt-4">{service.brand}</td>
                      <td className="px-0 pt-4">{service.price}</td>
                      <td className="px-0 pt-4">{service.pushingCharge}</td>
                      <td className="px-0 pt-4">{service.totalPrice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareCenter;
