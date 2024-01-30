import Button from "./Button"
import { MdOutlineMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";

const Hero = () => {

    const viaCall = ()=>{
        alert("rukoo jara sabar karo");
    }

    const viaSupport = ()=>{
        alert("ok wait")
    }

    const submit = (event)=>{
        event.preventDefault();
        console.log(event);
        form.reset();
    };



  return (
    <div>
        <div className=" flex flex-col items-center lg:flex lg:items-start md:flex sm:flex sm:items-center lg:px-28 md:px-28 sm:px-16 px-8 pt-4">
            <h1 className=" font-extrabold lg:text-6xl md:text-6xl sm:text-4xl text-4xl">CONTACT US</h1>
            <h5 className=" w-[70vw] pt-5">LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA.</h5>
        </div>


        <div className="flex items-center justify-center flex-wrap lg:flex lg:flex-row flex-col-reverse gap-14 mb-7">

            <div className=" pl-30 md:pl-10 pt-9 flex flex-col gap-5 mr-15">

                <div className="flex items-center gap-3 ">
                    <Button onClick={viaSupport}  icon={<MdOutlineMessage />} text="VIVA SUPPORT CHAT" />
                    <Button onClick={viaCall} icon={<IoMdCall />} text="CALL"/>
                </div>

                <button className="flex text-center border lg:w-[33vw] md:w-[33vw]   ml-0 mt-3 py-1 font-semibold px-2 gap-3 rounded border-black items-center"><MdOutlineMessage/>Viva Email Form</button>

        <form onSubmit={submit} name="form" className=" flex flex-col gap-5">
                
                <fieldset className=" relative">
                    <legend className=" absolute bottom-5 p-[1px] font-semibold bg-white left-3">Name</legend>
                    <input className="border-black font-semibold border lg:w-[33vw] md:w-[33vw] h-9 rounded" type="text" />
                </fieldset>

                <fieldset className=" relative">
                    <legend className=" absolute bottom-5 p-1 font-semibold bg-white left-3">E-Mail</legend>
                    <input className="border-black font-semibold border lg:w-[33vw] md:w-[33vw] h-9 rounded" type="email" name="" id="" />
                </fieldset>

                <fieldset className=" relative">
                    <legend className=" absolute bottom-[1.8vw] p-1 font-semibold bg-white left-3">Text</legend>
                    <input className="border-black font-semibold  lg:w-[33vw]  h-8 border rounded" name="" id="" cols="30" rows="10"></input>
                </fieldset>

                <div className=" ml-60"><Button  text="Sumbit"/></div>

                </form>
            </div>

            <img src="./Images/svgg.svg" className=" -mt-18 mr-50 w-[450px] h-[px] items-start" alt="tools" />
        </div>
    </div>
  )
}

export default Hero