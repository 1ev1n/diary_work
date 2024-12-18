import calendar from '../components/calendar';
import styles from './calendar.css';

async function fetchWorkoutDates() {
  try {
    const res = await fetch('https://your-api-endpoint.com/workout-dates');
    if (!res.ok) {
      throw new Error('Failed to fetch workout dates');
    }
    return await res.json();
  } catch (error) {
    console.error('Error fetching workout dates:', error);
    return [];
  }
}

export default async function CalendarPage() {
  const workoutDates = await fetchWorkoutDates();

  return (
    <div className={styles.frame}>
      <h1 className={styles.title}>Дневник Качка</h1>

      <div className={styles.calendarContainer}>
        <calendar workoutDates={workoutDates} />
      </div>

      <button
        className={styles.addWorkout}
        onClick={() => (window.location.href = '/add_workout')}
      >
        <span className={styles.plus}>
          <img src="/icons/plus.png" alt="Plus Icon" />
        </span>
        Добавить тренировку
      </button>

      <div className={styles.sidebar}>
        <a href="/calendar" className={styles.icon}>
          <img src="/icons/calendar.png" alt="Calendar" />
        </a>
        <a href="/trains" className={styles.icon}>
          <img src="/icons/excercises.png" alt="Trainings" />
        </a>
      </div>
    </div>
  );
}
