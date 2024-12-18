"use client";

import { useState } from 'react';
import styles from './addworkout.css';

export default function AddWorkoutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState(''); // Сообщение об успешной операции или ошибке вне модального окна
  const [exercise, setExercise] = useState('');

  // Состояние формы для отправки данных о тренировке
  const [formData, setFormData] = useState({
    user_id: '',
    date: '',
    description: '',
    name_workout: '',
  });

  // Открыть/Закрыть модальное окно
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setExercise('');
  };

  // Обработка изменений в полях формы
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Логика отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/workouts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        setMessage('Тренировка успешно добавлена!');
        console.log('Добавленная тренировка:', result);

        setFormData({ user_id: '', date: '', description: '', name_workout: '' }); // Очистить форму
        closeModal(); // Закрыть модальное окно после успешной отправки
      } else {
        const errorData = await response.json();
        setMessage(errorData.error || 'Не удалось добавить тренировку');
      }
    } catch (error) {
      console.error('Ошибка при отправке тренировки:', error);
      setMessage('Произошла ошибка. Пожалуйста, попробуйте снова.');
    }
  };

  return (
      <div className={styles.container}>
        <h1 className={styles.title}>ДНЕВНИК КАЧКА</h1>
        <div className={styles.containerBackground}>
          {/* Заголовок страницы */}
          <div className={styles.newTrainHeader}>
            <a href="/calendar">
              <img src="/icons/arrow_back.png" className={styles.backArrow} alt="Назад" />
            </a>
            <h2 className={styles.date}>10 Ноября, 2024</h2>
          </div>

          {/* Сообщение об успехе/ошибке вне модального окна */}
          {message && <p className={styles.message}>{message}</p>}

          {/* Кнопка добавления упражнения */}
          <span className={styles.addExercise} onClick={openModal}>
          <img src="/icons/cross.png" alt="" /> Добавить упражнение
        </span>

          {/* Список упражнений */}
          <div className={`${styles.scrollContainer} ${styles.exerciseList}`}>
            {["Жим лёжа", "Бицепс", "Ягодичный мост"].map((exerciseName, index) => (
                <div key={index} className={styles.exerciseItem}>
                  <div className={styles.exerciseName}>{exerciseName}</div>
                  <div className={styles.removeButton}>
                    <img src="/icons/cross.png" alt="Удалить" />
                  </div>
                </div>
            ))}
          </div>

          {/* Модальное окно с формой */}
          {isModalOpen && (
              <div className={styles.modal} onClick={closeModal}>
                <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                  <h2>Добавить тренировку</h2>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <label>User ID:</label>
                      <input
                          type="number"
                          name="user_id"
                          value={formData.user_id}
                          onChange={handleChange}
                          required
                          className={styles.inputField}
                      />
                    </div>
                    <div>
                      <label>Date:</label>
                      <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          className={styles.inputField}
                      />
                    </div>
                    <div>
                      <label>Description:</label>
                      <input
                          type="text"
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          className={styles.inputField}
                      />
                    </div>
                    <div>
                      <label>Workout Name:</label>
                      <input
                          type="text"
                          name="name_workout"
                          value={formData.name_workout}
                          onChange={handleChange}
                          required
                          className={styles.inputField}
                      />
                    </div>
                    <button type="submit" className={styles.saveButton}>
                      Добавить тренировку
                    </button>
                  </form>
                  <button className={styles.clearButton} onClick={closeModal}>
                    Закрыть
                  </button>
                </div>
              </div>
          )}

          {/* Кнопки "Очистить" и "Сохранить" */}
          <div className={styles.buttonsContainer}>
            <button className={styles.clearButton}>Очистить</button>
            <button className={styles.saveButton}>Сохранить</button>
          </div>
        </div>
      </div>
  );
}
