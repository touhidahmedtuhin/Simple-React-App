function Button({btntext,fontname}) {
  return (
    <button className={`bg-[#0b997f] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#087a65] transition duration-300 cursor-pointer ${fontname}`}>
      {btntext}
    </button>
  );
}

export default Button 
