import { experiences } from "../constants"
import { useState } from "react"
import {motion} from 'framer-motion'

function Experiences({language}) {

  const [tab , setTab] = useState('experience-1');

  return (
    
      <section id="experiences" className="py-20 text-third  dark:bg-gray-800 dark:text-gray-100">

        {/* Here goes the Experiences Text and some info. */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true , amount: 0.5 }}
          transition={{ duration:0.5}}
          variants={{
            hidden: { opacity: 0 , y: 50 },
            visible: { opacity: 1 , y: 0 }
          }}
          >
          <div className="flex-1 px-6 sm:px-16 flexCenter md:items-start md:text-start md:flex-row flex-col mb-5">
            <h1 className="heading2">
              {language ? 
                ( 
                  <p>Where I've Worked</p>
                ) 
                  : 
                (
                  <p>Donde he trabajado</p>
                )
              }
            </h1>
            <div className="w-full md:mt-0 mt-6 ">
              {language ? 
                (
                  <p className="paragraph  md:max-w-[450px] max-w-md mx-auto">English Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, adipisci aperiam!</p>
                )
                : 
                (
                  <p className="paragraph  md:max-w-[450px] max-w-md mx-auto">Español Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nobis assumenda blanditiis quae quod?</p>
                )
              }
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-5 p-4 md:p-8">
          {/* Here goes the tabs on de left side */}
          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true , amount: 0.5 }}
          transition={{ duration:0.5}}
          variants={{
            hidden: { opacity: 0 , x: -50 },
            visible: { opacity: 1 , x: 0 }
          }}
          >
            <div className="flex justify-center px-4 col-span-full md:col-span-1 md:flex-col md:justify-start md:items-start">
              {experiences.map((exp, index)=>(
                <button key={index} 
                    onClick={()=> setTab(exp.id)}
                    className={`p-2 border-b-2 md:border-l-2 md:border-b-0 md:py-3 ${tab === exp.id ? 'border-emerald-900 dark:border-gray-300  dark:text-gray-400' : ''} `}>
                  {language ? exp.nameJobEn : exp.nameJobEs}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Here goes the content of eacj tab */}
          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true , amount: 0.5 }}
          transition={{ delay:0.2, duration:0.5}}
          variants={{
            hidden: { opacity: 0 , x: -50 },
            visible: { opacity: 1 , x: 0 }
          }}
          >
            <div className=" text-center sm:grid-cols-2 col-span-full md:col-span-4 md:text-left">
              {experiences.map((exp, index)=>(
                <div key={index} className={`flex flex-col items-center justify-center  md:justify-start md:items-start ${tab === exp.id ? '' : 'hidden'} `}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 dark:text-violet-400">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                  </svg>
                  <h5 className="text-xl font-semibold">{language ? exp.positionEn : exp.positionEs}</h5>
                  <p>{language ? exp.datesEn : exp.datesEs}</p>
                  <div>
                    <ul>
                      {exp.roles.map((rol,index)=>(
                        <li key={index}>{language ? rol.descriptionEn : rol.descriptionEs}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>
  )
}

export default Experiences