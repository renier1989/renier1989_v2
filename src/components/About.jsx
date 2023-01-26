import {motion} from 'framer-motion'
import {renier, renierbg } from '../assets';
import { aboutInfo } from '../constants';
import SocialMediaIcons from './SocialMediaIcons';

function About(props) {
  return (
    <section id="about" className="flex md:flex-row flex-col md:py-72 py-32">

      {/* Here will go the image section */}
      <div className="md:order-2 flex-1 justify-center basis-3/12 flexCenter">
        <div className="">
          <img src={renier} alt="profile" className="md:w-[400px] md:h-[400px] hover:filter hover:saturate-150 transition duration-500 z-10" />
        </div>
      </div>

      {/* Here will go the Name and some information */}
      <div className="flex-1 px-6 sm:px-16 flex-col flexCenter md:items-start md:text-start">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true , amount: 0.5 }}
          transition={{duration:0.5}}
          variants={{
            hidden: { opacity: 0 , x: -50 },
            visible: { opacity: 1 , x: 0 }
          }}
        >
          <p className="heading2 font-poppins">
            Renier Vargas
          </p>

          <p className="text-sm font-medium paragraph">
            {props.language ? aboutInfo.infoEs : aboutInfo.infoEn}
          </p>
        </motion.div>


        {/* Here will go the bottoms fot CTA */}
        <motion.div
        className='flexCenter  mt-5'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true , amount: 0.5 }}
        transition={{ delay: 0.2, duration:0.5}}
        variants={{
          hidden: { opacity: 0 , x: -50 },
          visible: { opacity: 1 , x: 0 }
        }}
        >
          <a href="#contact" className='font-semibold text-white bg-red-500 rounded-sm py-3 px-6 hover:bg-red-700 transition duration-500'>
            {props.language ? aboutInfo.buttonEs : aboutInfo.buttonEn}
          </a>

        </motion.div>

        {/* sicial media icons  */}
        <motion.div
        className='flexStart md:text-start items-start mt-5'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true , amount: 0.5 }}
        transition={{ delay: 0.4, duration:0.5}}
        variants={{
          hidden: { opacity: 0 , x: -50 },
          visible: { opacity: 1 , x: 0 }
        }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>


    </section>
  )
}

export default About