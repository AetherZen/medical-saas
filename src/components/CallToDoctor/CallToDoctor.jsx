import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMicrophone, FaVideo } from "react-icons/fa6";
import { AiFillAudio } from "react-icons/ai";
import { BsRecordCircle } from "react-icons/bs";
import { RiFolderUploadFill } from "react-icons/ri";
import { FaDownload } from "react-icons/fa";

const CallToDoctor = () => {

  const doctorData = {
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    details: [
      { label: 'Doctor Name', value: 'Nafiul Islam Jim' },
      { label: 'Time Duration', value: '01.00 Hours' },
      { label: 'Appointment Way', value: 'Offline' },
      { label: 'Department Name', value: 'Anesthesiology Specialties' },
    ],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    details: [
      { label: 'Doctor Name', value: 'Halima Tus Sadia' },
      { label: 'Time Duration', value: '01.00 Hours' },
      { label: 'Appointment Way', value: 'Offline' },
      { label: 'Department Name', value: 'Psychological Specialties' },
    ],
  };





  return (
    <div className="py-10 bg-gradient-to-l from-pink-100 via-blue-100 to-pink-100">
      <div className="max-w-7xl mx-auto section-padding-x">
        <div className="flex justify-center">
          <h1 className="lg:text-5xl text-2xl font-bold lg:py-10 py-6 max-w-xl text-center">
            Doctor In Call Now
          </h1>
        </div>
        <p className="lg:text-base text-sm lg:text-center text-justify">
          Lorem Ipsumis simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        {/* main part  */}
        <div className="py-16">
          {/* Part 1 */}
          <div>
            <div className="w-full flex justify-center items-center">
              <div className="w-full max-w-7xl p-4 bg-[#DDF0F7] rounded-xl shadow-xl flex items-center justify-center">
                <div className="relative w-full h-full rounded-xl">
                  {/* Background Image */}
                  <Image
                    src="https://i.postimg.cc/c45Rtz5r/Rectangle-1.png"
                    alt="image"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover rounded-xl bg-cover bg-center"
                  />

                  {/* Overlay Elements */}
                  <div className="absolute inset-0 flex flex-col justify-between">
                    {/* Top Part */}
                    <div className="flex justify-between px-4 py-4">
                      {/* Video call participant details */}
                      <div className="rounded-full p-2">
                        <div className="flex items-center space-x-2">
                          <Image
                            src="https://i.postimg.cc/c45Rtz5r/Rectangle-1.png"
                            alt="User Avatar"
                            width={30}
                            height={30}
                            className="w-7 h-7 rounded-full border border-white"
                          />
                          <p className="text-xs font-semibold text-white">
                            Prof. Dr. Burak Korkut
                          </p>
                        </div>
                      </div>
                      <div className="bg-[#d6d7d4] hover:bg-gray-500 rounded-full p-3">
                        <AiFillAudio className="text-2xl font-bold text-white hover:bg-gray-500" />
                      </div>
                    </div>

                    {/* Right Bottom Part */}
                    <div className="absolute bottom-5 right-5 w-32 h-32 bg-white rounded-xl shadow-lg overflow-hidden">
                      <Image
                        src="https://i.postimg.cc/x1KnM739/Rectangle-4-1.png"
                        alt="Right Bottom Image"
                        width={128}
                        height={128}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>

                    {/* Bottom Middle Part */}
                    <div className="absolute -bottom-10 left-0 right-0 flex justify-center gap-9 mx-auto max-w-md py-5 rounded-full bg-[#DDF0F7]/60">
                      <button className="bg-white rounded-full p-3 hover:bg-gray-200 shadow-lg">
                        <FaMicrophone className="text-[#65c8d0]" size={29} />
                      </button>
                      <button className="bg-white rounded-full p-3 hover:bg-gray-200 shadow-lg">
                        <FaVideo className="text-[#65c8d0]" size={29} />
                      </button>
                      <button className="bg-white rounded-full p-3 hover:bg-gray-200 shadow-lg">
                        <BsRecordCircle className="text-[#65c8d0]" size={29} />
                      </button>
                      <button className="bg-white rounded-full p-3 hover:bg-gray-200 shadow-lg">
                        <RiFolderUploadFill
                          className="text-[#65c8d0]"
                          size={29}
                        />
                      </button>
                      <button className="bg-red-500 rounded-full p-3 hover:bg-red-400 shadow-lg">
                        <FaPhoneAlt
                          className="text-[#65c8d0]"
                          size={29}
                          color="white"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* patient info  */}
        <div className="py-12">
          <div className="bg-gray-100 pt-8 pb-16 lg:mb-8 px-6 lg:px-12 rounded-lg shadow-md">
            <h1 className="lg:text-4xl text-lx font-bold text-center py-12">
              Your Doctor In Call
            </h1>
            <h2 className="lg:text-xl text-base font-semibold mb-8">Some Information.</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              {doctorData?.details.map((item, index) => (
                <div key={index}>
                  <p className="font-medium">{item.label}</p>
                  <p className="text-gray-600 text-sm mt-2">{item.value}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-600 mb-6 mt-8 font-medium ">{doctorData.description}</p>
            <div className="flex justify-end">
              <button className="bg-teal-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-teal-600">
                Download Prescription
                <FaDownload />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToDoctor;