function Card({title,info}) {
  return (
    <div className="w-60 h-30 bg-[#F0F4F9] rounded-b-xl font-edu mt-8 ">
        <h2 className="text-center text-[#0b997f]">{title}</h2>
        <p className="text-center font-thin">{info}</p>
    </div>
  )
}

export default Card;
