import React  from "react";

const Card = (props) => {
    return(
        <>
            
                        <div className="col-md-4">
                            <div className="card mt-2 shadow p-4">
                                <div className="img_box">
                                    <img src={props.imgsrc} className="img-fluid"/>
                                </div>
                                <div className="title">
                                    <h3>{props.title}</h3>
                                </div>
                            </div>
                        </div>
                  
        </>
    )
}
export default Card;