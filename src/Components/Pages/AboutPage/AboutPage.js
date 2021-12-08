import React from "react";
import { FaMicrosoft } from "react-icons/fa";
import {FaAws} from "react-icons/fa"
import { IconContext } from "react-icons/lib";
import './AboutPage.css';
import { aboutObjOne, aboutObjTwo, aboutObjThree} from "./DataAbout";
import AboutComponent from "../AboutComponent";
import '../HomePage.css'
import Donut from "../../Other/Donut";
import NewBar from "../../Other/Bar";

function AboutPage() {
    return (
        <IconContext.Provider value={{ color: '#fff', size: 64 }}>
             <div className = 'home__main-section'>
                <div className="container">
                    <div className="row home__main-row" 
                    style={{display:'flex', flexDirection: 'row' }}>
                        <div className="col">
                            <div className="home__main-text-wrapper">
                                <div className="top-line">Academic</div>
                                <h1 className= 'heading dark'>Ranking 1/35</h1>
                                <p className='home__main-subtitle dark'>
                                    After first year, 26 credits were earned with CGPA around <b>4.154/4.3</b></p>
                                <p className='home__main-subtitle dark'> 
                                Courseworks: Linear Algebra, Visual Analytics, Data Science, Calculus, Probability and Statistics,
                                Database, Datawarehouse.
                                </p>
                            </div>
                        </div>
                        <div className="col">
                        <Donut />
                        </div>   
                    </div>
                </div>
            </div>
            
            <div className="about__section">
                <div className="about__wrapper">
                    <h1 className="about__heading"> GPA Percentage</h1>
                </div>
                 <NewBar/>
            </div>
           
                <AboutComponent {...aboutObjOne}/>
                <div className="about__section">
                    <div className="about__wrapper">
                        <h1 className="about__heading"> Certificates</h1>
                        <div className="about__container">
                            <a href="https://www.linkedin.com/in/quang-huynh-ngoc/" className='about__container-card'>
                                <div className="about__container-cardInfo">
                                    <div className="icon">
                                        <FaMicrosoft />
                                    </div>
                                    <h3>Microsoft</h3>
                                    <h4> 5 certs </h4>
                                    <p>Azure Data Fundamentals  </p>
                                    <p>Analysing Data with Microsoft Power BI  </p>
                                    <p>Azure AI Fundamentals  </p>
                                    <p>Microsoft Office Specialist in Excel 2013 and PowerPoint 2016 </p>
                                </div>
                            </a>

                            <a href="https://www.linkedin.com/in/quang-huynh-ngoc/" className='about__container-card'>
                                <div className="about__container-cardInfo">
                                    <div className="icon">
                                        <FaAws />
                                    </div>
                                    <h3> AWS</h3>
                                    <h4> 2 certs </h4>
                                    <p> AWS Cloud Practitioner  </p>
                                    <p> AWS Specialisation on Coursera </p>
                                </div>
                            </a>

                        </div>
                    </div>
                </div>
                <AboutComponent {...aboutObjTwo}/>
                <AboutComponent {...aboutObjThree}/>
                
        </IconContext.Provider>
    );
}

export default AboutPage