"use client"; // Указываем, что это клиентский компонент

import { useState } from 'react';
import styles from './addworkout.css';

export default function AddWorkoutPage() {
  const [exercise, setExercise] = useState("");

  return (
    <div>
      <h1>Добавить упражнение</h1>
      <input 
        type="text" 
        placeholder="Название упражнения" 
        value={exercise} 
        onChange={(e) => setExercise(e.target.value)} 
      />
      <button onClick={() => alert(`Упражнение добавлено: ${exercise}`)}>Добавить</button>
    </div>
  );




  // Открытие модального окна
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Закрытие модального окна
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ДНЕВНИК КАЧКА</h1>
      <div className={styles.containerBackground}>
        <div className={styles.newTrainHeader}>
          <a href="/calendar">
            <img src="/pics/Назад.png" className={styles.backArrow} alt="Назад" />
          </a>
          <h2 className={styles.date}>10 Ноября, 2024</h2>
        </div>
        <span className={styles.addGoal}>
          <img src="/pics/Иконка плюс.png" alt="" /> Добавить цель
        </span>
        <div className={styles.scrollContainer}>
          <div className={styles.exerciseItem}>
            <div className={styles.exerciseName}>Жим лёжа</div>
            <div className={styles.removeButton}>
              <img src="/pics/Иконка плюс.png" alt="" />
            </div>
          </div>
          <div className={styles.exerciseItem}>
            <div className={styles.exerciseName}>Бицепс</div>
            <div className={styles.removeButton}>
              <img src="/pics/Иконка плюс.png" alt="" />
            </div>
          </div>
          <div className={styles.exerciseItem}>
            <div className={styles.exerciseName}>Ягодичный мост</div>
            <div className={styles.removeButton}>
              <img src="/pics/Иконка плюс.png" alt="" />
            </div>
          </div>
          <div className={styles.exerciseItem}>
            <div className={styles.exerciseName}>Жим лёжа</div>
            <div className={styles.removeButton}>
              <img src="/pics/Иконка плюс.png" alt="" />
            </div>
          </div>
          <div className={styles.exerciseItem}>
            <div className={styles.exerciseName}>Бицепс</div>
            <div className={styles.removeButton}>
              <img src="/pics/Иконка плюс.png" alt="" />
            </div>
          </div>
          <div className={styles.exerciseItem}>
            <div className={styles.exerciseName}>Ягодичный мост</div>
            <div className={styles.removeButton}>
              <img src="/pics/Иконка плюс.png" alt="" />
            </div>
          </div>
        </div>
        <span className={styles.addExercise} onClick={openModal}>
          <img src="/pics/Иконка плюс.png" alt="" /> Добавить упражнение
        </span>
        <div className={styles.buttonsContainer}>
          <button className={styles.clearButton}>Очистить</button>
          <button className={styles.saveButton}>Сохранить</button>
        </div>
      </div>

      {/* Модальное окно */}
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <input type="text" placeholder="Какой-то жим" />
            <input type="text" placeholder="Рабочий вес:" />
            <input type="text" placeholder="Кол-во повторений:" />
            <button className={styles.saveButton} onClick={closeModal}>
              Сохранить
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
