import {motion} from 'framer-motion'
import { homeInfo } from '../constants';
import SocialMediaIcons from './SocialMediaIcons';
import {renier, renierbg, renier2,
  logo1, 
  logo2, 
  icon1, 
  icon2, 
  logo1w, 
  logo2w, 
  logo2g, 
  icon1w, 
  icon2w, } from '../assets';

function Home(props) {
  return (
    <section id="home" className="  flex md:flex-row flex-col md:py-52 py-32 ">
      {/* Here will go the image section */}
        <div className=" z-10  md:order-2  justify-center  flexCenter  ">
            <motion.div 
              className="md:absolute hidden md:block"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true , amount: 0.5 }}
              transition={{delay: 0.5, duration:0.5}}
              variants={{
                hidden: { opacity: 0 , x: 50 },
                visible: { opacity: 1 , x: 0 }
              }}
            >
              <img src={logo2g} alt="profile" className="md:max-w-[700px] md:relative -left-16 top-48 transition duration-500 " />
            </motion.div>
        </div>
      {/* Here will go the Name and some information */}
      <div className=" bg-gray-800 z-0 flex-1 px-6 py-7 rounded-md sm:px-16 flex-col md:flexCenter flexStart md:items-start md:text-start">
        <motion.div
          className='text-start mt-5'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true , amount: 0.5 }}
          transition={{duration:0.5}}
          variants={{
            hidden: { opacity: 0 , x: -50 },
            visible: { opacity: 1 , x: 0 }
          }}
        >
          <p className="paragraph"> Hi, My name is</p>
          <p className="heading3">
            Renier Vargas
          </p>
          <p className='heading1 '>
            {props.language ? homeInfo.shortPhraseEs : homeInfo.shortPhraseEn}
          </p>

          <div className="text-sm font-medium paragraph md:mr-[300px]">
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