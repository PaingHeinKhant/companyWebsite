import React, { useEffect, useState } from 'react'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import Contact from './components/contact/Contact'
import Footer from './components/Footer'
import Home from './components/home/Home'

import HeroAbout from './components/HeroAbout'
import HeroSection from './components/HeroSection'

import NavBar from './components/NavBar'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub} from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Team from './components/team/Team'

const App = () => {

  const [dark, setDark] = useState('')
  const [iconColor, setIconColor] = useState('black')

  const socialIcons = [<FaFacebookF />, <FaTwitter />, <FaGithub />, <FaLinkedinIn />]




  useEffect(()=>{
    if(localStorage.theme === ''){
        setDark('')
        setIconColor('black')
      
    }if(localStorage.theme === 'dark'){
        setDark('dark')
        setIconColor('white')
    
    }
    console.log(iconColor);
},[dark, iconColor])

const changeDark = () =>{
    if(dark ===  '' ){
        setDark('dark')
        localStorage.theme = 'dark'
        
    }
    if(dark === 'dark'){
        setDark('')
        localStorage.theme = ''
    }
}

// const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route>
//          <Route path='/' element={<App />}/>
//           <Route path='/contact' element={<Contact />} />
//       </Route>
     
//     )
//   )


  return (
    <>
    <div className={dark}>
      <div className="dark:bg-bg-dark relative ">
        <div className="w-[90%] mx-auto ">
          <NavBar changeDark={changeDark} dark={dark} />

        </div>

        {/* <RouterProvider router={router}/> */}


        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/team' element={<Team socialIcons={socialIcons}/>} />
          <Route path='/contact' element={<Contact socialIcons={socialIcons}/>} />
        </Routes>


        <div className="">
          <Footer socialIcons={socialIcons} />
        </div>

       

       

        
      </div>
     
   
   </div>
    </>
  )
}

export default App