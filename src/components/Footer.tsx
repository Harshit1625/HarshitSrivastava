"use client";

import Template from "./Template";
import { useForm } from "@formspree/react";
import { FC } from "react";
import swal from "sweetalert";

const Footer: FC = () => {
  const [state, handleSubmit] = useForm("mbjnzrlp");
  if (state.succeeded) {
    swal(`Thank You !! We'll inform you as soon as possible!!`);
  }

  return (
    <div className="mt-[5vh]">
      <Template page="CONTACT">
      {/* <div className="flex items-center justify-center">
          <div className="border ml-8 w-[40vw] lg:w-[10vw] md:w-[16vw] md:mr-[5vw] sm:w-[21vw] sm:mr-[3.5vw] lg:mr-8 mt-1"></div>
        </div> */}
        <div className="flex mt-[5vh]">
          <form onSubmit={handleSubmit} className="sm:ml-[2vw]" method="post">
            <div>
              <div className="flex flex-row lg:ml-[2.5vw] md:ml-[4w]">
                <input
                  className="mr-[10px] w-[34vw] p-3 lg:pl-6 bg-transparent border rounded-md placeholder:text-white placeholder:opacity-30"
                  type="text"
                  name="first-name"
                  placeholder="First Name"
                  required
                />
                <input
                  className="lg:w-[34vw] w-[31vw] sm:w-[33.5vw] md:w-[38vw] p-3 lg:pl-6 bg-transparent truncate border rounded-md placeholder:text-white placeholder:opacity-30"
                  type="text"
                  name="last-name"
                  placeholder="Last Name"
                  required
                />
              </div>
              <div className="flex flex-row lg:ml-[2.5vw] md:ml-[4w] mt-4">
                <input
                  className="mr-[10px] w-[34vw] p-3 lg:pl-6 bg-transparent border rounded-md placeholder:text-white placeholder:opacity-30"
                  type="text"
                  name="email"
                  placeholder="Email Address"
                  required
                />
                <input
                  className="lg:w-[34vw] w-[31vw] sm:w-[33.5vw] md:w-[38vw] p-3 lg:pl-6 truncate bg-transparent border rounded-md placeholder:text-white placeholder:opacity-30"
                  type="text"
                  name="mobileNumber"
                  placeholder="Phone Number"
                  required
                />
              </div>

              <textarea
                placeholder="Type Your Message Here"
                className="w-[68.8vw] mt-4 lg:ml-[2.5vw] md:ml-[4w] lg:w-[68.8vw] md:w-[73vw] p-3 pl-6 bg-transparent border rounded-md placeholder:text-white placeholder:opacity-30"
                name="message"
                cols={30}
                rows={10}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="p-4 font-semibold w-[25vw] rounded-md bg-indigo-900 transition-all ease-in-out duration-200 hover:bg-transparent border ml-[44vw] lg:ml-[46.5vw] md:ml-[48vw]"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center mt-7 opacity-50 p-2 cursor-pointer text-indigo-90 font-bold">
          <h1>@2024 Harshit Srivastava</h1>
        </div>
      </Template>
    </div>
  );
};

export default Footer;
