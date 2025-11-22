import React, { useState } from 'react'

function Bgcolor({onChange, value}) {

    const [color, setColor] = useState("");

  
    const changeColor = (newColor) => {
        document.documentElement.classList.remove(
        "yellow",
        "sky",
        "pink",
        "green",
        "red",
        "indigo",
        "neutral",
        "purple",
        "orange",
        "custom",
        );
        document.documentElement.classList.add(newColor);
        setColor(newColor);
    };

    
  return (
    <div className='flex flex-col'>
        <h1 className='font-semibold text-2xl flex mb-2'>Colors</h1>

        <div className='rounded-lg w-70 h-auto bg-white p-3 flex justify-center items-center gap-2.5 flex-wrap border-2 border-neutral-300 '>

            <div className='relative group'>
                <button onClick={()=> changeColor("yellow")} className={`size-10 rounded-full bg-yellow-300 active:scale-97 cursor-pointer   ${color === "yellow" ? "ring-2 ring-black ring-offset-1" : ""}`}>
                </button>

                <span className='absolute -top-8 left-1/2 -translate-x-1/2 
                    bg-black text-white text-xs px-2 py-1 rounded
                    opacity-0 group-hover:opacity-100 transition'>Yellow
                </span>
            </div>
            

            <div className='relative group'>
                <button onClick={()=> changeColor("sky")} className={`size-10 rounded-full bg-sky-300 active:scale-97 cursor-pointer 
                     ${color === "sky" ? "ring-2 ring-black ring-offset-1" : ""}`}></button>

                <span className='absolute -top-8 left-1/2 -translate-x-1/2 
                    bg-black text-white text-xs px-2 py-1 rounded
                    opacity-0 group-hover:opacity-100 transition'>Sky
                </span>
            </div>
                

            <div className='relative group'>
                <button onClick={()=> changeColor("pink")} className={`size-10 rounded-full bg-pink-400 active:scale-97 cursor-pointer
                     ${color === "pink" ? "ring-2 ring-black ring-offset-1" : ""}`}></button>

                <span className='absolute -top-8 left-1/2 -translate-x-1/2 
                    bg-black text-white text-xs px-2 py-1 rounded
                    opacity-0 group-hover:opacity-100 transition'>Pink
                </span>
            </div>
                

            <div className='relative group'>
                <button onClick={()=> changeColor("green")} className={`size-10 rounded-full bg-green-400 active:scale-97 cursor-pointer
                     ${color === "green" ? "ring-2 ring-black ring-offset-1" : ""}`}></button>

                <span className='absolute -top-8 left-1/2 -translate-x-1/2 
                    bg-black text-white text-xs px-2 py-1 rounded
                    opacity-0 group-hover:opacity-100 transition'>Green
                </span>
            </div>
                

            <div className='relative group'>
                <button onClick={()=> changeColor("red")} className={`size-10 rounded-full bg-red-400 active:scale-97 cursor-pointer
                     ${color === "red" ? "ring-2 ring-black ring-offset-1" : ""}`}></button>


                <span className='absolute -top-8 left-1/2 -translate-x-1/2 
                    bg-black text-white text-xs px-2 py-1 rounded
                    opacity-0 group-hover:opacity-100 transition'>Red
                </span>
            </div>
            

            <div className='relative group'>
                <button onClick={()=> changeColor("indigo")} className={`size-10 rounded-full bg-indigo-400 active:scale-97 cursor-pointer
                     ${color === "indigo" ? "ring-2 ring-black ring-offset-1" : ""}`}></button>

                <span className='absolute -top-8 left-1/2 -translate-x-1/2 
                    bg-black text-white text-xs px-2 py-1 rounded
                    opacity-0 group-hover:opacity-100 transition'>Indigo
                </span>
            </div>
            

            <div className='relative group'>
                <button onClick={()=> changeColor("neutral")} className={`size-10 rounded-full bg-neutral-400 active:scale-97 cursor-pointer
                     ${color === "neutral" ? "ring-2 ring-black ring-offset-1" : ""}`}></button>

                <span className='absolute -top-8 left-1/2 -translate-x-1/2 
                    bg-black text-white text-xs px-2 py-1 rounded
                    opacity-0 group-hover:opacity-100 transition'>Gray
                </span>
            </div>
            

            <div className='relative group'>
                <button onClick={()=> changeColor("purple")} className={`size-10 rounded-full bg-purple-400 active:scale-97 cursor-pointer
                     ${color === "purple" ? "ring-2 ring-black ring-offset-1" : ""}`}></button>

                <span className='absolute -top-8 left-1/2 -translate-x-1/2 
                    bg-black text-white text-xs px-2 py-1 rounded
                    opacity-0 group-hover:opacity-100 transition'>Purple
                </span>
            </div>
            

            

            <div className='relative group'>
                <button onClick={()=> changeColor("orange")} className={`size-10 rounded-full bg-orange-400 active:scale-97 cursor-pointer 
                 ${color === "orange" ? "ring-2 ring-black ring-offset-1" : ""}
                 `}></button>

                <span className='absolute -top-8 left-1/2 -translate-x-1/2 
                    bg-black text-white text-xs px-2 py-1 rounded
                    opacity-0 group-hover:opacity-100 transition'>Orange
                </span>
            </div>
            

            <div className='relative group '>
                <button onClick={()=> changeColor("custom")} className={`relative z-10 overflow-hidden rounded-full size-10 flex justify-center items-center
                ${color === "custom" ? "ring-2 ring-black " : ""}`}>

                    <input 
                    type="color" 
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className={` absolute z-5 opacity-0 cursor-pointer rounded-full size-50 translate-x-10 translate-y-15 border-none outline-none 
                    `} />

                    <img src="color-wheel.png" alt="" className='absolute inset-0 z-0 size-full scale-120  rounded-full ' />
                </button>


                <span className='absolute -top-8 left-1/2 -translate-x-1/2 
                    bg-black text-white text-xs px-2 py-1 rounded
                    opacity-0 group-hover:opacity-100 transition'>Custom
                </span>
                
            </div>
            
        </div>
    </div>
  )
}

export default Bgcolor