import React from "react";
import portfolio from './Portfolio.png';
import VCS from './VCS.png';
import { Side } from "./Side";

export const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className='main'>
                <h1>Portfolio</h1>
                <div className="port1">
                    <img className="port-img" src={portfolio} alt='portfolio'/>
                    <div className="port-container">
                        <h1 className="port-title">Portfolio</h1>
                        <p className="port-desc">I used React, along with JavaScript, HTML, and CSS, to create my portfolio website. The website showcases my software development skills and includes information about my education, work experience, and technical skills. It was a project that allowed me to improve my web development abilities while also creating a platform to showcase my professional abilities.</p>
                        <a id='button3' class="btn btn-dark btn-lg" href="https://github.com/alzerjawi/alzerjawi.github.io" rel='noopener noreferrer' target="_blank" role="button">GitHub Page</a>

                    </div>
                </div>
                <div className="port2">
                    <img className="port-img" src={VCS} alt='portfolio'/>
                    <div className="port-container">
                        <h1 className="port-title">Version Control System</h1>
                        <p className="port-desc">I developed a simple Version Control System (VCS) using Shell script with Bash. The VCS uses Git-like commands and allows users to commit changes, create branches, merge branches, and view commit history. The script uses basic file system manipulation commands to create and manage repositories. The VCS has proven to be useful for managing small-scale projects and learning the basics of version control.</p>
                        <a id='button3' class="btn btn-dark btn-lg" href="https://github.com/alzerjawi/VersionControlSystem" rel='noopener noreferrer' target="_blank" role="button">GitHub Page</a>
                    </div>
                </div>
            </div>
            <Side />
        </div>  
    );
};