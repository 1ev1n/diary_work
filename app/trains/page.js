import Sidebar from "../components/sidebar_component";
import ExerciseCard from "../components/exc_card_component";
import "./trains.css";

export default function Trains() {
  const exercises = [
    { href: "/exercise", image: "/images/most.png", title: "Мост" },
    { href: "/exercise", image: "/images/most.png", title: "Мост" },
    { href: "/exercise", image: "/images/plech.png", title: "Плечи" },
    { href: "/exercise", image: "/images/bitseps.png", title: "Бицепс" },
    { href: "/exercise", image: "/images/skruch.png", title: "Скручивания" },
    { href: "/exercise", image: "/images/zhim.png", title: "Жим лёжа" },
    { href: "/exercise", image: "/images/planka.png", title: "Планка" },
    { href: "/exercise", image: "/images/most.png", title: "Мост" },
    { href: "/exercise", image: "/images/plech.png", title: "Плечи" },
  ];

  return (
    <div className="frame">
      <h1 className="title">ДНЕВНИК КАЧКА</h1>

      <div className="scroll-container">
        {exercises.map((exercise, index) => (
          <ExerciseCard
            key={index}
            href={exercise.href}
            image={exercise.image}
            title={exercise.title}
          />
        ))}
      </div>

      <Sidebar />
    </div>
  );
}
