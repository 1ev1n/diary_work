'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; 
import "./calendar_component.css";

export default function CalendarComponent({ month, year }) {
    const [workoutDates, setWorkoutDates] = useState([]);
    const router = useRouter();

    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const currentDate = today.getDate();

    // Получаем индекс месяца
    const monthIndex = new Date(year, month - 1).getMonth();
    const daysInMonth = new Date(year, month, 0).getDate();
    
    // Исправленный индекс первого дня (с учетом начала недели с понедельника)
    const firstDayIndex = (new Date(year, monthIndex, 1).getDay() + 6) % 7;
    
    // Определяем количество дней в предыдущем месяце
    const prevMonthDays = new Date(year, monthIndex, 0).getDate();

    useEffect(() => {
        const fetchWorkouts = async () => {
            try {
                const response = await fetch("/api/workouts");
                if (response.ok) {
                    const data = await response.json();
                    const validDates = data.map((workout) => {
                        const date = new Date(workout.date);
                        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
                    });
                    setWorkoutDates(validDates);
                } else {
                    console.error("Не удалось получить данные о тренировках");
                }
            } catch (error) {
                console.error("Ошибка при получении данных о тренировках:", error);
            }
        };

        fetchWorkouts();
    }, []);

    const redirectToAddWorkout = (day) => {
        const dayFormatted = day < 10 ? `0${day}` : day;
        router.push(`/addworkout?date=${year}-${String(monthIndex + 1).padStart(2, "0")}-${dayFormatted}`);
    };

    return (
        <div className="calendar">
            <div className="calendar-header">
                <div className="month">
                    {month} {year} <img src="/icons/arrow.png" alt="Arrow" />
                </div>
                <div className="calendar-icon">
                    <img src="/icons/calendar_icon.png" alt="Calendar Icon" />
                </div>
                <div className="calendar-weekdays">
                    <div>Пн</div>
                    <div>Вт</div>
                    <div>Ср</div>
                    <div>Чт</div>
                    <div>Пт</div>
                    <div>Сб</div>
                    <div>Вс</div>
                </div>
            </div>

            <div className="calendar-days">
                {/* Дни прошлого месяца */}
                {Array.from({ length: firstDayIndex }).map((_, index) => (
                    <div key={`prev-${index}`} className="calendar-day not-current-month">
                        {prevMonthDays - firstDayIndex + index + 1}
                    </div>
                ))}

                {/* Дни текущего месяца */}
                {Array.from({ length: daysInMonth }, (_, index) => {
                    const day = index + 1;
                    const dateString = `${year}-${String(monthIndex + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

                    return (
                        <div
                            key={day}
                            className={`calendar-day 
                                ${workoutDates.includes(dateString) ? "glow" : ""} 
                                ${currentYear === year && currentMonth === monthIndex && currentDate === day ? "today" : ""}
                            `}
                            onClick={() => redirectToAddWorkout(day)}
                        >
                            {day}
                        </div>
                    );
                })}

                {/* Дни следующего месяца (до 42 ячеек в таблице) */}
                {Array.from({ length: 42 - (firstDayIndex + daysInMonth) }).map((_, index) => (
                    <div key={`next-${index}`} className="calendar-day not-current-month">
                        {index + 1}
                    </div>
                ))}
            </div>
        </div>
    );
}
