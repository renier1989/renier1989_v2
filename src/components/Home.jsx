import {motion} from 'framer-motion'
import { homeInfo } from '../constants';
import SocialMediaIcons from './SocialMediaIcons';

function Home(props) {
  return (
    <section id="home" className="flex md:flex-row flex-col md:py-52 py-32">

      {/* Here will go the Name and some information */}
      <div className=" px-6 sm:px-16 flex-col flexCenter md:items-start md:text-start">
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
            <p> Hi, My name is</p>
          <p className="heading3">
            Renier Vargas
          </p>
          <p className='heading1'>
            {props.language ? homeInfo.shortPhraseEs : homeInfo.shortPhraseEn}
          </p>

          <div className="text-sm font-medium paragraph sm:mr-[590px]">
            {props.language ? homeInfo.shortInfoEs : homeInfo.shortInfoEn}
            <h1>
            </h1>
          </div>
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
          <a href="#contact" className='font-semibold text-white bg-fourth rounded-sm py-3 px-6 hover:bg-red-700 transition duration-500'>
            {props.language ? homeInfo.buttonEs : homeInfo.buttonEn}
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

export default Home