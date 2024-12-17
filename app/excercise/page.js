
import Link from "next/link";
import './/excercise.css';


export default function Exercise() {
  return (
    <div className="container-disc">
      {/* Кнопка назад */}
      <Link href="/trains" className="back-button">
        <img src="/icons/arrow_back.png" alt="Назад" />
      </Link>

      {/* Изображение упражнения */}
      <img
        src="/images/zhim.png"
        alt="Жим Лёжа"
        className="exercise-image"
      />

      {/* Основные характеристики */}
      <div className="stats">
        <div className="stat">
          <img src="/icons/time.png" alt="Повторы" />
          <span>1 повтор</span>
        </div>
        <div className="stat">
          <img src="/icons/callories.png" alt="Калории" />
          <span>2,5 ккал</span>
        </div>
      </div>

      {/* Контейнер с основной информацией */}
      <div className="container-mini">
        <div className="exercise-tint">
          <h2 className="exercise-title">Жим лёжа</h2>
          <p className="exercise-description">
            Жим лёжа считается одним из основных упражнений в бодибилдинге и
            силовом тренинге, и часто используется для оценки силы верхней
            части корпуса.
          </p>
        </div>

        {/* Группы мышц */}
        <div className="muscle-groups">
          <h3 className="muscle-title">Группы мышц:</h3>
          <ul>
            <li>Грудные мышцы</li>
            <li>Дельтовидные мышцы</li>
            <li>Трицепсы</li>
          </ul>
          <img
            src="/images/group-mish.png"
            alt="Группы мышц"
            className="muscle-image"
          />
        </div>

        {/* Техника выполнения */}
        <h3 className="technique-title">Техника выполнения упражнения</h3>
        <p className="technique-description">
          Для выполнения жима лёжа лягте на горизонтальную скамью, так чтобы
          глаза находились прямо под штангой. Установите ноги на пол, сохраняя
          их в устойчивом положении. Возьмитесь за штангу хватом чуть шире
          плеч, снимите её со стоек, опустите на уровень груди, затем
          энергично выжмите вверх.
        </p>
      </div>
    </div>
  );
}
