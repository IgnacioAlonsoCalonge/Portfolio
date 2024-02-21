import React from 'react'
import './Socials.css'
import {BsGithub} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FaFacebookF} from 'react-icons/fa'
import {FaDiscord} from 'react-icons/fa'

const Socials = () => {



  return (
        <div className='socials'>
            <a href='' target="_blank" className='discord'><FaDiscord/></a>
            <a href='https://github.com/IgnacioAlonsoCalonge' target="_blank" className='github'><BsGithub/></a>
            <a href='https://www.linkedin.com/in/ignacio-alonso-5845762b1/' target="_blank" className='linkedin'><FaLinkedinIn/></a>
            <a href='https://www.instagram.com/' target="_blank" className='instagram'><FiInstagram/></a>
            <a href='https://www.facebook.com/' target="_blank" className='facebook'><FaFacebookF/></a>
        </div>
  )
}

export default Socials