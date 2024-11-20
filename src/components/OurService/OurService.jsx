const OurService = () => {
  return (
    <div>
      <div className="bg-gradient-to-br from-white to-blue-50 p-8 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side: Services */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Our Services Made Us Confident.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Service Cards */}
              {[
                { icon: <FaRegHospital />, title: "Quick Treatment" },
                { icon: <FaUserMd />, title: "Expert Doctors" },
                { icon: <FaFileAlt />, title: "Easy Documentation" },
                { icon: <FaCalendarCheck />, title: "Flexible Appointments" },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow"
                >
                  <div className="mb-4 text-primary text-4xl">
                    {service.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Images */}
          <div className="flex flex-col gap-4">
            <div className="w-full aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
              <img
                src="/path-to-image-1.jpg"
                alt="Service Image 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="/path-to-image-2.jpg"
                  alt="Service Image 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="/path-to-image-3.jpg"
                  alt="Service Image 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
