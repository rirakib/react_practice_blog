import React from 'react'
import './home.css'
import { NavLink } from 'react-router-dom'



const Home = () => {
    return (
        <>
           <section className="mt-5">
               <div className="container">
                   <div className="row">
                        <div className="col-md-6">
                            <div className="grid">
                                <div className="img_box">
                                    <img src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?size=626&ext=jpg" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="grid">
                                <div className="heading_box mt-5">
                                    <h1 className="text-center">Welcome to Protfolio</h1>
                                    <p>A simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                                <div className="hire_me">
                                    <NavLink to="/contact" className="primary_btn" >Hire Me</NavLink>
                                </div>
                            </div>
                        </div>
                   </div>
               </div>
           </section>
        </>
    )
}
export default Home;