"use client";
import { FC } from "react";
import TypeWriterEffect from "react-typewriter-effect";

const HeroSection: FC = () => {
  return (
    <div className="lg:h-[80vh] lg:p-[20px] justify-center align-center relative">
      <div className="flex flex-col-reverse lg:flex-row lg:p-[14vh]">
        <div className="leading-[40px] lg:w-[40vw]">
          <div className="ml-7">
            <h2 className="text-indigo-500 font-bold md:text-[20px] lg:text-[20px] sm:text-[18px]">
              About
            </h2>
            <div className="border w-[10vw]"></div>
            <div className="flex lg:flex-row flex-col">
              <h1 className="text-[30px]  font-bold font mt-2">Hello , I'm</h1>
              <span className="text-indigo-500 text-[24px] font-bold font mt-2 lg:ml-3 pb-4">
                <TypeWriterEffect
                  startDelay={20}
                  cursorColor="#3F3D56"
                  multiText={["Harshit Srivastava", "A Web Developer"]}
                  multiTextDelay={500}
                  typeSpeed={35}
                  multiTextLoop
                />
              </span>
            </div>
            <p className="lg:w-[30vw] leading-7">
              Experienced full stack developer proficient in both frontend and
              backend technologies, specializing in web development. Skilled in
              building scalable, responsive, and user-friendly applications to
              meet diverse business needs.
            </p>
          </div>
          <img
            className="lg:h-[8vh] lg:w-[12vw] h-[12vh] w-[50vw] md:h-[20vh] md:w-[30vw] sm:h-[10vh] sm:w-[22vw] object-cover"
            src="/Project image .png"
            alt="signature"
          />
          <div className="flex pb-2 pt-2">
            <a href="https://www.linkedin.com/in/harshit-srivastava-54b982277/">
              <svg
                fill=""
                height="25px"
                width="79px"
                className="mt-3 cursor-pointer hover:filter hover:saturate-0 transition ease-in-out duration-200"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="-133.3 -133.3 576.60 576.60"
                xmlSpace="preserve"
                stroke=""
                strokeWidth="0.0031"
              >
                <g
                  id="SVGRepo_bgCarrier"
                  strokeWidth="0"
                  transform="translate(0,0), scale(1)"
                >
                  <rect
                    x="-133.3"
                    y="-133.3"
                    width="576.60"
                    height="576.60"
                    rx="288.3"
                    fill="#5154f0"
                    strokeWidth="0"
                  ></rect>
                </g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#CCCCCC"
                  strokeWidth="0.62"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="XMLID_801_">
                    {" "}
                    <path
                      id="XMLID_802_"
                      d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73 C77.16,101.969,74.922,99.73,72.16,99.73z"
                    ></path>{" "}
                    <path
                      id="XMLID_803_"
                      d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4 c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"
                    ></path>{" "}
                    <path
                      id="XMLID_804_"
                      d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599 c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319 c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995 C310,145.43,300.549,94.761,230.454,94.761z"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </a>
            <a href="https://twitter.com/sof_thenic">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mt-3 cursor-pointer h-8 w-9 mr-7 hover:filter hover:saturate-0 transition ease-in-out duration-200"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#5154f0"
                  d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                />
              </svg>
            </a>
            <a href="/Resume.pdf" download="Harshit-Srivastava-Resume.pdf">
              <div className="flex justify-center items-center">
              <button className="flex bg-indigo-800 pl-4 pr-4  rounded-tr-xl rounded-bl-xl group hover:bg-transparent transition ease-in-out duration-300 hover:border">
                <h1 className="font-bold">
                  <h1 className="hidden lg:inline">Download</h1> Resume
                </h1>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mt-3 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </span>
              </button>
              </div>
             
            </a>
          </div>
        </div>
        <img
          className="lg:h-[45vh] lg:w-[30vw] lg:ml-0 md:h-[60vh] md:w-[40vw] md:ml-[30vw] mb-9 sm:h-[50vh] sm:w-[50vw] sm:ml-[20vh] object-cover"
          src="/myimage.jpg"
          alt="myImage"
        />
      </div>
      <div className="bg-gradient-to-t from-black absolute h-[10vh] w-[40vw] lg:w-[20vw] lg:right-[10vw] ml-[40vw] lg:bottom-[17vh] md:bottom-[45vh] md:right-[10vw] bottom-[49vh] hidden lg:block"></div>
    </div>
  );
};

export default HeroSection;

// #6366F1
// #5154f0
