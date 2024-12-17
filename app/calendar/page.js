import Link from 'next/link';
import './calendar.css';

export default function Calendar() {
  const month = 'Ноябрь, 2024';

  const handleDayClick = (day) => {
    const dayFormatted = day < 10 ? `0${day}` : day;
    return `/add_workout?date=${month}-${dayFormatted}`;
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
          <Link href="/addworkout"><div className="not-current-m">25</div></Link>
          <Link href="/addworkout"><div className="not-current-m">26</div></Link>
          <Link href="/addworkout"><div className="not-current-m">27</div></Link>
          <Link href="/addworkout"><div className="not-current-m">28</div></Link>
          <Link href="/addworkout"><div className="not-current-m">29</div></Link>
          <Link href="/addworkout"><div className="not-current-m">30</div></Link>
          <Link href="/addworkout"><div>1</div></Link>
          <Link href="/addworkout"><div>2</div></Link>
          <Link href="/addworkout"><div>3</div></Link>
          <Link href="/addworkout"><div>4</div></Link>
          <Link href="/addworkout"><div>5</div></Link>
          <Link href="/addworkout"><div>6</div></Link>
          <Link href="/addworkout"><div>7</div></Link>
          <Link href="/addworkout"><div>8</div></Link>
          <Link href="/addworkout"><div>9</div></Link>
          <Link href="/addworkout"><div className="current-day">10</div></Link>
          <Link href="/addworkout"><div>11</div></Link>
          <Link href="/addworkout"><div>12</div></Link>
          <Link href="/addworkout"><div>13</div></Link>
          <Link href="/addworkout"><div>14</div></Link>
          <Link href="/addworkout"><div>15</div></Link>
          <Link href="/addworkout"><div>16</div></Link>
          <Link href="/addworkout"><div>17</div></Link>
          <Link href="/addworkout"><div>18</div></Link>
          <Link href="/addworkout"><div>19</div></Link>
          <Link href="/addworkout"><div>20</div></Link>
          <Link href="/addworkout"><div>21</div></Link>
          <Link href="/addworkout"><div>22</div></Link>
          <Link href="/addworkout"><div>23</div></Link>
          <Link href="/addworkout"><div>24</div></Link>
          <Link href="/addworkout"><div>25</div></Link>
          <Link href="/addworkout"><div>26</div></Link>
          <Link href="/addworkout"><div>27</div></Link>
          <Link href="/addworkout"><div>28</div></Link>
          <Link href="/addworkout"><div>29</div></Link>
          <Link href="/addworkout"><div>30</div></Link>
          <Link href="/addworkout"><div>31</div></Link>
          <Link href="/addworkout"><div className="not-current-m">1</div></Link>
          <Link href="/addworkout"><div className="not-current-m">2</div></Link>
          <Link href="/addworkout"><div className="not-current-m">3</div></Link>
          <Link href="/addworkout"><div className="not-current-m">4</div></Link>
          <Link href="/addworkout"><div className="not-current-m">5</div></Link>
        </div>
      </div>
      <button className="add-workout">
        <span className="plus">
          <img src="/icons/plus.png" alt="Plus Icon" />
        </span>{' '}
        Добавить тренировку
      </button>

      <div className="sidebar-gradient">
        <Link href="/calendar" className="icon">
          <img src="/icons/calendar.png" alt="Calendar" />
        </Link>
        <Link href="/trains" className="icon">
          <img src="/icons/excercises.png" alt="Trainings" />
        </Link>
      </div>

    </div>
  );
}
