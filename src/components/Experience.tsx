import Image from "next/image";
import Navbar from "../components/Navbar";
import { FaBookBookmark, FaCodeBranch, FaAws, FaSalesforce } from "react-icons/fa6";

export default function Experience() {
  return (
    <div className="overflow-x-auto flex space-x-4 justify-between p-4 text-black scrollbar-hide">
      <div className="ml-3 min-w-[300px] h-[160px] bg-white p-4 rounded-[40px] shadow-lg  hover:scale-105 transition-all duration-300 ">
        <div className="ml-3 mt-2">
          <div className="h-6 w-24 font-roboto text-sm mb-3 flex items-center justify-center text-white focus:outline-none duration-500 hover:text-bluemain hover:bg-white bg-gradient-to-r from-[#5088ea] to-[#224582] bg-opacity-100 rounded-full">
            2022 - 2026
          </div>
          <div className="flex"><FaBookBookmark className="mt-[1.5px]" /><h3 className="ml-2">Bachelor's Degree</h3></div>
          <p className="mt-2 text-[13px] text-gray-600">Kasetsart University</p>
          <p className="text-xl mt-[-2px] text-black">Computer Science</p>
        </div>
      </div>

      <div className="min-w-[300px] h-[160px] bg-white p-4 rounded-[40px] shadow-lg  hover:scale-105 transition-all duration-300">
        <div className="ml-3 mt-2">
          <div className="h-6 w-24 font-roboto text-sm mb-3 flex items-center justify-center text-white focus:outline-none duration-500 hover:text-bluemain hover:bg-white bg-gradient-to-r from-[#5088ea] to-[#224582] bg-opacity-100 rounded-full">
            April 2025
          </div>
          <div className="flex"><FaCodeBranch className="mt-[1.5px]" /><h3 className="ml-2">QA engineer SCB TechX</h3></div>
          <p className="mt-2 text-[13px] bg-gradient-to-b from-[#9f20ff] to-[#53008a] bg-clip-text text-transparent drop-shadow-[0px_0px_5px_#53008a]">
            SCB techX
          </p>
          <p className="text-xl mt-[-2px] text-black">QA engineer internship</p>
        </div>
      </div>

      <div className="min-w-[300px] h-[160px] bg-white p-4 rounded-[40px] shadow-lg  hover:scale-105 transition-all duration-300">
        <div className="ml-3 mt-2">
          <div className="h-6 w-16 font-roboto text-sm mb-3 flex items-center justify-center text-white focus:outline-none duration-500 hover:text-bluemain hover:bg-white bg-gradient-to-r from-[#5088ea] to-[#224582] bg-opacity-100 rounded-full">
            2024
          </div>
          <div className="flex"><FaAws size={20} className="mt-[1.5px]" /> <h3 className="ml-2">AWS Academy</h3></div>
          <p className="mt-2 text-[13px] text-gray-700">cloud computing course</p>
          <p className="text-xl mt-[-2px] text-black">AWS Learner Lab</p>
        </div>
      </div>

      <div className="mr-3 min-w-[300px] h-[160px] bg-white p-4 rounded-[40px] shadow-lg  hover:scale-105 transition-all duration-300">
        <div className="ml-3 mt-2">
          <div className="h-6 w-16 font-roboto text-sm mb-3 flex items-center justify-center text-white focus:outline-none duration-500 hover:text-bluemain hover:bg-white bg-gradient-to-r from-[#5088ea] to-[#224582] bg-opacity-100 rounded-full">
            2025
          </div>
          <div className="flex"><FaSalesforce size={20} className="mt-[1.5px]" /><h3 className="ml-2">Salesforce Seminar</h3></div>
          <p className="mt-2 text-[13px] text-gray-700">Salesforce Singapore</p>
          <p className="text-xl mt-[-2px] text-black">Seminar on Salesforce</p>
        </div>
      </div>
    </div>
  );
}
