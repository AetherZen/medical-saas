import Image from "next/image";

const CategoryDetails = () => {
  const doctors = [
    {
      name: "Dr. Sohan Islam",
      department: "Neurology",
      patients: "2000+ Patients",
      rating: "5.0",
      reviews: "(350)",
      address: "Dhanmondi 32, w-17/A, Dhaka, Bangladesh.",
      image: "https://i.postimg.cc/4x747H9k/Frame-76821-1.png",
    },
    {
      name: "Dr. Hosneara Pervin",
      department: "Neurology",
      patients: "2000+ Patients",
      rating: "5.0",
      reviews: "(350)",
      address: "Dhanmondi 32, w-17/A, Dhaka, Bangladesh.",
      image: "https://i.postimg.cc/KjpF4mc8/Frame-76822-1.png",
    },
    {
      name: "Dr. Halima Sadiya",
      department: "Neurology",
      patients: "2000+ Patients",
      rating: "5.0",
      reviews: "(350)",
      address: "Dhanmondi 32, w-17/A, Dhaka, Bangladesh.",
      image: "https://i.postimg.cc/7YbwdJXG/Frame-76823.png",
    },
    {
      name: "Dr. Nafiul Islam Jim",
      department: "Neurology",
      patients: "2000+ Patients",
      rating: "5.0",
      reviews: "(350)",
      address: "Dhanmondi 32, w-17/A, Dhaka, Bangladesh.",
      image: "https://i.postimg.cc/3wjTmXr6/Frame-76381.png",
    },
    {
      name: "Dr. Arif Rahman",
      department: "Neurology",
      patients: "2000+ Patients",
      rating: "5.0",
      reviews: "(350)",
      address: "Dhanmondi 32, w-17/A, Dhaka, Bangladesh.",
      image: "https://i.postimg.cc/pX1yRhsF/Frame-76381-1.png",
    },
    {
      name: "Dr. Shirin Akter",
      department: "Neurology",
      patients: "2000+ Patients",
      rating: "5.0",
      reviews: "(350)",
      address: "Dhanmondi 32, w-17/A, Dhaka, Bangladesh.",
      image: "https://i.postimg.cc/13nXtmdY/Frame-76387.png",
    },
  ];

  return (
    <div className=" bg-gradient-to-l from-pink-100 via-blue-100 to-pink-100">
      <div className="max-w-7xl mx-auto py-16 section-padding-x">
        {/* first part  */}
        <div>
          <h1 className="lg:text-5xl text-xl font-bold text-center mt-16 mb-24">
            General & Laparoscopic Surgery
          </h1>
          <h2 className="lg:text-xl text-base font-bold mb-5">
            General & Laparoscopic Surgery Centre at “HOSPITAL NAME”
          </h2>
          <p className="lg:text-base text-xs mb-20">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <h2 className="lg:text-xl text-lg mb-5 font-bold">
            Consultation & Appointment
          </h2>
          <p className="lg:text-base text-xs mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
        </div>

        {/* middle part  */}
        <div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 shadow-sm  rounded-lg"
              >
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  width={400}
                  height={400}
                  className=" w-full h-auto object-cover  rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="lg:text-xl text-md font-semibold">
                    {doctor.name}
                  </h3>
                  <div className="flex justify-between">
                    <span className="inline-block bg-[#e8f6ff] text-[#2eafff] text-sm font-medium px-3 py-1 rounded-lg mt-2">
                      {doctor.department}
                    </span>
                    <div className="flex items-center mt-2">
                      <span className="text-sm font-semibold">
                        ⭐ {doctor.rating}
                      </span>
                      <span className="text-sm font-semibold">
                        {doctor.reviews}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    {doctor.patients}
                  </p>

                  <p className="text-xs text-gray-500 mt-2">{doctor.address}</p>
                </div>
                <div className="flex justify-center py-3">
                  <button className="bg-[#65c8d0] hover:bg-[#65c8d0] text-white px-6 py-2 rounded-md text-sm font-medium">
                    Book Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* last part  */}
        <div className="mt-16">
          <h1 className="lg:text-2xl text-lg font-bold mb-6">
            Important Points About Tests/procedures/surgeries, Your Reports &
            Billing Enquiries
          </h1>
          <p className="lg:text-sm text-xs mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p className="lg:text-sm text-xs mb-6">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source.
          </p>
          <p className="lg:text-sm text-xs mb-6">
            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
            Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
            written in 45 BC. This book is a treatise on the theory of ethics,
            very popular during the Renaissance. The first line of Lorem Ipsum,
            "Lorem ipsum dolor sit amet..", comes from a line in section
            1.10.32.
          </p>
          <p className="lg:text-sm text-xs mb-6">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </p>
        </div>
      </div>
    </div>
  );
};
export default CategoryDetails;
