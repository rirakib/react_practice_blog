import React from 'react'
import './about.css'
import about_img from './img/about_img.jpg'

const About = () => {
    return (
        <>
            <section className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="grid">
                                <div className="img_section">
                                    <img src={about_img} alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="grid">
                                <div className="right_section">
                                    <h1>Md. Rakibul Islam</h1>
                                    <h5>Fronted Developer</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis purus sed sodales aliquet. Fusce vitae posuere risus. Cras eleifend facilisis urna, et tristique dui dictum pharetra. Nunc in sem venenatis, aliquet nulla vitae, pretium nulla. Nunc non euismod risus. Proin quis ligula pharetra nulla convallis mattis vel a risus. In vulputate euismod nisl et egestas. Aliquam a mauris mauris. Morbi ac rutrum dui. Nunc ultrices ligula odio, vitae interdum ipsum vestibulum non</p>
                                    <a href="#" className="primary_btn">Download Cv</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About;