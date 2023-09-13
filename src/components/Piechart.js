import React from "react";
import Plot from 'react-plotly.js'

export default function Piechart(props){
    return(
        <Plot
                 let data = {[{
                    values: props.data.map((category)=>{
                      return parseInt(category.time);
                    }),
                    labels: props.data.map((category)=>{
                      return category.service;
                    }),
                    textinfo: "label+percent",
                    textposition: 'outside',
                    marker: {
                        colors: [ 'rgb(80, 110, 104)', 'rgb(107, 144, 128)', 'rgb(164, 195, 178)', 'rgb(204, 227, 222)', 'rgb(234, 244, 244)',
                        'rgb(246, 255, 248)']
                      },
                    hole: .4,
                    type: 'pie',
        
                  }]}
                  
                  layout = {{
                    height: 350,
                    width: 350,
                    showlegend: false,
                    paper_bgcolor: 'rgba(0,0,0,0)',
                    plot_bgcolor: 'rgba(0,0,0,0)',
                  }}
                  config={ {displayModeBar: false } }         
        />        
    )
}
