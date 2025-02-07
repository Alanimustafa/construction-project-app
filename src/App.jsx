import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Project from './Components/Project'
import { projectsArray } from '../data/projects'


function App() {
  const [projects, setProject] = useState(projectsArray)
  // console.log(projects);
  return (
    <>
      <div className="projectAppMainContainer">
        <div className="headerHomePage">
          <img className="logo" src="../images/Logo.jpeg" alt="logo-image" />
          <h2 className="applicationName">Constructions</h2>
        </div>
        <div className="navegationButtons">
          <div className="newProjectButton">
            <button>New Project</button>
          </div>
          <div className="currentProjectsButton">
            <button>All Projects</button>
            <button>Completed</button>
            <button>Under Construction</button>
          </div>
        </div>
        <div className="homePageMainContainer">
            {projects.map((project, index) => ( 
            <Project key={index} project={project}/>
            ))}
        </div>
        <p className='copyRight'>© 2025 Construction Corp. All Rights Reserved.</p>
      </div>
    </>
  )
}

export default App
