import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PATHS } from './utils/paths'
import Home from './pages/Home'
import Sidebar from './components/common/Sidebar'
import Organization from './pages/Organization'

const App = () => {
  return (
    <div className='app-container bg-black h-screen flex'>
      <Sidebar />
      <Routes>
          <Route path={PATHS.HOME} element={<Home />} />
          <Route path={PATHS.ORGANIZATION} element={<Organization />} />
      </Routes>
    </div>
  )
}

export default App