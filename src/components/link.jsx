import React from 'react'
import { SiGithub } from "react-icons/si";


function Link() {
  return (
    <div className='absolute z-10 top-4 md:top-13 right-4 md:right-8  flex rounded-lg justify-center items-center gap-3 '>

        <button>
             <a href="https://github.com/Sam721166/retro-photo-card">
                <div className='border-2 rounded-lg p-1 bg-white hover:bg-neutral-200/80 transition-all duration-100 active:scale-97'>
                    <SiGithub className='size-5 md:size-7'/>
                </div>
            </a>
        </button>

        <button>
            <a href="https://buymeacoffee.com/samirande_">
                <div className='border-2 rounded-lg px-2 py-1  bg-white hover:bg-neutral-200 transition-all duration-100 active:scale-97'>
                    <img src="cofee.png" alt="" className='h-5 md:h-7  '/>
                </div>
            </a>
        </button>

        
    </div>
  )
}

export default Link