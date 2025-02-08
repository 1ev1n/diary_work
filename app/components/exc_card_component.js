"use client";

import { useRouter } from "next/navigation";
import PropTypes from "prop-types";
import "./exc_card_component.css";

export default function ExerciseCard({ image, title }) {
  const router = useRouter();

  return (
    <div
      className="exercise-card"
      style={{ backgroundImage: `url('${image}')` }}
      onClick={() => router.push("/exercise")}
    >
      <div className="exercise-text">{title}</div>
    </div>
  );
}

ExerciseCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
