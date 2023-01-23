// import styles from "./constants/style"
import { Header, About, Skills, Experiences, Portfolio, Testimonials, Contact, Footer } from "./components"
import { useState } from "react"

function App() {
  const [darkMode, setDarkMode] = useState(false);
  // FALSE = English - TRUE = Spanish
  const [language, setLanguage] = useState(false);
  return (
    <div className={`bg-emerald-200 w-full overflow-hidden ${darkMode ? 'dark' : ''} `}>
      
      {/* <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}> */}


      {/* Here goes the NavBar */}
      <div className="paddingX flexCenter darkMode darkText ">
        <div className="boxWidth">
          <Header 
            darkMode={darkMode} 
            setDarkMode={setDarkMode} 
            language={language}
            setLanguage={setLanguage}
            />
        </div>
      </div>

      {/* Here goes the About section */}
      <div className="bg-emerald-300 flexCenter">
        <div className="boxWidth">
          <About />
        </div>
      </div>
      
      {/* Here goes the Skills Experiences Portfolio Testimonials Contact Footer sections */}
      <div className="bg-emerald-300 paddingX flexCenter">
        <div className="boxWidth">
          <Skills />
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