import React from 'react';
import image from './hassan_spain.jpg';
import { Link } from "react-router-dom";
import resume from './resume.pdf';


var linkedin = 'https://www.linkedin.com/in/zerjawi/';


export const Side =() => {
  return (
    <div>
        <div className='side'>
                <div className="component">
                    <img className="spain" src={image} alt='Hassan in Spain'/>

                    <p className="info">Email me at:<br></br>hhalzerjawi@gmail.com<br></br>hassan@alzerjawi.com<br></br></p>
                    <div class='r-button'>
                        <a id="button1" className="btn btn-dark btn-lg" rel='noopener noreferrer' target="_blank" href={linkedin} role="button" ><p id="text-resume">LinkedIn</p></a>
                    </div>
                    <div class='r-button' id="buttonR">

                        <Link id="button1" className="btn btn-dark btn-lg" rel='noopener noreferrer' target="_blank" to={resume} role="button" ><p id="text-resume">Download Resume</p></Link>
                    </div>
                </div>
                
            </div>
    </div>
  )
}