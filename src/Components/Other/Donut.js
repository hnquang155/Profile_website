import React from "react";
import {ResponsiveContainer,  RadialBar,RadialBarChart, Legend } from 'recharts'

let renderLabel = function(entry) {
    return entry.name ;
}
const info = [
    {name : "My GPA ", value : 4.15 , fill: "#025955", position: "inside"},
    {name : "Average GPA", value : 3.3 , fill: "#8E0505", position: "outside"},
  
]
export default function Donut() {

    return (
        <div>
            <ResponsiveContainer width="60%" height = "100%" aspect={1}>
                <RadialBarChart width={800} height={300}  innerRadius="50%"  outerRadius="80%"  data={info} startAngle={90} endAngle={-270}>

                <RadialBar minAngle={15} label={{ fill: 'white', position: 'insideStart'  }} background clockWise={true} dataKey='value' fill='fill' />
                <Legend iconSize={20}  />    
                           
            
                </RadialBarChart>
            </ResponsiveContainer>

            
        </div>
    )
}