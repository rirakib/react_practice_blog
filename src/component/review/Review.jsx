import React from 'react'
import Card from './Card';
import Data from './Data'
const Review = () => {
    return (
        <>
            <section className="mt-5">
                <div className="container">
                    <div className="row">
                            
                            {Data.map((val)=> {
                                return(
                                    <Card
                                        imgsrc = {val.imgsrc}
                                        title = {val.title}
                                    />
                                )
                            })}
                    </div>
                </div>
            </section>  
        </>
    )
}
export default Review;