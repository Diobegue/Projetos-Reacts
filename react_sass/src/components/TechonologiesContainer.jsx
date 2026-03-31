import {
    DiHtml5, DiCss3, DiJavascript, DiReact, DiNodejs, DiGit
} from "react-icons/di"
import { FaVuejs } from "react-icons/fa"

import "../styles/components/techonogiescontainer.sass"

const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "javascript", name: "JavaScript", icon: <DiJavascript /> },
    { id: "react", name: "React", icon: <DiReact /> },
    { id: "nodejs", name: "Node.js", icon: <DiNodejs /> },
    { id: "git", name: "Git", icon: <DiGit /> },
    { id: "vue", name: "Vue.js", icon: <FaVuejs /> },
    
    
]

const TechonologiesContainer = () => {
  return (
    <section className="techonologies-container">
        <h2>Tecnologias</h2>
        <div className="techonologies-grid">
            {technologies.map((tech) => (
                <div className="techonology-card" id={tech.id}>
                    {tech.icon}
                    <div className="techonology-info">
                        <h3>{tech.name}</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nam quidem 
                        </p>
                    </div>
                </div>
            ))} 
        </div>
    </section>
  )
}

export default TechonologiesContainer