import React from 'react';
import { BsFillPeopleFill, BsFillFileEarmarkTextFill, BsFillBarChartFill, BsFillBellFill } from 'react-icons/bs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

function Home() {
    
    const data = [
        { name: 'Week 1', attendance: 85, averageGrade: 75 },
        { name: 'Week 2', attendance: 90, averageGrade: 80 },
        { name: 'Week 3', attendance: 78, averageGrade: 70 },
        { name: 'Week 4', attendance: 88, averageGrade: 85 },
        { name: 'Week 5', attendance: 95, averageGrade: 90 },
    ];

    
    const students = [
        { id: 1, name: 'John Doe', grade: 'A' },
        { id: 2, name: 'Jane Smith', grade: 'B' },
        { id: 3, name: 'Alex Johnson', grade: 'C' },
        { id: 4, name: 'Emily Davis', grade: 'B+' },
        { id: 5, name: 'Michael Brown', grade: 'A-' },
    ];

    return (
        <main className='main-container'>
            <div className='main-title'>
                <h3>TEACHER DASHBOARD</h3>
            </div>

            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>STUDENTS</h3>
                        <BsFillPeopleFill className='card_icon' />
                    </div>
                    <h1>150</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>ASSIGNMENTS</h3>
                        <BsFillFileEarmarkTextFill className='card_icon' />
                    </div>
                    <h1>20</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>AVG GRADE</h3>
                        <BsFillBarChartFill className='card_icon' />
                    </div>
                    <h1>82%</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>ALERTS</h3>
                        <BsFillBellFill className='card_icon' />
                    </div>
                    <h1>5</h1>
                </div>
            </div>

            <div className='charts'>
                <h4>Student Attendance Over Time</h4>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="attendance" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>

               
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="averageGrade" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>

           
        </main>
    );
}

export default Home;
