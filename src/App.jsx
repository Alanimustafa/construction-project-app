import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [project, setProject] = useState(projects)

  return (
    <>
      <div className="projectAppMainContainer">
        <Project/>
      </div>
    </>
  )
}

export default App
