// /pages/www.teymur.pro/admin/icons/add.js
'use client'
import React, { useState } from 'react';
import { AiFillHeart } from "react-icons/ai";
import { AiTwotoneEdit } from "react-icons/ai";
import { AiTwotoneDelete } from "react-icons/ai";
import { IoIosAddCircle } from "react-icons/io";
import { AiTwotoneMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
export default function Icons() {
    return (
        <>
            <footer className="sector ">
                <div className="mid-container"  >
                <h2  style={{ textAlign: "center", }}>Contacts</h2>

                    <div className="info-col"  >
                        
                            <h4 >   +994518640113</h4>

                        </div>
                    <div className="" style={{ alignItems: "center" }}>
                        
                        <div className="box">

                            <ul className="list2 ">
                                <li><a href="mailto:leylagahramanova13@gmail.com" target="_blank"><AiTwotoneMail size={30} /></a></li>
                                <li><a href={'https://github.com/leylagahramanova'} ><AiOutlineGithub size={30} /></a></li>
                                <li><a href={'https://www.linkedin.com/in/leyla-gahramanova-124918262/'} target="_blank"><AiFillLinkedin size={30} /></a></li>
                            </ul>
                        </div>
                       
                    </div>


                </div>
                <div className="footer-copyright">
                    <div className="footer-copyright-wrapper">
                        <p className="footer-copyright-text" style={{color:'white'}}>
                            Made with <i style={{ color: 'red' }}><AiFillHeart /></i> by me
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}

{/* <div class="box">

<ul class="list2">
    <li><a href="#" target="_blank"><AiTwotoneMail size={30} /></a></li>
    <li><a href="#" target="_blank"><AiOutlineGithub size={30} /></a></li>
    <li><a href="#" target="_blank"><AiFillLinkedin size={30} /></a></li>
</ul>
</div>    <p className="footer-copyright-text">
                        +994518640113
                        </p>
                        <p className="footer-copyright-text">
                            Made with <i style={{color:'red'}}><AiFillHeart/></i> by me
                        </p*/}