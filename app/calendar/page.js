'use client';

import Link from 'next/link';
import CalendarComponent from '../components/calendar_component';
import Sidebar from '../components/sidebar_component'; 
import "./calendar.css";

const today = new Date();
const currentMonth = today.toLocaleString("ru-RU", { month: "long" });
const currentYear = today.getFullYear();

export default function Calendar() {
    return (
        <div className="frame">
            <h1 className="title">ДНЕВНИК КАЧКА</h1>
            <CalendarComponent month={currentMonth} year={currentYear} />
            <Sidebar /> 
        </div>
    );
}