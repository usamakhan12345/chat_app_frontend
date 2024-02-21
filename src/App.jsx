import React from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Home from "../src/pages/home"
import Login from "../src/pages/Login/login"
// import Signup from "../src/pages/SignUp/signup"
import HomePage from "../src/pages/Home/index"
import ChatPage from "../src/pages/Chat/index"

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<HomePage/>}/>
        <Route path='chat' element={<ChatPage/>}/>
      </Routes>
    
    </BrowserRouter>
    
    </>
  )
}

export default App