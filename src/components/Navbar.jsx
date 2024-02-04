import React from 'react'

import { AiTwotoneMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
const Navbar = () => {
  return (
    <nav className="side-menu">
    <ul style={{ marginBottom: '10px', }}>
        <li style={{ backgroundColor: '#f2f2f2' }}>
        <a href="mailto:leylagahramanova13@gmail.com" style={{ textDecoration: 'none', color: '#000', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>mail
</a>
            <span >
                <i style={{ color: '#000' }}> <AiTwotoneMail size={30} />
                </i>
            </span>
        </li>
        <li style={{ backgroundColor: '#8080ff' }}>
            <a  style={{ textDecoration: 'none', color: '#000', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              +994518640113
            </a>
            <span >
                <i style={{ color: '#000' }}>  <AiOutlinePhone size={30} />
                </i>
            </span>
        </li>
        <li style={{ backgroundColor: '#f2f2f2' }}>
            <a href={'https://github.com/leylagahramanova'}style={{ textDecoration: 'none', color: '#000', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
             projects
            </a>

            <span >
                <i style={{ color: '#000' }}>  <AiOutlineGithub size={30} />
                </i>
            </span>
        </li>
        <li style={{ backgroundColor: '#8080ff' }}>


            <a href={'https://www.linkedin.com/in/leyla-gahramanova-124918262/'} style={{ textDecoration: 'none', color: '#000', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
               profile
            </a>

            <span >
                <i style={{ color: '#000' }}>  <AiFillLinkedin size={30} />
                </i>
            </span>
        </li>
    </ul>
</nav>
  )
}

export default Navbar