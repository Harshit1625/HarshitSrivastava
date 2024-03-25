"use client";
import { FC } from "react";

function handleSkill() {
  window.scrollTo({
    top: 500,
    behavior: "smooth",
  });
}

function handleProject(){
  window.scrollTo({
    top : 1050 , 
    behavior : "smooth"
  })
}
function handleContact(){
  window.scrollTo({
    top : 1500 , 
    behavior : "smooth"
  })
}

const Header: FC = () => {
  return (
    <div className="lg:h-[6vh]">
      <ul className="flex justify-between p-5 font-bold cursor-pointer">
        <li>
        <img
            className="lg:h-[8vh] sm:w-[12vw] lg:w-[12vw] h-[12vh] w-[15vw] object-cover"
            src="/src/assets/Project image .png"
            alt="signature"
          />
        </li>
        <button onClick={handleSkill}>
          <li className="hover:opacity-100 opacity-70 transition ease-in-out">
            Skills
          </li>
        </button>

        <button onClick={handleProject}>
          <li className="hover:opacity-100 opacity-70 transition ease-in-out">
            Projects
          </li>
        </button>

        <button onClick={handleContact}>
          <li className="hover:opacity-100 opacity-70 transition ease-in-out">
            Contact
          </li>
        </button>
        
      </ul>
    </div>
  );
};

export default Header;
