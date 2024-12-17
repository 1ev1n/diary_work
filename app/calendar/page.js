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
          <Link href={handleDayClick(26)}><div className="not-current-m">26</div></Link>
          <Link href={handleDayClick(27)}><div className="not-current-m">27</div></Link>
          <Link href={handleDayClick(28)}><div className="not-current-m">28</div></Link>
          <Link href={handleDayClick(29)}><div className="not-current-m">29</div></Link>
          <Link href={handleDayClick(30)}><div className="not-current-m">30</div></Link>
          <Link href={handleDayClick(1)}><div>1</div></Link>
          <Link href={handleDayClick(2)}><div>2</div></Link>
          <Link href={handleDayClick(3)}><div>3</div></Link>
          <Link href={handleDayClick(4)}><div>4</div></Link>
          <Link href={handleDayClick(5)}><div>5</div></Link>
          <Link href={handleDayClick(6)}><div>6</div></Link>
          <Link href={handleDayClick(7)}><div>7</div></Link>
          <Link href={handleDayClick(8)}><div>8</div></Link>
          <Link href={handleDayClick(9)}><div>9</div></Link>
          <Link href={handleDayClick(10)}><div className="current-day">10</div></Link>
          <Link href={handleDayClick(11)}><div>11</div></Link>
          <Link href={handleDayClick(12)}><div>12</div></Link>
          <Link href={handleDayClick(13)}><div>13</div></Link>
          <Link href={handleDayClick(14)}><div>14</div></Link>
          <Link href={handleDayClick(15)}><div>15</div></Link>
          <Link href={handleDayClick(16)}><div>16</div></Link>
          <Link href={handleDayClick(17)}><div>17</div></Link>
          <Link href={handleDayClick(18)}><div>18</div></Link>
          <Link href={handleDayClick(19)}><div>19</div></Link>
          <Link href={handleDayClick(20)}><div>20</div></Link>
          <Link href={handleDayClick(21)}><div>21</div></Link>
          <Link href={handleDayClick(22)}><div>22</div></Link>
          <Link href={handleDayClick(23)}><div>23</div></Link>
          <Link href={handleDayClick(24)}><div>24</div></Link>
          <Link href={handleDayClick(25)}><div>25</div></Link>
          <Link href={handleDayClick(26)}><div>26</div></Link>
          <Link href={handleDayClick(27)}><div>27</div></Link>
          <Link href={handleDayClick(28)}><div>28</div></Link>
          <Link href={handleDayClick(29)}><div>29</div></Link>
          <Link href={handleDayClick(30)}><div>30</div></Link>
          <Link href={handleDayClick(31)}><div>31</div></Link>
          <Link href={handleDayClick(1)}><div className="not-current-m">1</div></Link>
          <Link href={handleDayClick(2)}><div className="not-current-m">2</div></Link>
          <Link href={handleDayClick(3)}><div className="not-current-m">3</div></Link>
          <Link href={handleDayClick(4)}><div className="not-current-m">4</div></Link>
          <Link href={handleDayClick(5)}><div className="not-current-m">5</div></Link>
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
