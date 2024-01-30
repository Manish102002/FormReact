import { IoMenu } from "react-icons/io5";

const Navigation = () => {
  return (
    <div className="flex justify-between items-center font-semibold text-center lg:px-20 md:px-16 ms:px-14 p-2 pt-4">

       <img src="./Images/logo.png" alt="" />

      <div className=" flex  gap-9">
        <a href="" className="hidden lg:block md:block sm:block">Home</a>
        <a href="" className="hidden lg:block md:block sm:block">About</a>
        <a href="" className="hidden lg:block md:block sm:block">Contact</a>
        <IoMenu className=" text-3xl  lg:hidden md:hidden sm:hidden  "/>
      </div>
      
    </div>
  )
}

export default Navigation