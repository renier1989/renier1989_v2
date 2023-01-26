// import styles from "./constants/style"
import { Header, About, Skills, Experiences, Portfolio, Testimonials, Contact, Footer } from "./components"
import { useState } from "react"

function App() {
  const [darkMode, setDarkMode] = useState(false);
  // FALSE = English - TRUE = Spanish
  const [language, setLanguage] = useState(false);
  return (

    <div className={`w-full overflow-hidden ${darkMode ? 'dark' : ''} font-poppins`}>
        {/* Here goes the NavBar */}
        
          <div className="boxWidth">
            <Header 
              darkMode={darkMode} 
              setDarkMode={setDarkMode} 
              language={language}
              setLanguage={setLanguage}
              />
          </div>
      
        {/* Here goes the About section */}
        <div className="bg-emerald-400 flexCenter darkMode paddingX">
          <div className="boxWidth">
            <About language={language} setLanguage={setLanguage}/>
          </div>
        </div>
        
        {/* Here goes the Skills Experiences Portfolio Testimonials Contact Footer sections */}
        <div className="bg-emerald-300 paddingX flexCenter darkMode">
          <div className="boxWidth">
            <Skills language={language} />
            <Experiences />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
          </div>
        </div>



    </div>
  )
}

export default App