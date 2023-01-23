import { useState } from "react";
import { react, menu, close } from "../assets";
import { navLinks } from "../constants";

function Header(props) {
  const [toggle, setToggle] = useState(false);
  
  return (
    <nav  className="w-full flex py-6 justify-between items-center navbar">
      <img src={react} alt="logo" />

      {/* esto es para el navbar de la version de escritorio  */}
        <ul className="list-none sm:flex hidden justify-center items-center flex-1">
          {/* hacemos el recorrido de cada uno de los links para el navbar */}
          {navLinks.map((nav, index)=> (
            <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index !== navLinks - 1 ? 'm-2' : ''}`}>
              <a href={`#${nav.id}`} > { props.language ? nav.titleEs : nav.titleEn } </a>
            </li>
          ))}
        </ul>
        <div className="justify-end items-center sm:flex hidden">
          <div className="cursor-pointer" onClick={() => props.setDarkMode((prev)=> !prev)}> DARKMODE </div>
          <div className="cursor-pointer" onClick={() => props.setLanguage((prev)=> !prev)}> LANG </div>
        </div>
      

      {/* esto es la parte del navbar para la version mobile */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain" onClick={() => setToggle((prev)=>!prev)} />

        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-fuchsia-300 absolute top-20 right-0 mx-4 my-2 min-w-[240px] rounded-xl sidebar`}>
          <ul className="list-none flex flex-col justify-center items-center flex-1">
            {/* hacemos el recorrido de cada uno de los links para el navbar */}
            {navLinks.map((nav, index)=> (
              <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index !== navLinks - 1 ? 'mb-2' : ''}`}>
                <a href={`#${nav.id}`} > { props.language ? nav.titleEs : nav.titleEn } </a>
              </li>
            ))}
            <div className=" flex space-x-16 items-center mt-5">
              <div className="cursor-pointer" onClick={() => props.setDarkMode((prev)=> !prev)}> DARKMODE </div>
              <div className="cursor-pointer" onClick={() => props.setLanguage((prev)=> !prev)}> LANG </div>
            </div>
          </ul>
        </div>
      </div>

    </nav>
  )
}

export default Header