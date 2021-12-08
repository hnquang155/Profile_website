import React from "react";
import {Button} from '../Other/Button'
import {Link} from 'react-router-dom';
import './HomePage.css'

function HomePage({
    lightBg, topLine, lightText, lightTextDesc, headline, description1, description2, buttonLabel,img,alt,imgStart
}) {
    return (
        <>
            <div className = {lightBg ? 'home__main-section' : 'home__main-section darkBg'}>
                <div className="container">
                    <div className="row home__main-row" 
                    style={{display:'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                        <div className="col">
                            <div className="home__main-text-wrapper">
                                <div className="top-line">{topLine}</div>
                                <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                                <p className={lightTextDesc ? 'home__main-subtitle dark' : 'home__main-subtitle'}>{description1}</p>
                                <p className={lightTextDesc ? 'home__main-subtitle dark' : 'home__main-subtitle'}>{description2}</p>
                                <Link to="/AboutPage/AboutPage">
                                    <Button buttonSize="btn--wide" buttonColor="red1">{buttonLabel}</Button>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className='home__main-img-wrapper'>
                            <img src = {img} alt={alt} width className="home__main-img"/>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage