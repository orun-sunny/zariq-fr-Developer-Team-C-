import image1 from "../assets/Reverie-School-Students.jpg";
const AboutUs = () => {
  return (
    <div className="bg-gray-100 p-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Div: Image with Animation */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start  lg:mb-0">
          <img
            src={image1} // Replace with your image URL
            alt="About Us"
            className="rounded-lg  transition-transform duration-300 ease-in-out transform hover:scale-90"
          />
        </div>

        {/* Right Div: Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left px-8">
          <h2 className="text-xl font-bold">About Us</h2>
          <h1 className="text-7xl text-[#E5A324] font-bold py-2">
            Reverie School is <br /> admitting students <br /> from Playgroup to
            <br /> Grade 7
          </h1>
          <p className="text-lg mb-6">
            Reverie School follows the Pearson Edexcel curriculum and <br />
            intends to deliver excellent educational programs in the <br />
            following Key Learning Areas: English, Mathematics, <br />
            Science, Technology, Global Citizenship, Creative Arts, <br />
            Personal Development, Health and Physical Education as well as{" "}
            <br />
            lessons in Quran, Islamic Studies and Arabic Language classes.{" "}
            <br />
            Here at Reverie School, we aim to help our precious <br />
            children to think and act in ways that are truly inspiring.
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full transition duration-300 hover:bg-blue-600">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
