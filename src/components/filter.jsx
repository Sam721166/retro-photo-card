import React from 'react'
import { useState } from 'react';


function Filter({ onFilterChange }) {


    const [filter, setFilter] = useState("");
    
      
        const changeFilter = (newFilter) => {
            document.documentElement.classList.remove(
            "retro",
            "sunny",
            "original",
            "bw",
            "tealOrange",
            "sunlight",
            "bright",
            "cinematic",
            );
            document.documentElement.classList.add(newFilter);
            setFilter(newFilter);
            onFilterChange(newFilter)
        };


  return (
    <div className='flex flex-col justify-center'>
        <h1 className='text-xl mb-2 font-[intermed]'>Filters</h1>

        <div className='rounded-lg w-70 h-auto bg-white p-4 flex justify-start items-center gap-4 flex-wrap border border-zinc-500 '>

            

            <div className='relative group'>
                <button onClick={()=> changeFilter("original")} className={`size-12 rounded-full bg-[#ffc693] active:scale-97 cursor-pointer overflow-hidden   ${filter === "original" ? "ring-2 ring-black ring-offset-1" : ""}`}>
                    
                    <img src="original.png" alt="" className='w-auto h-full object-right object-cover' />
                </button>

                <span className='absolute -top-8 left-1/2 -translate-x-1/2 
                    bg-black text-white text-xs px-2 py-1 rounded
                    opacity-0 group-hover:opacity-100 transition'>Original
                </span>
            </div>
            


            <div className='relative group'>
                <button onClick={()=> changeFilter("retro")} className={`size-12 rounded-full bg-[#8b4f008b] active:scale-97 cursor-pointer overflow-hidden  ${filter === "retro" ? "ring-2 ring-black ring-offset-1" : ""}`}>
                
                <img src="retro.png" alt="" className='w-auto h-full object-right object-cover' />
                </button>

                <span className='absolute -top-8 left-1/2 -translate-x-1/2 
                    bg-black text-white text-xs px-2 py-1 rounded
                    opacity-0 group-hover:opacity-100 transition'>Retro
                </span>
            </div>
            

            

            <div className='relative group'>
                <button onClick={()=> changeFilter("sunny")} className={`size-12 rounded-full bg-[#ffb700] active:scale-97 cursor-pointer overflow-hidden  ${filter === "sunny" ? "ring-2 ring-black ring-offset-1" : ""}`}>

                <img src="sunny.png" alt="" className='w-auto h-full object-right object-cover' />
                </button>

                <span className='absolute -top-8 left-1/2 -translate-x-1/2 
                    bg-black text-white text-xs px-2 py-1 rounded
                    opacity-0 group-hover:opacity-100 transition'>Sunny
                </span>
            </div>
            



            <div className='relative group'>
                <button onClick={()=> changeFilter("bw")} className={`size-12 rounded-full bg-[#000000] active:scale-97 cursor-pointer overflow-hidden  ${filter === "bw" ? "ring-2 ring-black ring-offset-1" : ""}`}>
                
                <img src="bw.png" alt="" className='w-auto h-full object-left object-cover ' />
                </button>

                <span className='absolute -top-8 left-1/2 -translate-x-1/2 
                    bg-black text-white text-xs px-2 py-1 rounded
                    opacity-0 group-hover:opacity-100 transition'>B&W
                </span>
            </div>



            <div className='relative group'>
                <button onClick={()=> changeFilter("tealOrange")} className={`size-12 rounded-full bg-[#000000] active:scale-97 cursor-pointer overflow-hidden  ${filter === "tealOrange" ? "ring-2 ring-black ring-offset-1" : ""}`}>
                
                <img src="teal.png" alt="" className='w-auto h-full object-left object-cover ' />
                </button>

                <span className='absolute -top-8 left-1/2 -translate-x-1/2 
                    bg-black text-white text-xs px-2 py-1 rounded
                    opacity-0 group-hover:opacity-100 transition'>Teal
                </span>
            </div>



            <div className='relative group'>
                <button onClick={()=> changeFilter("sunlight")} className={`size-12 rounded-full bg-[#000000] active:scale-97 cursor-pointer overflow-hidden  ${filter === "sunlight" ? "ring-2 ring-black ring-offset-1" : ""}`}>
                
                <img src="sunlight.png" alt="" className='w-auto h-full object-left object-cover ' />
                </button>

                <span className='absolute -top-8 left-1/2 -translate-x-1/2 
                    bg-black text-white text-xs px-2 py-1 rounded
                    opacity-0 group-hover:opacity-100 transition'>Sunlight
                </span>
            </div>


            <div className='relative group'>
                <button onClick={()=> changeFilter("bright")} className={`size-12 rounded-full bg-[#000000] active:scale-97 cursor-pointer overflow-hidden  ${filter === "bright" ? "ring-2 ring-black ring-offset-1" : ""}`}>
                
                <img src="bright.png" alt="" className='w-auto h-full object-left object-cover ' />
                </button>

                <span className='absolute -top-8 left-1/2 -translate-x-1/2 
                    bg-black text-white text-xs px-2 py-1 rounded
                    opacity-0 group-hover:opacity-100 transition'>Bright
                </span>
            </div>
            

            <div className='relative group'>
                <button onClick={()=> changeFilter("cinematic")} className={`size-12 rounded-full bg-[#000000] active:scale-97 cursor-pointer overflow-hidden  ${filter === "cinematic" ? "ring-2 ring-black ring-offset-1" : ""}`}>
                
                <img src="cinematic.png" alt="" className='w-auto h-full object-left object-cover ' />
                </button>

                <span className='absolute -top-8 left-1/2 -translate-x-1/2 
                    bg-black text-white text-xs px-2 py-1 rounded
                    opacity-0 group-hover:opacity-100 transition'>Cinematic
                </span>
            </div>
            


        </div>
    </div>
  )
}

export default Filter