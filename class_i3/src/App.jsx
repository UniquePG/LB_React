import './App.css'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'
import { useState } from 'react'
import PrivateRoute from './components/PrivateRoute'


function App() {

  const [isLoggedin, setIsLoggedIn] = useState(false)

  return (
    <div className='w-screen min-h-screen bg-richblack-900 flex flex-col' >
      <Navbar isLoggedin={isLoggedin} setIsLoggedIn={setIsLoggedIn} />

      {/* Now create routes for different pages */}
      <Routes>
        <Route path='/' element={<Home setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/dashboard' element={
        <PrivateRoute isLoggedin={isLoggedin}>
          <Dashboard />
        </PrivateRoute>
        } />
      </Routes>


    </div>
  )
}

export default App
