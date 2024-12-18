"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Импорт useRouter
import "./calendar.module.css";

export default function calendar() {
  const month = "Ноябрь, 2024";

  const [workoutDates, setWorkoutDates] = useState([]); // Хранит даты тренировок
  const [loading, setLoading] = useState(true); // Состояние загрузки

  const router = useRouter(); // Инициализация useRouter

  // Получение дат тренировок
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
      } finally {
        setLoading(false);
      }
    };

    fetchWorkouts();
  }, []);

  // Перенаправление на /addworkout
  const redirectToAddWorkout = (day) => {
    const dayFormatted = day < 10 ? `0${day}` : day;
    router.push(`/addworkout?date=${month}-${dayFormatted}`);
  };

  return (
      <div className="container">

        <h1 className="title">ДНЕВНИК КАЧКА</h1>

        <div className="calendar">
          <div className="calendar-header">
            <div className="month">
              {month} <img src="/icons/arrow.png" alt="Arrow" />
            </div>
            <div className="calendar-icon">
              <img src="/icons/calendar_icon.png" alt="Calendar Icon" />
            </div>
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
          <div className="calendar-days">
            {Array.from({ length: 30 }, (_, index) => {
              const day = index + 1;
              return (
                  <div
                      key={day}
                      className={`calendar-day ${
                          workoutDates.includes(`2024-11-${day < 10 ? `0${day}` : day}`)
                              ? "glow"
                              : ""
                      }`}
                      onClick={() => redirectToAddWorkout(day)} // Передача дня в функцию
                      style={{ cursor: "pointer" }} // Изменение курсора на указатель
                  >
                    {day}
                  </div>
              );
            })}
          </div>
        </div>
      </div>
  );
}
