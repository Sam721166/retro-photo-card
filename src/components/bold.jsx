import React, { useState } from 'react'
import { FaItalic } from "react-icons/fa";
import { HiBold } from "react-icons/hi2";

function Bold({onChange, value}) {

    const [bold, setBold] = useState(false);
    const [italic, setItalic] = useState(false);
    const [underline, setUnderline] = useState(false);
    const [strike, setStrike] = useState(false);

    const [textColor, setTextColor] = useState("");


    const toggleBold = () => {
        document.documentElement.classList.toggle("boldtext");
        setBold(bold => !bold)
    }

    const toggleItalic = () => {
        document.documentElement.classList.toggle("italicText");
        setItalic(italic => !italic)
    }

    const toggleUnderline = () => {
        document.documentElement.classList.toggle("underlinetext");
        setUnderline(underline => !underline)
    }

    const toggleStrike = () => {
        document.documentElement.classList.toggle("strike");
        setStrike(strike => !strike)
    }



    const changeTextColor = () => {
        
        document.documentElement.classList.add("customText");
        setTextColor("customColor");
    };




  return (
    <div className='flex flex-col gap-3 justify-center items-center'>
        <div>
            <h1 className='text-2xl font-semibold mb-2'>Text Style</h1>
            <div className='rounded-lg w-70 h-15 flex items-center gap-4'>

                
                <button onClick={toggleBold} className={`rounded-lg border-3 size-11 text-3xl font-bold cursor-pointer active:scale-97 flex justify-center items-center transition-all duration-100
                    ${bold  ? "bg-black text-white hover:bg-neutral-800 hover:text-white outline-3 outline-black" : "hover:bg-neutral-200 "}`}>
                    <HiBold/>
                </button>



                <button onClick={toggleItalic} className={`rounded-lg border-3 size-11 text-3xl font-mono cursor-pointer active:scale-97 flex justify-center items-center hover:bg-neutral-200 transition-all duration-100 italic
                    ${italic  ? "bg-black text-white hover:bg-neutral-800 hover:text-white outline-3 outline-black" : "hover:bg-neutral-200 "}`}>
                    I
                </button>




                <button onClick={toggleUnderline} className={`rounded-lg border-3 size-11 text-2xl font-semibold cursor-pointer active:scale-97 flex justify-center items-center hover:bg-neutral-200 transition-all duration-100 underline
                    ${underline  ? "bg-black text-white hover:bg-neutral-800 hover:text-white outline-3 outline-black" : "hover:bg-neutral-200 "}`}>
                    U
                </button>



                <button onClick={toggleStrike} className={`rounded-lg border-3 size-11 text-3xl cursor-pointer active:scale-97 flex justify-center items-center hover:bg-neutral-200 transition-all duration-100 line-through
                    ${strike  ? "bg-black text-white hover:bg-neutral-800 hover:text-white outline-3 outline-black" : "hover:bg-neutral-200 "}`}>
                    S
                </button>




                <div className='relative group '>
                    <button onClick={changeTextColor} className={`relative z-10 border-3 overflow-hidden rounded-lg size-11 flex justify-center items-center
                    `}>

                        <input 
                        type="color" 
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        className={` absolute z-5 opacity-100 cursor-pointer rounded-full size-50 translate-x-10 -translate-y-15 border-none outline-none 
                        `} />
                    
                        
                    </button>


                    <span className='absolute -top-8 left-1/2 -translate-x-1/2 
                    bg-black text-white text-xs px-2 py-1 rounded
                    opacity-0 group-hover:opacity-100 transition'>color
                    </span>
                
                </div>

            </div>
        </div>
    </div>
  )
}

export default Bold