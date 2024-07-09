import { BsFacebook, BsLinkedin } from "react-icons/bs";
import logo from "../../src/assets/SCHOOL-OF-LIFE.png";
import { useState } from "react";

const Footer = () => {
  const [menuOpen1, setMenuOpen1] = useState(false);
  const [menuOpen2, setMenuOpen2] = useState(false);
  const [menuOpen3, setMenuOpen3] = useState(false);
  const [menuOpen4, setMenuOpen4] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_APP_API}/sub`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then(() => {});
  };

  const toggleMenu1 = () => {
    setMenuOpen1(!menuOpen1);
  };
  const toggleMenu2 = () => {
    setMenuOpen2(!menuOpen2);
  };
  const toggleMenu3 = () => {
    setMenuOpen3(!menuOpen3);
  };
  const toggleMenu4 = () => {
    setMenuOpen4(!menuOpen4);
  };

  return (
    <>
      <footer>
        <div className="bg-[#5e5953] flex flex-col-reverse md:flex md:flex-row md:justify-evenly justify-center align-center">
          <div className="container ">
            <div className="row">
              <div className="col-lg-12">
                <div className="flex flex-col-reverse md:flex md:flex-row lg:pl-20 ">
                  <div className=" newsletter-content py-5 p-2 lg:py-0  lg:pt-14 pl-5 md:pl-14 lg:px-8 ">
                    <h2 className="text-6xl lg:text-4xl xl:text-4xl text-white font-bold lg:text-{#253d4e}">
                      Go School <br />
                      <span className="text-2xl md:text-2xl lg:text-2xl">
                        start learning
                      </span>
                    </h2>
                    <p className="text-white text-sm xl:text-2xl pt-2 xl:py-4">
                      Learning from
                      <span className="text-brand"> Let Subscribe</span>
                    </p>
                    <div className="form-subscriber d-flex py-4 p-1">
                      <div className="flex md:gap-1 lg:gap-2">
                        <input
                          type="email"
                          placeholder="Your email"
                          value={email}
                          onChange={handleInputChange}
                          className="mr-2 px-1 py-2 xl:text-3xl rounded-lg focus:outline-none xl:px-8"
                        />
                        {loading ? (
                          <div>
                            <button
                              type="button"
                              className="search-button bg-gray-700 text-white xl:text-3xl xl:px-8 rounded p-2 lg:p-4"
                              disabled
                            >
                              Submitting
                            </button>
                          </div>
                        ) : (
                          <button
                            type="button"
                            onClick={handleSubmit}
                            className="search-button bg-black text-white xl:text-3xl xl:px-8 rounded p-2 lg:p-4"
                          >
                            Submit
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* <div>
                    <img src={Phone1} className="w-90 h-90 md:hidden" />
                    <img
                      src={Phone2}
                      className="hidden md:block lg:w-100 lg:h-64 lg:pl-20 "
                    />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Section Reactory For Business */}
      <div className="hidden md:block footer-2  rounded font-Gabarito">
        <div className="">
          <div className="bg-gray-800 rounded ">
            <div className="w-[80%]  mx-auto pb-8 pt-6">
              <div className="grid md:grid md:grid-cols-5 lg:grid lg:grid-cols-5 grid-cols-5 justify-center items-center sm:text-left ">
                {/* Logo Section */}
                <div className="w-full md:w-auto mb-4 md:mb-0 flex justify-center md:justify-start">
                  <img src={logo} alt="Logo" className="h-16 w-auto" />
                </div>
                <div className="md:col-span-2 lg:col-span-1">
                  <h6 className="text-[16px]  font-medium text-white uppercase mb-1">
                    School
                  </h6>
                  <div className="text-[16px]">
                    <a
                      href={""}
                      className="text-gray-400 py-1 block hover:text-yellow-500"
                    >
                      Home
                    </a>
                    <a
                      href=""
                      className="text-gray-400 py-1 block hover:text-yellow-500"
                    >
                      Alumni
                    </a>
                    <a
                      href=""
                      className="text-gray-400 py-1 block hover:text-yellow-500"
                    >
                      Ielts
                    </a>
                    <div className="flex gap-3 pt-2 ">
                      <a href="">
                        <BsFacebook
                          className="text-slate-300 hover:text-yellow-500"
                          size={18}
                        />
                      </a>
                      {/* <BsInstagram className="text-slate-300 hover:text-yellow-500" size={18} />
                    <BsTwitter className="text-slate-300 hover:text-yellow-500" size={18} /> */}
                      <BsLinkedin
                        className="text-slate-300 hover:text-yellow-500"
                        size={18}
                      />
                    </div>
                  </div>
                </div>

                {/* Section About */}
                <div className="lg:pl-12">
                  <h6 className="text-[18px] font-medium text-white uppercase mb-0 mt-1">
                    About
                  </h6>
                  <div className="text-[16px]">
                    <a
                      href={"/story"}
                      className="text-gray-400 py-1 block hover:text-yellow-500"
                    >
                      Our Story
                    </a>
                    <a
                      href=""
                      className="text-gray-400 py-1 block hover:text-yellow-500"
                    >
                      Our Blog
                    </a>
                    <a
                      href="/review"
                      className="text-gray-400 py-1 block hover:text-yellow-500"
                    >
                      Customer Reviews
                    </a>
                    <a
                      href="/hire"
                      className="text-gray-400 py-1 block hover:text-yellow-500"
                    >
                      We are Hiring!
                    </a>
                  </div>
                </div>
                {/* Section Term */}
                <div className="sm:flex-1  lg:ml-3">
                  <h6 className="text-[18px] font-medium text-white uppercase mb-0 ">
                    TERMS
                  </h6>
                  <div className="text-[16px]">
                    <a
                      href={"/wr"}
                      className="text-gray-400 py-1 block hover:text-yellow-500"
                    >
                      Warranty & Refunds
                    </a>
                    <a
                      href="/shipping"
                      className="text-gray-400 py-1 block hover:text-yellow-500"
                    >
                      Shipping Policy
                    </a>
                    <a
                      href="/terms"
                      className="text-gray-400 py-1 block hover:text-yellow-500"
                    >
                      Terms Of Service
                    </a>
                    <a
                      href="/privacypolicy"
                      className="text-gray-400 py-1 block hover:text-yellow-500"
                    >
                      Privacy Policy
                    </a>
                  </div>
                </div>
                {/* Section Terms */}

                {/* Section HElp */}
                <div className=" ml-2">
                  <h6 className="text-[18px]  font-medium text-white uppercase mb-0 ">
                    Help
                  </h6>
                  <div className="text-[16px] ">
                    <a
                      href="/track"
                      className="text-gray-400 py-1  block hover:text-yellow-500"
                    >
                      Track My Order
                    </a>
                    <a
                      href="/help"
                      className="text-gray-400 py-1 block hover:text-yellow-500"
                    >
                      Help Center
                    </a>
                    <a
                      href="/return"
                      className="text-gray-400 py-1 block hover:text-yellow-500"
                    >
                      Returns & Claims
                    </a>
                    <button className="mt-3 text-[6px] sm:text-[18px]">
                      <a
                        href="/contact"
                        className="bg-white text-[9px] md:text-lg px-1 py-1 sm:px-3 rounded sm:py-1 hover:text-black hover:bg-yellow-500"
                      >
                        Contact Us
                      </a>
                    </button>
                  </div>
                </div>
                {/* Section HElp */}
              </div>
            </div>

            {/* Footer Copyright */}
            <div className="bg-white">
              <div className="container mx-auto  text-center text-[18px] py-1">
                <div>
                  <p className="text-gray-400 text-sm md:text-md lg:text-xl ">
                    2024 &copy;
                  </p>
                </div>
              </div>
            </div>
            {/* Footer Copyright */}
          </div>
        </div>
      </div>

      {/* Small Device */}
      <div className="md:hidden bg-gray-800 text-white">
        <div className="flex justify-center items-left ">
          <div className="flex flex-col w-full">
            {/* REFACTORY FOR BUSINESS */}
            <button className="group focus:outline-none" onClick={toggleMenu1}>
              <div className="flex items-center justify-between h-12 px-3 font-semibold text-left">
                <span className="truncate">School details</span>
                <svg
                  className={`h-4 w-4 ${
                    menuOpen1 ? "transform rotate-180" : ""
                  }`}
                  xmlns="http://www"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div
                className={`max-h-0 overflow-hidden duration-300 ${
                  menuOpen1 ? "max-h-40" : ""
                }`}
              >
                <a
                  href={""}
                  className="text-gray-400 py-1 block hover:text-yellow-500  text-left pl-4"
                >
                  School details
                </a>
                <a
                  href=""
                  className="text-gray-400 py-1 block hover:text-yellow-500 text-left pl-4"
                >
                  How it works
                </a>
                <a
                  href=""
                  className="text-gray-400 py-1 block hover:text-yellow-500 text-left pl-4"
                >
                  Be a Learner
                </a>
              </div>
            </button>

            {/* ABOUT */}
            <button className="group focus:outline-none" onClick={toggleMenu2}>
              <div className="flex items-center justify-between h-12 px-3 font-semibold text-left">
                <span className="truncate">ABOUT</span>
                <svg
                  className={`h-4 w-4 ${
                    menuOpen2 ? "transform rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div
                className={`max-h-0 overflow-hidden duration-300 text-left pl-4 ${
                  menuOpen2 ? "max-h-40" : ""
                }`}
              >
                <a
                  href={"/story"}
                  className="text-gray-400 py-1 block hover:text-yellow-500"
                >
                  Our Story
                </a>
                <a
                  href=""
                  className="text-gray-400 py-1 block hover:text-yellow-500"
                >
                  Our Blog
                </a>
                <a
                  href="/review"
                  className="text-gray-400 py-1 block hover:text-yellow-500"
                >
                  Customer Reviews
                </a>
                <a
                  href="/hire"
                  className="text-gray-400 py-1 block hover:text-yellow-500"
                >
                  We are Hiring!
                </a>
              </div>
            </button>

            {/* TERMS */}
            <button className="group focus:outline-none" onClick={toggleMenu3}>
              <div className="flex items-center justify-between h-12 px-3 font-semibold text-left">
                <span className="truncate">TERMS</span>
                <svg
                  className={`h-4 w-4 ${
                    menuOpen3 ? "transform rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div
                className={`max-h-0 overflow-hidden duration-300 text-left pl-4 ${
                  menuOpen3 ? "max-h-40" : ""
                }`}
              >
                <a
                  href={"/wr"}
                  className="text-gray-400 py-1 block hover:text-yellow-500"
                >
                  Alumni
                </a>
                <a
                  href="/shipping"
                  className="text-gray-400 py-1 block hover:text-yellow-500"
                >
                  ielts
                </a>
                <a
                  href="/terms"
                  className="text-gray-400 py-1 block hover:text-yellow-500"
                >
                  Terms Of Service
                </a>
                <a
                  href="/privacypolicy"
                  className="text-gray-400 py-1 block hover:text-yellow-500"
                >
                  Privacy Policy
                </a>
              </div>
            </button>

            {/* HELP */}
            <button className="group focus:outline-none" onClick={toggleMenu4}>
              <div className="flex items-center justify-between h-12 px-3 font-semibold text-left">
                <span className="truncate">HELP</span>
                <svg
                  className={`h-4 w-4 ${
                    menuOpen4 ? "transform rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div
                className={`max-h-0 overflow-hidden duration-300 text-left pl-4 ${
                  menuOpen4 ? "max-h-40" : ""
                }`}
              >
                <a
                  href="/track"
                  className="text-gray-400 py-1  block hover:text-yellow-500"
                >
                  Track My Order
                </a>
                <a
                  href="/help"
                  className="text-gray-400 py-1 block hover:text-yellow-500"
                >
                  Help Center
                </a>
                <a
                  href="/return"
                  className="text-gray-400 py-1 block hover:text-yellow-500"
                >
                  Returns & Claims
                </a>
                <button className="mt-3 text-[6px] sm:text-[18px] mb-4">
                  <a
                    href="/contact"
                    className="bg-white text-black text-xs text-[9px] md:text-lg px-2 py-1 sm:px-3 rounded sm:py-1 hover:text-black hover:bg-yellow-500"
                  >
                    Contact Us
                  </a>
                </button>
              </div>
            </button>

            {/* Icons */}
            <div className="flex px-4 pb-6  gap-3 pt-2 ">
              <a href="">
                <BsFacebook
                  className="text-slate-300 hover:text-yellow-500"
                  size={18}
                />
              </a>
              {/* <BsInstagram className="text-slate-300 hover:text-yellow-500" size={18} />
            <BsTwitter className="text-slate-300 hover:text-yellow-500" size={18} /> */}
              <BsLinkedin
                className="text-slate-300 hover:text-yellow-500"
                size={18}
              />
            </div>

            {/* Footer Copyright */}
            <div className="bg-white">
              <div className="container mx-auto  text-center text-[18px] py-1">
                <div>
                  <p className="text-gray-400 text-sm md:text-md lg:text-xl ">
                    2023 &copy; School details.
                  </p>
                </div>
              </div>
            </div>
            {/* Footer Copyright */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
