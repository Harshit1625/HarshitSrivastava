"use client";
import { FC } from "react";
import Template from "./Template";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Expertise: FC = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#first",
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        duration: 0.5,
        ease: "back",
        opacity: 1,
        scrollTrigger: {
          trigger: "#third",
          start: "top bottom",
          end: "top 70%",
          scrub: 1,
        },
      }
    );
    gsap.fromTo(
      "#third",
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        duration: 1,
        ease: "back",
        opacity: 1,
        scrollTrigger: {
          trigger: "#third",
          start: "top 90%",
          end: "top 55%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      "#tailwind",
      {
        y: -50,
        opacity: 0,
      },
      {
        y: 0,
        duration: 1,
        ease: "back",
        opacity: 1,
        scrollTrigger: {
          trigger: "#third",
          start: "top bottom",
          end: "top 90%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      "#typescript",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        duration: 1,
        ease: "back",
        opacity: 1,
        scrollTrigger: {
          trigger: "#third",
          start: "top bottom",
          end: "top 90%",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <>
      <Template page="SKILLS">
        <div className="flex items-center justify-center">
          <div className="border w-[21.4vw] lg:w-[6.5vw] mr-8 md:w-[11vw] md:mr-[8.2vw] lg:mr-[7vh] sm:w-[15vw] sm:mr-[7vw]"></div>
        </div>
        <div className="flex overflow-hidden flex-col h-[50vh] justify-center items-center">
          <div
            id="first"
            className="flex flex-row w-full justify-between lg:justify-evenly "
          >
            <div className=" flex flex-row lg:w-[13vw] md:w-[15vw] sm:w-[20vw] transition-all ease-in-out duration-300 cursor-pointer hover:border-indigo-800 hover:rounded-xl border-2 rounded-br-xl border-dotted items-center justify-center pr-2">
              <img
                className="h-[30px] w-[30px] mt-1"
                src="/src/assets/MongoDb.png"
                alt=""
              />
              <h1 className="mt-2  font-bold">MongoDB</h1>
            </div>
            <div className="flex flex-row lg:w-[13vw] md:w-[15vw] sm:w-[20vw] transition-all ease-in-out duration-300 cursor-pointer hover:border-indigo-800 hover:rounded-xl border-2 rounded-br-xl rounded-bl-xl border-dotted items-center justify-center pl-2 pr-2">
              <img
                className="lg:h-[30px] lg:w-[30px] h-[27px] w-[27px]"
                src="/src/assets/Express.png"
                alt=""
              />
              <h1 className="mt-2 ml-2 font-bold">Express</h1>
            </div>
            <div className="flex flex-row lg:w-[13vw] md:w-[15vw] sm:w-[20vw] transition-all ease-in-out duration-300 cursor-pointer hover:border-indigo-800   items-center justify-center hover:rounded-xl border-2 rounded-bl-xl border-dotted pl-2 pr-3 pt-2 pb-2">
              <img
                className="h-[30px] w-[30px]"
                src="/src/assets/React.png"
                alt=""
              />
              <h1 className="mt-2 ml-2 font-bold">React</h1>
            </div>
          </div>

          {/* Second Line */}
          <div className="flex flex-row w-full justify-evenly mt-9">
            <div
              id="tailwind"
              className="flex flex-row lg:w-[13vw] md:w-[15vw] sm:w-[23vw] transition-all ease-in-out duration-300 cursor-pointer hover:border-indigo-800 pl-2 pt-2 pb-2 border rounded-xl items-center justify-center pr-2"
            >
              <img
                className="h-[30px] w-[30px] mt-1"
                src="/src/assets/Tailwind.png"
                alt=""
              />
              <h1 className="mt-2 ml-3 font-bold">TailwindCSS</h1>
            </div>
            <div
              id="typescript"
              className="flex flex-row lg:w-[13vw] md:w-[15vw] sm:w-[20vw] transition-all ease-in-out duration-300 cursor-pointer hover:border-indigo-800 pl-2 pt-2 pb-2 border rounded-xl items-center justify-center pr-3"
            >
              <img
                className="h-[30px] w-[30px]"
                src="/src/assets/Typescript.png"
                alt=""
              />
              <h1 className="mt-2 ml-2 font-bold">TypeScript</h1>
            </div>
          </div>

          {/* Third Line */}
          <div
            id="third"
            className="flex flex-row w-full justify-between lg:justify-evenly mt-9"
          >
            <div className="flex flex-row md:w-[15vw] lg:w-[13vw] sm:w-[20vw] transition-all ease-in-out duration-300 cursor-pointer hover:border-indigo-800  hover:rounded-xl border-2 rounded-tr-xl border-dotted items-center justify-center pr-2">
              <img
                className="h-[30px] w-[30px] mt-1"
                src="/src/assets/Node .png"
                alt=""
              />
              <h1 className="mt-2  font-bold">NodeJS</h1>
            </div>
            <div className="flex flex-row lg:w-[13vw] md:w-[15vw] sm:w-[20vw] transition-all ease-in-out duration-300 cursor-pointer hover:border-indigo-800 hover:rounded-xl border-2 rounded-tr-xl rounded-tl-xl border-dotted items-center justify-center pr-2">
              <img
                className="h-[30px] w-[30px]"
                src="/src/assets/Next.png"
                alt=""
              />
              <h1 className="mt-2 ml-2 font-bold">NextJS</h1>
            </div>
            <div className="flex flex-row md:w-[15vw] lg:w-[13vw] sm:w-[20vw] transition-all ease-in-out duration-300 cursor-pointer hover:border-indigo-800  items-center justify-center  hover:rounded-xl border-2 rounded-br-xl border-dotted pl-4 pr-4 pt-2 pb-2">
              <img
                className="h-[30px] w-[30px]"
                src="/src/assets/Redux.png"
                alt=""
              />
              <h1 className="mt-2 ml-2 font-bold">Redux</h1>
            </div>
          </div>
        </div>
      </Template>
    </>
  );
};

export default Expertise;