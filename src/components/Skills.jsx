import {motion} from 'framer-motion'
import SkillCard from "./SkillCard"
import { skills } from "../constants"
import {logo2g} from '../assets';

function Skills({language}) {
  return (
    <section id="skills" className="flex flex-col py-20 bg-gray-800 rounded-md">
      <div className=" z-0  md:order-2  justify-center  flexCenter  ">
            <motion.div 
              className="md:absolute hidden md:block"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true , amount: 0.5 }}
              transition={{delay: 0.5, duration:0.5}}
              variants={{
                hidden: { opacity: 0 , x: -50 },
                visible: { opacity: 1 , x: 0 }
              }}
            >
              <img src={logo2g} alt="profile" className="z-0 md:max-w-[450px] md:relative -left-[790px] top-48 transition duration-500 " />
            </motion.div>
        </div>
      {/* Here goes part of the title SKILLS and some texte */}
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
        <div className='z-10 flex-1 px-6 sm:px-16 flexCenter md:items-start md:text-start md:flex-row flex-col mb-5'>
          <h1 className={`heading2`}>
            {language ? (
              <p>Habilidades</p>
              ):(
              <p>My Skills</p>
            )}
          </h1>
          <div className="w-full md:mt-0 mt-6 ">
            <p className='paragraph  md:max-w-[450px] max-w-md mx-auto'>
            {language ? (
                <i >Estas son algunas de las tecnologías con las que he estado trabajando recientemente.</i>
                ):(
                <i >These are some of the technologies I've been working with recently.</i>
              )}
            </p>
          </div>
        </div>
      </motion.div>
      {/* Here goes the cards for de skills */}
      <div className="grid md:grid-cols-4 md:justify-center flex-col md:gap-2 marginX ">
          {skills.map((skill, index)=>(
        <motion.div
        className=""
        key={skill.id}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true , amount: 0.5 }}
        transition={{delay:(index+1)*0.1, duration:0.5}}
        variants={{
          hidden: { opacity: 0 , y: 50 },
          visible: { opacity: 1 , y: 0 }
        }}
        >
          <SkillCard  {...skill} language={language}/>
        </motion.div>
          ))}
      </div>

    </section>
  )
}

export default Skills