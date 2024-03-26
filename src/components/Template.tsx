import { FC, ReactNode } from "react";

interface ITemplateProps {
  children: ReactNode;
  page : string
}

const Template: FC<ITemplateProps> = ({ children , page }) => {
  return (
    <div className="p-[20px] flex flex-col lg:flex-col mt-[60px] lg:mt-0">
      <div className="lg:h-[6vh] mt-5 lg:mt-0 flex flex-col justify-center items-center">
        <h2 className="text-indigo-500 mr-[78px] lg:mr-0 tracking-widest text-[20px] font-bold w-[10vw]">
          {page}
        </h2>
      
      </div>
      {children}
    </div>
  );
};

export default Template;
