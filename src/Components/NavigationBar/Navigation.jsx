import React from 'react'
import { useState } from 'react'
import {BsFillPersonFill} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import '../NavigationBar/Navigation.css'
import {MdSchool} from 'react-icons/md'
import { FaCode } from "react-icons/fa";

const Navigation = () => {
  const [navigation, setNavigation] = useState("#");
  return (
    <nav>
        <a href='#' onClick={()=>setNavigation("#")} className={navigation==="#" ? 'usando' : ''}><AiFillHome/></a>
        <a href='#sobreMi' onClick={()=>setNavigation("#sobreMi")} className={navigation==="#sobreMi" ? 'usando' : ''}><BsFillPersonFill/></a>
        <a href='#knowledge' onClick={()=>setNavigation("#knowledge")} className={navigation==="#knowledge" ? 'usando' : ''}><MdSchool/></a>
        <a href='#contacto' onClick={()=>setNavigation("#contacto")} className={navigation==="#contacto" ? 'usando' : ''}><FaCode/></a>
    </nav>
  )
}

export default Navigation