import Button from "./Button";

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
      <div className="flex gap-8 text-[#004642] font-medium font-edu">
        <p className="cursor-pointer hover:text-[#0b997f] transition duration-300">Home</p>
        <p className="cursor-pointer hover:text-[#0b997f] transition duration-300">Company</p>
        <p className="cursor-pointer hover:text-[#0b997f] transition duration-300">Career</p>
        <p className="cursor-pointer hover:text-[#0b997f] transition duration-300">About Us</p>
      </div>

      {/* Button Section */}
      <Button btntext="Join" fontname="font-edu"/>
    </div>
  );
}


export default Navbar