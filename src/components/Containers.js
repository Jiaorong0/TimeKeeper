import React from "react";
import Piechart from "./Piechart";

export default function Containers(props){
    return(
     
            <div className="preview-body">
                <h2 className="preview-title">{props.title}</h2>
               
                    <div className="preview-container"> 
                        <img src={props.img} alt="shocked picture" className="preview-img"></img>
                        <p className="preview-p">{props.content}</p>
                    </div>  
               
                <div className="preview-chart">
                    <Piechart 
                        data = {props.data}
                        />
                 </div>     
              
             </div>
    )
}