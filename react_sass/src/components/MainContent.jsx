import "../styles/components/maincontent.sass"

import AboutContainer from "./AboutContainer"
import ProjectConatiner from "./ProjectConatiner"
import TechonologiesContainer from "./TechonologiesContainer"

const MainContent = () => {
  return (
    <main id="main-content">
        <AboutContainer />
        <TechonologiesContainer />
        <ProjectConatiner />
    </main>
  )
}

export default MainContent