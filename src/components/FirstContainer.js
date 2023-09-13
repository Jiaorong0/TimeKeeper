import React from "react";
import questionMark from "../images/questionMark.png"

export default function FirstContainer(){
    return(
        <div className="preview-body">
            <h2 className="preview-title">Do you wonder where your time has gone?</h2>
            <div className="preview-first-container">
                <img src={questionMark} alt="questionMark picture" className="preview-first-img"></img>
                <p className="preview-title-p"><strong>Timekeeper</strong> will help <strong>you</strong> figure it out</p>
            </div> 
        </div>
    )
}