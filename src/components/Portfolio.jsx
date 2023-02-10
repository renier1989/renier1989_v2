import {motion} from 'framer-motion'
import { trips, todoapp, hoobank } from '../assets'
import { portfolio } from '../constants'


function Portfolio({language}) {
  return (
    <section id="portfolio" className="pt-48 pb-48 ">
      <div className="py-2 px-2 bg-second rounded-md">
      {/* Here goes part of the title SKILLS and some texte */}
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
        <div className='flex-1 px-6 sm:px-16 flexCenter md:items-start md:text-start md:flex-row flex-col mb-5 '>
          <h1 className={`heading2`}>
            {language ? (
              <p>Portafolio</p>
              ):(
              <p>My Portfolio</p>
            )}
          </h1>
          <div className="w-full md:mt-0 mt-6 ">
            <p className='paragraph  md:max-w-[450px] max-w-md mx-auto'>
            {language ? (
                <i>ESPAÑOL Lorem ipsum dolor sit amet consectetur.</i>
                ):(
                <i >ENGLISH Lorem ipsum dolor sit amet consectetur adipisicing elit.</i>
              )}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Here goes al the project I done */}
      <div className="flex justify-center">
        <motion.div
        className="sm:grid sm:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true , amount: 0.5 }}
        transition={{ duration:0.5}}
        variants={{
          hidden: {},
          visible: { 
            transition : {
              staggerChildren: 0.2 
            }
          }
        }}
        >

          {portfolio.map((port)=>(

            <motion.div 
            className={`${!port.visible ? 'hidden' : ''} relative`}
            key={port.id}
              variants={{
                hidden:{ opacity :0 , scale :0.8}, 
                visible:{ opacity :1 , scale :1}
              }}
            >
              {/* Here goes the overlay with the information of project when hovered */}
              <div className='absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-gray-500 z-30 flex flex-col justify-center items-center text-center p-16 text-white'>
                <p className="text-2xl ">
                  {port.titleEs}
                </p>
                <p className="mt-7">
                  {port.contentEs}
                </p>
                <span>
                  iconos de tecnologias
                </span>
                <div>
                  botones
                </div>
              </div>
              {/* Here goes the image of project */}
              <img src={port.img} alt={port.id}/>

            </motion.div>

          ))}
        </motion.div>
      </div>
      </div>
    </section>
  )
}

export default Portfolio