import {motion} from 'framer-motion'

function Contact({language}) {
  return (
    <section id="contact" className="pt-48 pb-48 ">
      <div className='pb-10 pt-10 px-2 bg-second rounded-md'>
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
                <p>Contacto</p>
                ):(
                <p>Contact</p>
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

        {/* Here will go the form contact */}
        <motion.div
        className='flex justify-center items-center w-full '
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true , amount: 0.5 }}
        transition={{ delay:0.5, duration:0.5}}
        variants={{
          hidden: { opacity: 0 , y: 50 },
          visible: { opacity: 1 , y: 0 }
        }}
        >
          <form action="https://getform.io/f/14f804e9-2ebe-4c12-9a75-6e1b2780f983" method='POST' className='flex flex-col w-full max-w-[600px]'>
              <input className="bg-gray-500 rounded-sm text-white p-2" type="text"  name='Name' placeholder='Name'/>
              <input className="bg-gray-500 rounded-sm text-white p-2 my-4" type="email"  name='Eame' placeholder='Email'/>
              <textarea className="bg-gray-500 rounded-sm tex-w text-white p-2" name="Message" rows="10" placeholder='Message'></textarea>
              <button type='submit' className='font-semibold text-white bg-fourth rounded-sm py-3 px-6 md:mx-40 mx-20 justify-center my-8 flex items-center hover:bg-red-700 transition duration-500 '>
                Let's Talk
              </button>
          </form>

        </motion.div>


      </div>
    </section>
  )
}

export default Contact