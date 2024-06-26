import { FC } from "react";
import Template from "./Template";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Projects: FC = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".project",
      {
        y: 250,
        opacity: 0,
      },
      {
        y: 0,
        ease: "back",
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".project",
          start: "top bottom",
          end: "bottom 75%",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <div>
      <Template page="PROJECTS">
        {/* <div className="flex items-center justify-center">
          <div className="border w-[44vw] ml-[10vw] lg:w-[10.2vw] lg:mr-[10vw] md:w-[14.6vh] md:mr-[12vw] sm:w-[23vw] sm:mr-[10vw] mt-1"></div>
        </div> */}
        <div className="flex lg:flex-row mt-[10vh] mb-[10vh] flex-col justify-evenly lg:mt-[8vh]">
          <div className="flex flex-col lg:mr-5 p-7 border-2 border-double rounded-tr-xl rounded-bl-xl transition-all duration-250 ease-in-out bg-gradient-to-b from-indigo-950 project">
            <img
              src="/ChatZone.png"
              className="lg:h-35 lg:w-80"
              alt="ChatZone"
            />
            <h1 className="text-[16px] ml-1 mt-3 font-bold">
              ChatZone - A Chatting App
            </h1>
            <div className="border border-indigo-600 mt-2 lg:w-[37vh]"></div>
            <p className="font-semibold lg:w-[39vh] pt-3 pb-3">
              A chat app where you can authentiate yourself with google , add
              friends , chat with them in realtime.Also comes with a incoming
              requests section.
            </p>
            <h1 className="font-bold text-[15px] ml-1 mt-2">
              Technologies Used :-
            </h1>
            <ul className="mt-2 pt-2">
              <li className="text-[15px] font-bold mb-2 flex">
                <span>
                  <svg
                    fill="#FFFFFF"
                    className="h-4 w-4 mt-2 mr-1"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#FFFFFF"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>point</title>{" "}
                      <path d="M16 4.686l-11.314 11.314 11.314 11.314 11.314-11.314-11.314-11.314zM10.343 16l5.657-5.657 5.657 5.657-5.657 5.657-5.657-5.657z"></path>{" "}
                    </g>
                  </svg>
                </span>
                <h1 className="text-red-700">RedisDB</h1>
              </li>
              <li className="text-[15px] font-bold mb-2 flex">
                <span>
                  <svg
                    fill="#FFFFFF"
                    className="h-4 w-4 mt-2 mr-1"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#FFFFFF"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>point</title>{" "}
                      <path d="M16 4.686l-11.314 11.314 11.314 11.314 11.314-11.314-11.314-11.314zM10.343 16l5.657-5.657 5.657 5.657-5.657 5.657-5.657-5.657z"></path>{" "}
                    </g>
                  </svg>
                </span>
                <h1>NextJS</h1>
              </li>
              <li className="text-[15px] font-bold mb-2 flex">
                <span>
                  <svg
                    fill="#FFFFFF"
                    className="h-4 w-4 mt-2 mr-1"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#FFFFFF"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>point</title>{" "}
                      <path d="M16 4.686l-11.314 11.314 11.314 11.314 11.314-11.314-11.314-11.314zM10.343 16l5.657-5.657 5.657 5.657-5.657 5.657-5.657-5.657z"></path>{" "}
                    </g>
                  </svg>
                </span>
                <h1 className="text-blue-400">TypeScript</h1>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row mt-3 justify-between p-2">
              <a href="https://chatzone-app.vercel.app/">
                <button className="flex p-3 bg-indigo-800 items-center hover:bg-indigo-900 justify-center rounded-md lg:w-[15vh] w-full  mb-2 sm:mr-2 md:mr-2 lg:mr-2 sm:mb-2 md:mb-2 lg:mb-0 transition-all duration-250 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                    />
                  </svg>
                  <h1 className="ml-2">Launch</h1>
                </button>
              </a>
              <a href="https://github.com/Harshit1625/ChatApp">
                <button className="flex p-3 bg-indigo-800 items-center hover:bg-indigo-900 justify-center rounded-md  w-full  mb-2 sm:mr-2 md:mr-2 lg:mr-2 sm:mb-2 md:mb-2 lg:mb-0 transition-all duration-250 ease-in-out">
                  <img src="/github.svg" className="h-6 w-6" alt="" />
                  <h1 className="ml-2">Repository</h1>
                </button>
              </a>
            </div>
          </div>

          {/* Flyup */}
          <div className="flex flex-col p-7 lg:mr-5 mt-9 mb-9 lg:mt-0 lg:mb-0 border-2 border-double rounded-tr-xl rounded-bl-xl transition-all duration-250 ease-in-out bg-gradient-to-b from-indigo-950 project">
            <img src="/FlyUP.png" className="lg:h-35 lg:w-80" alt="FlyUp" />
            <h1 className="text-[16px] ml-1 mt-3 font-bold">
              FlyUp - A Travel Booking App
            </h1>
            <div className="border border-indigo-600 mt-2 lg:w-[37vh]"></div>
            <p className="font-semibold lg:w-[39vh] pt-3 pb-3">
              A travel booking app where you can plan your next travel.
            </p>
            <h1 className="font-bold text-[15px] ml-1 mt-2">
              Technologies Used :-
            </h1>
            <ul className="mt-2 pt-2">
              <li className="text-[15px] font-bold mb-2 flex">
                <span>
                  <svg
                    fill="#FFFFFF"
                    className="h-4 w-4 mt-2 mr-1"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#FFFFFF"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>point</title>{" "}
                      <path d="M16 4.686l-11.314 11.314 11.314 11.314 11.314-11.314-11.314-11.314zM10.343 16l5.657-5.657 5.657 5.657-5.657 5.657-5.657-5.657z"></path>{" "}
                    </g>
                  </svg>
                </span>
                <h1 className="text-green-700">MongoDB</h1>
              </li>
              <li className="text-[15px] font-bold mb-2 flex">
                <span>
                  <svg
                    fill="#FFFFFF"
                    className="h-4 w-4 mt-2 mr-1"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#FFFFFF"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>point</title>{" "}
                      <path d="M16 4.686l-11.314 11.314 11.314 11.314 11.314-11.314-11.314-11.314zM10.343 16l5.657-5.657 5.657 5.657-5.657 5.657-5.657-5.657z"></path>{" "}
                    </g>
                  </svg>
                </span>
                <h1>ExpressJS</h1>
              </li>
              <li className="text-[15px] font-bold mb-2 flex">
                <span>
                  <svg
                    fill="#FFFFFF"
                    className="h-4 w-4 mt-2 mr-1"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#FFFFFF"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>point</title>{" "}
                      <path d="M16 4.686l-11.314 11.314 11.314 11.314 11.314-11.314-11.314-11.314zM10.343 16l5.657-5.657 5.657 5.657-5.657 5.657-5.657-5.657z"></path>{" "}
                    </g>
                  </svg>
                </span>
                <h1 className="text-cyan-400">ReactJS</h1>
              </li>
              <li className="text-[15px] font-bold mb-2 flex">
                <span>
                  <svg
                    fill="#FFFFFF"
                    className="h-4 w-4 mt-2 mr-1"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#FFFFFF"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>point</title>{" "}
                      <path d="M16 4.686l-11.314 11.314 11.314 11.314 11.314-11.314-11.314-11.314zM10.343 16l5.657-5.657 5.657 5.657-5.657 5.657-5.657-5.657z"></path>{" "}
                    </g>
                  </svg>
                </span>
                <h1 className="text-green-400">NodeJS</h1>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row mt-3 justify-between p-2">
              <a href="https://www.linkedin.com/posts/harshit-srivastava-54b982277_hello-connections-hope-you-are-doing-great-activity-7176805497042345984-Mi_r?utm_source=share&utm_medium=member_desktop">
                <button className="flex p-3 bg-indigo-800 items-center hover:bg-indigo-900 justify-center rounded-md lg:w-[15vh] w-full  mb-2 sm:mr-2 md:mr-2 lg:mr-2 sm:mb-2 md:mb-2 lg:mb-0 transition-all duration-250 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                    />
                  </svg>
                  <h1 className="ml-2">Demo</h1>
                </button>
              </a>
              <a href="https://github.com/Harshit1625/Travel-Booking-App">
                <button className="flex p-3 bg-indigo-800 items-center hover:bg-indigo-900 justify-center rounded-md w-full  mb-2 sm:mr-2 md:mr-2 lg:mr-2 sm:mb-2 md:mb-2 lg:mb-0 transition-all duration-250 ease-in-out">
                  <img src="/github.svg" className="h-6 w-6" alt="" />
                  <h1 className="ml-2">Repository</h1>
                </button>
              </a>
            </div>
          </div>

          {/* Movix */}
          <div className="flex flex-col p-7 border-2 border-double rounded-tr-xl rounded-bl-xl transition-all duration-250 ease-in-out bg-gradient-to-b from-indigo-950 project">
            <img src="/Movix.png" className="lg:h-35 lg:w-80" alt="ChatZone" />
            <h1 className="text-[16px] ml-1 mt-3 font-bold">
              Movix - A Movie Review App
            </h1>
            <div className="border border-indigo-600 mt-2 lg:w-[37vh]"></div>
            <p className="font-semibold lg:w-[39vh] pt-3 pb-3">
              A movie reviewing app where you can view ratings , cast , trailer
              , release date , search movies by genre , search movies by
              category , sort your results and much more.{" "}
            </p>
            <h1 className="font-bold text-[15px] ml-1 mt-2">
              Technologies Used :-
            </h1>
            <ul className="mt-2 pt-2">
              <li className="text-[15px] font-bold mb-2 flex">
                <span>
                  <svg
                    fill="#FFFFFF"
                    className="h-4 w-4 mt-2 mr-1"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#FFFFFF"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>point</title>{" "}
                      <path d="M16 4.686l-11.314 11.314 11.314 11.314 11.314-11.314-11.314-11.314zM10.343 16l5.657-5.657 5.657 5.657-5.657 5.657-5.657-5.657z"></path>{" "}
                    </g>
                  </svg>
                </span>
                <h1 className="text-purple-600">Redux</h1>
              </li>
              <li className="text-[15px] font-bold mb-2 flex">
                <span>
                  <svg
                    fill="#FFFFFF"
                    className="h-4 w-4 mt-2 mr-1"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#FFFFFF"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>point</title>{" "}
                      <path d="M16 4.686l-11.314 11.314 11.314 11.314 11.314-11.314-11.314-11.314zM10.343 16l5.657-5.657 5.657 5.657-5.657 5.657-5.657-5.657z"></path>{" "}
                    </g>
                  </svg>
                </span>
                <h1 className="text-cyan-400">React</h1>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row mt-3 justify-between p-2">
              <a href="https://movix-beta-eight.vercel.app/">
                <button className="flex p-3 bg-indigo-800 items-center hover:bg-indigo-900 justify-center rounded-md lg:w-[15vh] w-full  mb-2 sm:mr-2 md:mr-2 lg:mr-2 sm:mb-2 md:mb-2 lg:mb-0 transition-all duration-250 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                    />
                  </svg>
                  <h1 className="ml-2">Launch</h1>
                </button>
              </a>
              <a href="https://github.com/Harshit1625/Movix">
                <button className="flex p-3 bg-indigo-800 items-center hover:bg-indigo-900 justify-center rounded-md w-full  mb-2 sm:mr-2 md:mr-2 lg:mr-2 sm:mb-2 md:mb-2 lg:mb-0 transition-all duration-250 ease-in-out">
                  <img src="/github.svg" className="h-6 w-6" alt="" />
                  <h1 className="ml-2">Repository</h1>
                </button>
              </a>
            </div>
          </div>
        </div>
      </Template>
    </div>
  );
};

export default Projects;
