import React from "react";
import './HomePage.css';

function AboutComponent({
    lightBg, topLine, lightText, lightTextDesc, headline1,headline2, description1, description2,description3, description4, buttonLabel,img,alt,imgStart
}) {
    return (
        <>
            <div className = {lightBg ? 'home__main-section' : 'home__main-section darkBg'}>
                <div className="container">
                    <div className="row home__main-row" 
                    style={{display:'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                        <div className="col">
                            <div className="home__main-text-wrapper">
                                <br/>
                                <div className="top-line">{topLine}</div>
                                <h1 className={lightText ? 'heading' : 'heading dark'}>{headline1}</h1>
                                <p className={lightTextDesc ? 'home__main-subtitle dark' : 'home__main-subtitle'}>{description1}</p>
                                <p className={lightTextDesc ? 'home__main-subtitle dark' : 'home__main-subtitle'}>{description2}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className='home__main-img-wrapper'>
                            <img src = {img} alt={alt} width className="home__main-img"/>
                            </div>
                            <div className="home__main-text-wrapper">
                                <h1 className={lightText ? 'heading' : 'heading dark'}>{headline2}</h1>
                                <p className={lightTextDesc ? 'home__main-subtitle dark' : 'home__main-subtitle'}>{description3}</p>
                                <p className={lightTextDesc ? 'home__main-subtitle dark' : 'home__main-subtitle'}>{description4}</p>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutComponent