import Button from "./Button";
import { GoHome } from "react-icons/go";
import { RiBuilding3Line } from "react-icons/ri";
import { CiBookmarkPlus } from "react-icons/ci";

function Navbar() {
  return (
    <div className="flex justify-between items-center px-8 py-4 bg-white">
      {/* Logo Section */}
      <header>
        <h3 className="font-reenie text-3xl">
          <span className="text-4xl text-[#0b997f]">B</span>rand
        </h3>
      </header>

      {/* Menu Section */}
      <div className="flex gap-10 items-center text-[#004642] font-medium font-edu">
        <p className="flex items-center gap-2 cursor-pointer hover:text-[#0b997f] transition duration-300">
          <GoHome className="text-xl text-[#0b997f] hover:scale-110 transition-transform duration-300" />
          Home
        </p>
        <p className="flex items-center gap-2 cursor-pointer hover:text-[#0b997f] transition duration-300">
          <RiBuilding3Line/> Company
        </p>
        <p className="cursor-pointer hover:text-[#0b997f] transition duration-300">
          Career
        </p>
        <p className="flex items-center gap-2 cursor-pointer hover:text-[#0b997f] transition duration-300">
          <CiBookmarkPlus/> About Us
        </p>
      </div>

      {/* Button Section */}
      <Button btntext="Join" fontname="font-edu" />
    </div>
  );
}

export default Navbar;
