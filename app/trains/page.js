import Link from 'next/link';
import './/trains.css';


export default function Trains() {
  return (
    <div className="frame">
      <h1 className="title">ДНЕВНИК КАЧКА</h1>
      <div className="scroll-container">
        <Link href="/excercise">
            <div
              className="exercise-card"
              style={{ backgroundImage: "url('/images/most.png')" }}
            >
              <div className="exercise-text">Мост</div>
            </div>
        </Link>
        <Link href="/excercise">
            <div
            className="exercise-card"
            style={{ backgroundImage: "url('/images/most.png')" }}
            >
            <div className="exercise-text">Мост</div>
            </div>
        </Link>
        <Link href="/excercise">
            <div
            className="exercise-card"
            style={{ backgroundImage: "url('/images/plech.png')" }}
            >
            <div className="exercise-text">Плечи</div>
            </div>
        </Link>
        <Link href="/excercise">
            <div
            className="exercise-card"
            style={{ backgroundImage: "url('/images/bitseps.png')" }}
            >
            <div className="exercise-text">Бицепс</div>
            </div>
        </Link>
        <Link href="/excercise">
            <div
            className="exercise-card"
            style={{ backgroundImage: "url('/images/skruch.png')" }}
            >
            <div className="exercise-text">Скручивания</div>
            </div>
        </Link>
        <Link href="/excercise">
            <div
            className="exercise-card"
            style={{ backgroundImage: "url('/images/zhim.png')" }}
            >
            <div className="exercise-text">Жим лёжа</div>
            </div>
        </Link>
        <Link href="/excercise">
            <div
            className="exercise-card"
            style={{ backgroundImage: "url('/images/planka.png')" }}
            >
            <div className="exercise-text">Планка</div>
            </div>
        </Link>
        <Link href="/excercise">
            <div
            className="exercise-card"
            style={{ backgroundImage: "url('/images/most.png')" }}
            >
            <div className="exercise-text">Мост</div>
            </div>
        </Link>
        <Link href="/excercise">
            <div
            className="exercise-card"
            style={{ backgroundImage: "url('/images/plech.png')" }}
            >
            <div className="exercise-text">Плечи</div>
            </div>
        </Link>
      </div>

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
