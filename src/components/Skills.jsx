import {motion} from 'framer-motion'
import SkillCard from "./SkillCard"
import { skills } from "../constants"

function Skills({language}) {
  return (
    <section id="skills" className="flex flex-col py-20">
      {/* Here goes part of the title SKILLS and some texte */}
      <div className='flex-1 px-6 sm:px-16 flexCenter md:items-start md:text-start md:flex-row flex-col mb-5'>
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
            <p >ESPAÑOL Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, tempore.</p>
            ):(
            <p >ENGLISH Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, deleniti modi.</p>
          )}

          
        </p>
        </div>
      </div>
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