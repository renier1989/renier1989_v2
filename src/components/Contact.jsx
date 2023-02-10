import {motion} from 'framer-motion'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact({language}) {

  const form = useRef();

  let sended=false;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ew568ag', 'template_g9ut96c', form.current, 'QCn2clSctbSEZSSjN')
      .then((result) => {
        console.log(result.text);
        console.log('Message sent');

        if(result.text=='OK') {
          sended = true;
          document.getElementById("user_name").value = "";
          document.getElementById("user_email").value = "";
          document.getElementById("message").value = "";
        }
      }, (error) => {
          console.log(error.text);
      });
  };

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
          <form  ref={form} onSubmit={sendEmail} action="" className='flex flex-col w-full max-w-[600px]'>
              <input className="p-2" type="text" id='user_name' name='user_name' placeholder='Name'/>
              <input className="p-2 my-4" type="email" id='user_email' name='user_email' placeholder='Email'/>
              <textarea className="p-2" id="message" name="message" rows="10" placeholder='Message'></textarea>
              <button type='submit' className='font-semibold text-white bg-fourth rounded-sm py-3 px-6 mx-40 justify-center my-8 flex items-center hover:bg-red-700 transition duration-500 '>
                Let's Talk
              </button>
          </form>

        </motion.div>

        <div className={`${sended ? 'hidden':''} bg-green-400 mx-[400px] p-2 rounded-sm text-second font-semibold`}>
            Gracias por contactarte conmigo.
        </div>


      </div>
    </section>
  )
}

export default Contact