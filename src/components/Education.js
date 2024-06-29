import React from "react";
 
import MSUImage from './MSU.png';
import WestminsterImage from './westminster.png';
import UCDImage from './cu.png';
import {Side} from './Side';
import { Link } from "react-scroll";

 
 

 

export const Education = () => {
    return (
        <div className="education" >
            <div className='main'>
                <h1 data-aos="flip-down" data-aos-duration="1000" data-aos-delay="100">Education</h1>
                <div className="container1" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="100">
 
 
                    <Link className="ex1" to="Degree2" spy={true} smooth={true} offset={-100} duration={500}>
                        <img className="logo" src={UCDImage} alt='UCD logo'/>
                        <p>
                            University of Colorado Denver<br></br>Jan 2015 - May 2019<br></br>Partial BSc in Mathematics
                        </p>

                    </Link>
                    <Link className="ex2" to="Degree2" spy={true} smooth={true} offset={-100} duration={500}>
                        <img className="logo pic1" src={MSUImage} alt='MSU logo'/>
                        <p>
                            Metropolitan State University Denver<br></br>Jul 2019 - Aug 2021<br></br>BSc in Applied Mathematics
                        </p>

                    </Link>
                    <Link className="ex3" to="Degree1" spy={true} smooth={true} offset={-100} duration={500}>
                        <img className="logo pic3" src={WestminsterImage} alt='MSU logo'/>
                        <p>
                            University of Westminster London<br></br>Sep 2021 - Sep 2023<br></br>MSc in Software Engineering
                        </p>
                    </Link>
                </div>
                
                <div className="container2">
 
 
 
                     <div className="Degree1">
                        <h1 data-aos="flip-down" data-aos-duration="1000" data-aos-delay="100">Software Engineering Courses</h1>
                        <ul data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="100">
                            <li>Data Repositories Principles and Tools</li>
                            <li>Data Visualisation and Dashboarding</li>
                            <li>Mobile Application Development</li>
                            <li>Advanced Software Design</li>
                            <li>Data Structures and Algorithms</li>
                            <li>Object Oriented Programming</li>
                            <li>Software Development Environments</li>
                            <li>Software Development Project</li>
                        </ul>
                        <p data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100">This Master's degree program covered various programming tools and languages such as SQL for data repositories, Tableau and R for data visualization and dashboarding, Swift for mobile application development, Astah and C++ for advanced software design, C# for data structures and algorithms and object-oriented programming, and Bash, Git, and GitHub for software development environments. The program equipped me with the necessary knowledge and skills to develop and implement software solutions using these tools and programming languages.</p>
                    </div>
                    
                </div>
 
 
                <div className="container3">
 
                    <div className="Degree2">
                        <h1 data-aos="flip-down" data-aos-duration="1000" data-aos-delay="100">Applied Mathematics Courses</h1>
                        <ul data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="100">
                            <li>Calculus I</li>
                            <li>Calculus II</li>
                            <li>Calculus III</li>
                            <li>Introduction to Mathematical Proofs</li>
                            <li>Computer Science 1(Java)</li>
                            <li>Linear Algebra</li>
                            <li>Probability and Statistics</li>
                            <li>Differential Equations</li>
                            <li>Statistical Methods</li>
                            <li>Numerical Analysis I</li>
                            <li>Partial Differential Equations</li>
                        </ul>
                        <p data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100">In my Bachelor of Science in Applied Mathematics program, I gained a strong foundation in mathematical concepts and techniques through courses such as Calculus, Introduction to Mathematical Proofs, Linear Algebra, Probability and Statistics, Differential Equations, and Numerical Analysis. The program also included Computer Science 1, which introduced me to programming concepts using Java. These courses equipped me with the necessary mathematical knowledge and skills to apply mathematical concepts and techniques in solving real-world problems.</p>
                    </div>
                </div>
            </div>
 
 
            <Side />
 
        </div>  
    );
};