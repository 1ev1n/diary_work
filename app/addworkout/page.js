"use client";

import { useState } from 'react';
import styles from './addworkout.css';

export default function AddWorkoutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [exercise, setExercise] = useState("");


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setExercise("");
  };

  return (
    <div className='frame'>
      <div className={styles.container}>
        <h1 className={styles.title}>ДНЕВНИК КАЧКА</h1>
        <div className={styles.containerBackground}>
          {/* Заголовок страницы с кнопкой назад */}
          <div className={styles.newTrainHeader}>
            <a href="/calendar">
              <img src="/icons/arrow_back.png" className={styles.backArrow} alt="Назад" />
            </a>
            <h2 className={styles.date}>10 Ноября, 2024</h2>
          </div>

          {/* Кнопка добавления цели */}
          <span className={styles.addGoal}>
            <img src="/icons/cross.png" alt="" /> Добавить цель
          </span>

          {/* Список упражнений */}
          <div className={`${styles.scrollContainer} ${styles.exerciseList}`}>
            {["Жим лёжа", "Бицепс", "Ягодичный мост", "Жим лёжа", "Бицепс", "Ягодичный мост"].map((exerciseName, index) => (
              <div key={index} className={styles.exerciseItem}>
                <div className={styles.exerciseName}>{exerciseName}</div>
                <div className={styles.removeButton}>
                  <img src="/icons/cross.png" alt="Удалить" />
                </div>
              </div>
            ))}
          </div>

          {/* Кнопка добавления упражнения */}
          <span className={styles.addExercise} onClick={openModal}>
            <img src="/icons/cross.png" alt="" /> Добавить упражнение
          </span>

          {/* Кнопки "Очистить" и "Сохранить" */}
          <div className={styles.buttonsContainer}>
            <button className={styles.clearButton}>Очистить</button>
            <button className={styles.saveButton}>Сохранить</button>
          </div>
        </div>

        {/* Модальное окно */}
        {isModalOpen && (
          <div className={styles.modal} onClick={closeModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <input
                type="text"
                placeholder="Название упражнения"
                value={exercise}
                onChange={(e) => setExercise(e.target.value)}
                className={styles.inputField}
              />
              <input
                type="text"
                placeholder="Рабочий вес:"
                className={styles.inputField}
              />
              <input
                type="text"
                placeholder="Кол-во повторений:"
                className={styles.inputField}
              />
              <button className={styles.saveButton} onClick={closeModal}>
                Сохранить
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
