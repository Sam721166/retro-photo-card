
import { useRef, useState } from 'react'
import './App.css'
import { toPng } from 'html-to-image'

import { MdOutlineFileDownload } from "react-icons/md";
import { TbUpload } from "react-icons/tb";
import { RiResetLeftLine } from "react-icons/ri";

import Bgcolor from './components/bgcolor';
import Filter from './components/filter';

import { Analytics } from "@vercel/analytics/react"
import Bold from './components/bold';
import Link from './components/link';
import FontStyle from './components/fontstyle';



function App() {

  // all useRefs
  const dateRef = useRef()
  const titleRef = useRef()
  const imgBoxRef = useRef();

// all usestates
  const [image, setImage] = useState(null)
  const [title, setTitle] = useState('')
  const [date, setdate] = useState()

  const [filter, setFilter] = useState("");



  
  const [color, setColor] = useState("#ff0000")

  const [textColor, setTextColor] = useState("")
  const [font, setFont] = useState("sans-serif")


  
  // for darker color genaration of border for custom color
  function darkenColor(hex, percent) {
  let r = parseInt(hex.substring(1,3), 16);
  let g = parseInt(hex.substring(3,5), 16);
  let b = parseInt(hex.substring(5,7), 16);

  r = Math.floor(r * (1 - percent));
  g = Math.floor(g * (1 - percent));
  b = Math.floor(b * (1 - percent));

  return `rgb(${r}, ${g}, ${b})`;
}





// for image upload
  function handleUpload(e){
    e.preventDefault()
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result)
    };
    reader.readAsDataURL(file);
  }


