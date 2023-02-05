import { useState } from "react";
import { 
    logo1, 
    logo2, 
    icon1, 
    icon2, 
    logo1w, 
    logo2w, 
    icon1w, 
    icon2w, 
    menu, close, sun , moon } from "../assets";
import { navLinks } from "../constants";

function Header(props) {
  const [toggle, setToggle] = useState(false);
  
  return (
    <nav  className="dark:bg-gray-800  fixed flex py-2 felxCenter justify-between items-center paddingX w-full darkMode darkText  z-50 " >
      <img src={icon2w} alt="logo" className="w-[50px]"/>

      {/* esto es para el navbar de la version de escritorio  */}
        <ul className="list-none sm:flex hidden justify-center items-center flex-1  ">
          {/* hacemos el recorrido de cada uno de los links para el navbar */}
          {navLinks.map((nav, index)=> (
            <li key={nav.id} className={`font-poppins font-semibold cursor-pointer text-third text-[20px] ${index !== navLinks - 1 ? 'm-2' : ''} text-gray-700 darkText`}>
              <a href={`#${nav.id}`} > { props.language ? nav.titleEs : nav.titleEn } </a>
            </li>
          ))}
        </ul>
        <div className="justify-end items-center sm:flex hidden">
          {/* <div className="cursor-pointer" onClick={() => props.setDarkMode((prev)=> !prev)}>
            <img src={props.darkMode ? sun : moon} alt="darkMode" className="dark:invert"/>
          </div>
          <span className="mx-2">|</span>  */}
          <div className="cursor-pointer" onClick={() => props.setLanguage((prev)=> !prev)}> 
            <div className={`bg-third  p-[4px] rounded-md font-semibold text-white dark:bg-first dark:text-gray-800 dark:transition dark:duration-500`}>

                {props.language ? (
                  <div>EN</div>
                ) : (
                  <div>ES</div>
                )}

            </div>
          </div>
        </div>
      

      {/* esto es la parte del navbar para la version mobile */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain" onClick={() => setToggle((prev)=>!prev)} />

        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-emerald-500 dark:bg-gray-700 absolute top-20 right-0 mx-4 my-2 min-w-[240px] rounded-xl sidebar`}>
          <ul className="list-none flex flex-col justify-center items-center flex-1">
            {/* hacemos el recorrido de cada uno de los links para el navbar */}
            {navLinks.map((nav, index)=> (
              <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index !== navLinks - 1 ? 'mb-2' : ''}`}>
                <a href={`#${nav.id}`} > { props.language ? nav.titleEs : nav.titleEn } </a>
              </li>
            ))}
            <div className=" flex space-x-16 items-center mt-5">
              {/* <div className="cursor-pointer" onClick={() => props.setDarkMode((prev)=> !prev)}> 
                <img src={props.darkMode ? sun : moon} alt="darkMode" className="dark:invert"/>
              </div> */}
              <div className="cursor-pointer" onClick={() => props.setLanguage((prev)=> !prev)}> 
              <div className={`bg-gray-600  p-[4px] rounded-md font-semibold text-white dark:bg-gray-400 dark:text-gray-200 dark:transition dark:duration-500`}>

                {props.language ? (
                  <div>EN</div>
                ) : (
                  <div>ES</div>
                )}

                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>

    </nav>
  )
}

export default Header