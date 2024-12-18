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
      <div className="frame">

        <h1 className="title">ДНЕВНИК КАЧКА</h1>

        <div className="container">
          
          {/* Заголовок страницы */}
          <div className="header">
            <a href="/calendar">
              <img src="/icons/arrow_back.png" className="back-arrow-icon" alt="Назад" />
            </a>
            <h2 className="header-date">10 Ноября, 2024</h2>
          </div>

          {/* Сообщение об успехе/ошибке вне модального окна */}
          {message && <p className={styles.message}>{message}</p>}

          {/* Список упражнений */}
          <div className="scroll-container">
            {["Жим лёжа", "Бицепс", "Ягодичный мост"].map((exerciseName, index) => (
                <div key={index} className="excercise-item">
                  <div className={styles.exerciseName}>{exerciseName}</div>
                  <div className="remove-button">
                    <img src="/icons/cross.png" alt="Удалить" />
                  </div>
                </div>
            ))}
          </div>

          {/* Кнопка добавления упражнения */}
          <span className="add-excercise" onClick={openModal}>
            <img src="/icons/plus.png" alt="" /> Добавить упражнение
          </span>

          {/* Модальное окно с формой */}
          {isModalOpen && (
              <div className="modal" onClick={closeModal}>
                <div className="modalContent" onClick={(e) => e.stopPropagation()}>
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
                          className="inputField"
                      />
                    </div>
                    <div>
                      <label>Дата:</label>
                      <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          className="inputField"
                      />
                    </div>
                    <div>
                      <label>Название:</label>
                      <input
                          type="text"
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          className="inputField"
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
                          className="inputField"
                      />
                    </div>
                    <button type="submit" className="saveButton">
                      Добавить тренировку
                    </button>
                  </form>
                </div>
              </div>
          )}

          {/* Кнопки "Очистить" и "Сохранить" */}
          <div className="buttons-container">
            <button className="clear-button">Очистить</button>
            <button className="save-button">Сохранить</button>
          </div>
        </div>
      </div>
  );
}