// for reset
  function handleReset(e){
    e.preventDefault()
    setImage(null)
    setTitle('')
    setdate()
    
  

    dateRef.current.value = ''
    titleRef.current.value = ''


 
  }



  // for image download
 const handleDownload = () => {
  if (!imgBoxRef.current) return;

  toPng(imgBoxRef.current, { cacheBust: true, pixelRatio: 4 })
    .then((dataUrl) => {
      const link = document.createElement("a");
      link.download = "card.png";
      link.href = dataUrl;
      link.click();
    });
};




  return (
    <>
    <Analytics/>
      <div className='flex selection:text-white selection:bg-black flex-col md:flex-row '>

        <div className='h-auto md:h-screen w-auto md:w-100 bg-neutral-100 flex flex-col items-center pt-15 pb-15 gap-5  order-2 md:order-1 md:overflow-y-auto no-scrollbar'>

          <div className='flex flex-col gap-2'>
            <h1 className='font-semibold text-2xl'>Title</h1>
            <form action="" >

              <input 
              value={title}
              onChange={(e) => setTitle(e.target.value)} 
              type="text" 
              className='border-3 rounded-md p-2.5 w-70 text-lg font-semibold' 
              placeholder="What’s on your mind?"
              maxLength={50}
              ref={titleRef} />
            </form>
          </div>



          <div>
            <Bold  value={textColor} onChange={setTextColor}  />
          </div>

          <div>
            <h1 className='text-2xl font-semibold mb-2'>Font Style</h1>
            <FontStyle selectedFont={font} onFontChange={setFont} />
          </div>


          <div className='flex flex-col gap-2'>
            <h1 className='font-semibold text-2xl'>Date</h1>
            <form action=""  onClick={() => dateRef.current.showPicker()} >

              <input 
              onChange={(e) => {
                const value = e.target.value;
                const [y, m, d] = value.split("-");
                const formatted = `${d}.${m}.${y}`; 
                setdate(formatted);
              }} 
              type="date" 
              onFocus={(e) => e.target.blur()}
              className='border-3 rounded-md p-2.5 w-70 text-lg font-semibold selection:bg-none'
              
              ref={dateRef}
            />

            </form>
          </div>

          <div>
            
            <Bgcolor  value={color} onChange={setColor} />

          </div>

          <div>

            <Filter  onFilterChange={setFilter}/>
            
          </div>

        </div>

        <div className='sticky    h-screen w-auto flex-1 flex flex-col justify-center items-center md:-mt-7 selection:text-white selection:bg-black  pt-10 pb-10 md:pb-0  order-1 md:order-2
        bg-[radial-gradient(circle,_#e5e7eb_1px,_transparent_1px)]
        bg-[size:10px_10px]
        '>


            <Link />


            <div ref={imgBoxRef} className='inline-block'>

              <div className='w-[300px] md:w-[320px] h-[370px] md:h-[400px] bg-[#e0f2fe] m-6 mb-10 rounded-lg shadow-lg border-2 border-[#7dd3fc] flex flex-col  hover:rotate-5 transition-all duration-400 px-5 pt-5 pb-4 overflow-hidden flex-wrap   relative



              yellow:bg-yellow-200 yellow:border-yellow-400
              
              sky:bg-sky-100 sky:border-sky-300
              
              green:bg-green-200 green:border-green-500
              
              pink:bg-rose-200 pink:border-rose-300
              
              red:bg-red-200 red:border-red-400
              
              indigo:bg-indigo-200 indigo:border-indigo-400
              
              neutral:bg-neutral-200 neutral:border-neutral-400
              
              purple:bg-purple-200 purple:border-purple-400
              
              teal:bg-teal-200 teal:border-teal-500
              
              orange:bg-orange-200 orange:border-orange-400
              
              
              custom:bg-[var(--customColor)] custom:border-[var(--customBorder)]
              
              '
              style={{
                "--customColor": color,
                "--customBorder": darkenColor(color, 0.35), // 35% darker of stored color
              }}
              >

                
                <div className=' relative w-full aspect-square rounded-sm  overflow-hidden '>
                  {image ?
                    (<img src={image} className='w-full h-full  rounded-xm object-cover 
                         
                       retro:filter 
                       retro:sepia-[100%]
                        retro:brightness-90 
                        retro:contrast-125
                         retro:saturate-170 
                         retro:hue-rotate-10
                       


                       sunny:filter 
                       sunny:brightness-100 
                       sunny:saturate-150 
                       sunny:contrast-100
                       


                       bw:filter 
                       bw:brightness-110 
                       bw:saturate-0 
                       bw:contrast-110 


                        tealOrange:filter 
                        tealOrange:brightness-100 
                        tealOrange:contrast-125 
                        tealOrange:saturate-125 
                        tealOrange:hue-rotate-[20deg]
  
                        
                        bright:brightness-[1.12] 
                        bright:contrast-[1.0]
                        bright:saturate-[1.45]
                        bright:sepia-[0.5]
                        bright:hue-rotate-[15deg] 


                        
                        

                      ' />) : null
                      
                  }

                    
                          
                     { filter === "cinematic" && 
                    (
                      <div>
                       <div className="absolute inset-0 bg-teal-300/30 mix-blend-color"></div>
                      <div className="absolute inset-0 bg-orange-500/20 mix-blend-soft-light backdrop-brightness-110 backdrop-contrast-125"></div>

                     
                      </div>
                    )
                  }
                  

                          

                  { filter === "sunlight" && 
                    (
                      <div>
                        <div className="absolute inset-0 bg-orange-400/40 mix-blend-soft-light"></div>
                        <div className="absolute inset-0 bg-yellow-200/20 mix-blend-screen"></div>
                      </div>
                    )
                  }




                  { filter === "tealOrange" && 
                    (
                      <div>
                        <div className='bg-green-500 absolute inset-0 mix-blend-soft-light'></div>
                        <div className='bg-red-400 absolute inset-0 mix-blend-soft-light'></div>
                      </div>
                    )
                  }
                    
                </div>

                <div className=' flex  flex-wrap '>

                  <h1 className='mt-1 md:mt-2 font-semibold text-lg break-all 

                  boldtext:font-bold
                  italicText:italic
                  underlinetext:underline
                  strike:line-through

                  customText:text-[var(--customTextColor)] '

                  style={{
                    "--customTextColor": textColor,
                    fontFamily: font
                  }}
                  
                  >{title}</h1>
                </div>


                <div className='  w-full h-8 md:h-11 flex justify-end items-end'>
                  <p className='absolute bottom-4 right-5 mt-0 md:mt-2  text-sm text-[#777777] font-mono '>{date}</p>
                </div>
              </div>

            </div>

            
          <form action="" className='flex  flex-row gap-4 justify-center   items-center mb-4'>

            <input id='file' onChange={ handleUpload} accept="image/*" type="file" className='border-2 cursor-pointer rounded-md p-2 hidden'/>


              
              <button   onClick={handleReset}  className='border-2 py-2 w-35 flex justify-center items-center rounded-md text-black font-semibold mt-2  text-xl cursor-pointer bg-white hover:bg-neutral-200 transition-all duration-300 active:scale-95'>
                <RiResetLeftLine className='mr-2 '/>
                Reset</button>

              <label htmlFor='file' className='bg-black py-2.5 w-35 flex justify-center items-center  rounded-md text-xl text-white mt-2  cursor-pointer hover:bg-neutral-700 transition-all duration-300 active:scale-95'>
                <TbUpload className='mr-2'/>
                Upload</label>
          </form>
            
            <div>
                { image ? 
                  (<button  onClick={handleDownload} className='bg-black py-2.5 w-74 flex justify-center items-center  rounded-md text-xl text-white   cursor-pointer hover:bg-neutral-700 transition-all duration-300 active:scale-95 '>
                    <MdOutlineFileDownload className='mr-2 size-6'/>
                    Download</button>) : null
                
                 }
              
            </div>
        </div>
      </div>
    </>
  )
}

export default App
