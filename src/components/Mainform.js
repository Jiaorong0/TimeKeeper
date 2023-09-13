import React from "react";

export default function Mainform(props){

    const addServices=()=>{
        props.setServiceList([...props.serviceList,{service:'', time:''}]) 
    }
    const removeService=(index)=>{
        const list=[...props.serviceList];
        list.splice(index,1);
        props.setServiceList(list);
    }
    const changeService =(e,index)=>{
        const{name, value} = e.target;
        const list=[...props.serviceList];
        list[index][name]=value;
        props.setServiceList(list)     
    }
    /* e is the event object that is passed to the event handler function when an event is triggered. In this case, e represents the onChange event that is triggered when the value of an input element changes.

    The target property of the event object refers to the DOM element that triggered the event. In this case, it refers to the input element that the user interacted with to trigger the onChange event. 
    
    For example, if the user types something into the first input element (the one with name="service"), then e.target will refer to that input element. You can access its properties such as name and value using dot notation like this: e.target.name and e.target.value.*/

    return(
        <form className="main-form " action="" method="POST" autoComplete="off" >
            {props.serviceList.map((singleService,index)=>( 
                <div key={index}>
                    <div className="main-form-container">
                        <input className="main-input-lable" name="service" type="text" placeholder="Activity"
                        value={singleService.service} 
                        onChange = {e=>changeService(e,index)} maxLength = "100" />
                        <input className="main-input" name="time" type="text" placeholder="hours" 
                        value={singleService.time}
                        onChange = {e=>changeService(e,index)}/>

                        {props.serviceList.length > 1 && <button type="button" className="main-input-delete" 
                        onClick={() => removeService(index)}>Delete</button> }
                    </div>
                    {(props.serviceList.length-1 === index && props.serviceList.length < 11)  && <button type="button" className="main-input-add"
                    onClick={addServices}>Add</button>}
                </div>    
            ))}
            <input className="main-input-btn" type="submit" value="Save" /> 
        </form>
    )
}