import { FaPhone, FaStar } from "react-icons/fa";
import img1 from "../assets/Home-2-1.jpg";
import img2 from "../assets/Home-3.jpg";

const Banner = () => {
  return (
    <div className="bg-gray-100 p-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* First Div: Text and Buttons */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h2 className="text-xl font-bold">LEARN. PLAY. EXPLORE</h2>
          <h1 className="text-7xl text-[#E5A324] font-bold py-2">
            A safe and joyful <br /> place for your <br /> lovely children
          </h1>
          <p className="text-lg leading-8 text-left py-4">
            Assalamu Alaikum! Welcome to Reverie School, where academic <br />
            excellence meets moral values. Located at Bashundhara Residential{" "}
            <br />
            Area in Dhaka, our English medium institution offers a holistic{" "}
            <br />
            education, nurturing students to thrive academically and
            spiritually. <br /> Join us for a journey of learning and
            enlightenment.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4 mb-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
              Enroll your Kid
            </button>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-yellow-500" />
              ))}
            </div>
          </div>
          <hr className="my-4" />
          <div className="flex items-center justify-center lg:justify-start space-x-2">
            <FaPhone />
            <span className="text-lg">+123 456 7890</span>
          </div>
        </div>

        {/* Second Div: Images */}
        <div className="relative w-full lg:w-1/2 md:w-4/5 flex justify-center lg:justify-end s">
          <img
            src={img2}
            alt="Image 2"
            className="absolute w-1/2 rounded-lg  py-32"
            style={{ left: "-15%" }}
          />
          <img
            src={img1}
            alt="Image 1"
            className="relative w-1/2 rounded-lg  py-52"
            style={{
              left: "20%",
              height: "50%",
              transform: "translateX(-90%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
