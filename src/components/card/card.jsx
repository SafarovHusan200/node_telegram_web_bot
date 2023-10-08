import { useEffect, useState } from "react";
import Button from "../button/button";
import "./card.css";

export default function Card({ course, onAddItem, onRemoveItem }) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
    onAddItem(course);
  };
  const handleDecrement = () => {
    if (count !== 0) {
      setCount((prev) => prev - 1);
      onRemoveItem(course);
    }
  };

  useEffect(() => {
    console.log(count);
  }, [count]);
  return (
    <div className="card">
      <span className={`${count !== 0 ? "card__badge" : "card__badge-none"}`}>
        {count}
      </span>

      <div className="image__container">
        <img
          src={course.Image}
          alt={course.title}
          width={"350px"}
          height={"230px"}
        />
      </div>

      <div className="card__body">
        <h2 className="card__title">{course.title}</h2>
        <div className="card__price">${course.price}</div>
      </div>

      <div className="hr"></div>

      <div className="btn__container">
        <Button title={"+"} type={"add"} onClick={handleIncrement} />
        {count !== 0 && (
          <Button title={"-"} type={"remove"} onClick={handleDecrement} />
        )}
      </div>
    </div>
  );
}
