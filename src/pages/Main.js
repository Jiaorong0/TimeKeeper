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
                        {/* the two child components (Mainform and Piechart) do not directly or indirectly pass information to each other. They both receive information from their parent component (Main), but they do not communicate with each other.

                        However, the Mainform component can indirectly affect the data displayed by the Piechart component by updating the serviceListToday state in the Main component. The Mainform component receives a function named setServiceList as a prop from the Main component. This function allows the Mainform component to update the serviceListToday state in the Main component.

                        When the serviceListToday state is updated in the Main component, it triggers a re-render of the Main component and its child components. This means that the new value of the serviceListToday state will be passed down to both the Mainform and Piechart components as props. So any changes made to the serviceListToday state by the Mainform component will be reflected in both the Mainform and Piechart components.

                        In this way, the Mainform component can indirectly affect the data displayed by the Piechart component by updating the shared state (serviceListToday) in their parent component (Main). But the two child components do not directly pass information to each other. */}
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