import React from 'react'
import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import AddItem from './Pages/AddProject/AddItem'
import ProjectList from './Pages/Project List/ProjectList'
import DeleteProjt from './Pages/DeleteProject/DeleteProjt'
import EditProject from './Pages/EditProject/EditProject'



const App = () => {
  // HANDLE HOVER/CLICK BG
  const [hover, setHover] = useState('List Project')
  return (
    <>
      <div className=''>
        <Navbar />
        <div className='flex'>
          <Sidebar hover={hover} setHover={setHover} />
          <AddItem hover={hover} />
          <ProjectList hover={hover} />
          <DeleteProjt hover={hover} />
          <EditProject hover={hover} />
        </div>
      </div>
    </>
  )
}

export default App
