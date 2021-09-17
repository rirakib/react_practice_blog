import React from 'react'
import './home.css'
import HomeData from './HomeData'

const Home = () => {
    return (
        <>
            <div className="container">
                <div className="wrapper">
                    <div className="left_side">
                        <div className="img_box">
                            <img src={HomeData[0].imgsrc} />
                        </div>
                    </div>
                    <div className="right_side">
                        <h1>{HomeData[0].name}</h1>
                        <h5>{HomeData[0].profassion}</h5>
                        <p>{HomeData[0].details}</p>

                        <div className="hire_btn">
                            <a href={HomeData[0].cvlink} target="_blank">Hire Me</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home