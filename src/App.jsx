// import styles from "./constants/style"
import { Header, Home, About, Skills, Experiences, Portfolio, Testimonials, Contact, Footer } from "./components"
import { useState } from "react"

function App() {
  // const [darkMode, setDarkMode] = useState(false);
  // FALSE = English - TRUE = Spanish
  const [language, setLanguage] = useState(false);
  return (

    <div className={`w-full overflow-hidden overflow-x-hidden font-poppins`}>
    {/* <div className={`w-full overflow-hidden ${darkMode ? 'dark' : ''} font-poppins`}> */}
        {/* Here goes the NavBar */}
        
          <div className="boxWidth">
            <Header 
              language={language}
              setLanguage={setLanguage}
              />
          </div>
      
        {/* Here goes the About section */}
        <div className="bg-first flexCenter darkMode paddingX">
          <div className="boxWidth">
            <Home language={language} setLanguage={setLanguage}/>
          </div>
        </div>

        {/* Here goes the About section */}
        <div className="bg-first flexCenter darkMode paddingX">
          <div className="boxWidth">
            <About language={language} setLanguage={setLanguage}/>
          </div>
        </div>
        
        {/* Here goes the Skills Experiences Portfolio Testimonials Contact Footer sections */}
        <div className="bg-first paddingX flexCenter darkMode">
          <div className="boxWidth">
            <Skills language={language} />
            <Portfolio language={language} />
            <Experiences language={language} className="-z-10"/>
            {/* <Testimonials /> */}
            <Contact language={language}/>
          </div>
        </div>

        {/* Here goes the About section */}
        <div className="bg-second flexCenter p-2 paragraph">
          <div className="boxWidth">
            <Footer language={language}/>
          </div>
        </div>


    </div>
  )
}

export default App