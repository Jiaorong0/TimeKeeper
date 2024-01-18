import React from "react";
import Piechart from "../components/Piechart";
import Mainform from "../components/Mainform";
import { useState } from "react";
import clock1 from "../images/clock1.png"

export default function Main(){
    const[serviceListToday, setServiceListToday]= useState([{service:'',time:''}])
    const[serviceListTomorrow, setServiceListTomrrow]= useState([{service:'',time:''}])
    return(
        <div>
            
            <div className="main-container">
                    <h1 className="main-title">Let's see how well you did today!</h1>
                        <Mainform 
                            serviceList = {serviceListToday}
                            setServiceList = {setServiceListToday}
                        />
                        <div className="main-piechart">
                        <h3 className="main-piechart-title">Personal Time Calculator</h3>
                        <Piechart 
                            data={serviceListToday}
                        />
                        </div>
                        <div className="main-currency">
                            <h3 className="main-currency-value main-currency-title">TimeCurrency</h3>
                            <h5  className="main-currency-value">Total Remaining: 100</h5>
                            <h5  className="main-currency-value">Total Earning: 100</h5>
                            <h5  className="main-currency-value">Current TimeCurrency: 100</h5>
                            <img className="main-image" src={clock1} alt="hey" />
                        </div>
                    
                        <h3 className="main-dailysummary">Want to write daily summary? 👉</h3>
                        <form className="main-summary">
                            <input className="main-summary-title" type={"text"} placeholder="Title"/>
                            <textarea  className="main-summary-text" type={"text"} placeholder="Take a note...."/>
                            <input className="main-summary-save" type="submit" value="Save" />
                        </form>
                  
                        <h2 className="main-tomorrow">It is the right time to make tomorrow`s plan</h2>
                        <form  className="main-plan">
                            <input className="main-summary-title" type={"text"} placeholder="Title"/>
                            <textarea  className="main-summary-text" type={"text"} placeholder="Take a note...."/>
                            <input className="main-summary-save" type="submit" value="Save" />
                        </form>
                        <div className="main-plan-form">
                            
                        <Mainform 
                            serviceList = {serviceListTomorrow}
                            setServiceList = {setServiceListTomrrow}
                        />
                    </div>
                    
            </div>
        </div>
    )
}
