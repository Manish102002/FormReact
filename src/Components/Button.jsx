

const Button = (props  ) => {
  const {icon,text, onClick} = props;
  return (
    <button onClick={onClick} className=" flex justify-center text-center items-center gap-3 lg:w-[16vw] w-34 p-3 md:w-[200px] md:p-3 sm:p-3 py-3 cursor-pointer lg:text-md md:text-sm sm:text-[10px] font-semibold bg-black text-white rounded">
        {icon}{text} 
    </button>
  )
}

export default Button