import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Project from './Components/Project'

function App() {
 // const [project, setProject] = useState(projects)

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
          <h3 className="ourProjects">Our Projects</h3>            
          <Project />
          </div>
        <p className='copyRight'>© 2025 Construction Corp. All Rights Reserved.</p>
      </div>
    </>
  )
}

export default App
