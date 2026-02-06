import {
  FaShieldAlt,
  FaCog,
  FaBullseye,
  FaLightbulb,
  FaEye
} from "react-icons/fa";

function AboutUs() {
  return (
    <section className="bg-white/80 min-h-screen py-14 px-2 flex flex-col items-center">
      <div className="max-w-3xl w-full mx-auto text-center">
        <div className="text-xs uppercase tracking-widest mb-3 text-gray-600">About Us</div>
        <h1 className="text-3xl font-bold mb-3 text-gray-900">
          Unveiling Our Identity,<br />Vision and Values
        </h1>
        <p className="text-gray-700 mb-8">
          We're passionate about building LEVEL as your trusted shop. With a proven record and dedication, we bring you the best products, seamless experience, and high standards for quality and customer satisfaction.
        </p>
      </div>

      {/* Icons block */}
      <div className="bg-[#17604B] rounded-xl shadow-lg max-w-3xl w-full py-8 px-4 mb-10 flex flex-col items-center">
        <div className="flex justify-between w-full max-w-xl mx-auto mb-6">
          <div className="flex flex-col items-center gap-1 text-white">
            <FaShieldAlt size={38} className="mb-2" />
            <span className="font-semibold">Safety</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-white">
            <FaLightbulb size={38} className="mb-2" />
            <span className="font-semibold">Innovation</span>
          </div>
        </div>
        <div className="flex justify-center w-full gap-20">
          <div className="flex flex-col items-center gap-1 text-white">
            <FaCog size={38} className="mb-2" />
            <span className="font-semibold">Efficient</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-white">
            <FaBullseye size={38} className="mb-2" />
            <span className="font-semibold">Precision</span>
          </div>
        </div>
      </div>

      {/* Vision and Mission */}
      <div className="bg-white rounded-3xl shadow-md max-w-3xl w-full py-10 px-6 flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-between w-full gap-5 mb-8">
          <div className="flex-1 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-2 text-[#17604B] font-bold text-lg">
              <FaEye size={24} />
              <span>Vision</span>
            </div>
            <p className="text-gray-700 text-center md:text-left text-sm">
              To lead the way in online shopping by offering innovative, sustainable, and cost-effective solutions for every customer.
            </p>
          </div>
          <div className="hidden md:block h-16 border-l border-gray-300 mx-4"></div>
          <div className="flex-1 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-2 text-[#17604B] font-bold text-lg">
              <FaBullseye size={24} />
              <span>Mission</span>
            </div>
            <p className="text-gray-700 text-center md:text-left text-sm">
              To leverage expertise, resources, and technology to deliver quality products, great deals, and outstanding service exceeding expectations.
            </p>
          </div>
        </div>
        <button className="bg-[#17604B] text-white px-6 py-2 rounded font-semibold hover:bg-[#134d3c] transition mt-4">
          Know More About Us
        </button>
      </div>
    </section>
  );
}

export default AboutUs;
