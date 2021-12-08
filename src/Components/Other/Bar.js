import React from "react";
import {CartesianGrid, Tooltip, ResponsiveContainer, XAxis, YAxis, BarChart, Bar, LabelList} from 'recharts'

const info = [
    {
        name : "Data Analysis",
        GPA_Percentage: 100
    },
    {
        name: "Statisitcs",
        GPA_Percentage: 100
    },
    {
        name: "Calculus",
        GPA_Percentage: 100
    },
    {
        name : "Discrete Maths",
        GPA_Percentage: 98.5
    },
    {
        name: "Databases",
        GPA_Percentage: 96.5
    },
    {
        name: "Computer Programming",
        GPA_Percentage: 96.9
    },
    {
        name: "Linear Algebra",
        GPA_Percentage: 97.2
    },

    {
        name : "Data Science",
        GPA_Percentage: 96.7
    },
]
export default function NewBar() {

    return (
        <div>
            <ResponsiveContainer width="100%" aspect={3}>
              
                <BarChart width = {300} height = {500} data={info}>
                    <CartesianGrid strokeDasharray="4" />
                    <XAxis interval = {'preserveStartEnd'} dataKey ="name"/>
                    <YAxis domain={[90, 'dataMax']}/>

                    <Tooltip contentStyle={{backgroundColor:"white"}}/>
                    <Bar fill="orange" dataKey = "GPA_Percentage">
                        <LabelList dataKey="GPA_Percentage" position="center" />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}