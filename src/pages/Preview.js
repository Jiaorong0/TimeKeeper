import React from "react";
import { useState } from "react";
import data from "../carouselData";

export default function Preview(props) {
   
    const[currCont, setCurrCont]=useState(1)
    window.setTimeout(function(){
        let nextCont = (currCont+1)%data.length
        setCurrCont(nextCont)
    }, 5000);

    return (
        <div className="intro">
            <h1 className="intro-title">Timekeeper for a high productivity day</h1>
            <p className="intro-p"> <strong>Customized Time Plan</strong></p> 
            <p className="intro-end intro-end-one">Do you want to know how your day is being spent?</p>
            <p className="intro-end intro-end-two"><strong>Timekeeper</strong> is here to <strong>help</strong> you <strong>spend time wisely 😊</strong></p>
            {data[currCont]}
            <div className="wrapper">
                <form action="" method="POST" className="preview-input">
                    <input className="preview-input-content" type="email" placeholder="Email" required /><br></br>
                
                    <input className="preview-input-content" type="password" placeholder="Password" required /><br></br>

                    <input className="preview-input-content btn" type="submit" value="Sign up with email" />
                </form>
            </div>   
        </div>
      
    )
}