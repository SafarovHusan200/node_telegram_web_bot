import Card from "./components/card/card";
import { getData } from "./constants/db";
import "./App.css";
import Cart from "./components/cart/cart";
import { useEffect, useState } from "react";
const courses = getData();

const telegram = window.Telegram.WebApp;

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    telegram.ready();
  }, []);

  const onAddItem = (item) => {
    const existItem = cartItems.find((c) => c.id === item.id);

    if (existItem) {
      const newData = cartItems.map((c) =>
        c.id == item.id ? { ...existItem, quantity: existItem.quantity + 1 } : c
      );
      console.log("Add_Quantity_Exist_Item", newData);

      setCartItems(newData);
    } else {
      const newData = [...cartItems, { ...item, quantity: 1 }];
      console.log("Add_Item", newData);
      setCartItems(newData);
    }
  };

  const onRemoveItem = (item) => {
    const existItem = cartItems.find((c) => c.id == item.id);

    if (existItem.quantity === 1) {
      const newData = cartItems.filter((c) => c.id !== existItem.id);
      console.log(newData);
      setCartItems(newData);
    } else {
      const newData = cartItems.map((c) =>
        c.id === existItem.id
          ? { ...existItem, quantity: existItem.quantity - 1 }
          : c
      );
      console.log(newData);
      setCartItems(newData);
    }
  };

  const onCheckout = () => {
    telegram.MainButton.text = "Sotib olish :)";
    telegram.MainButton.show();
  };

  return (
    <div>
      <h1 className="heading">Sammi kurslari</h1>

      <Cart cartItems={cartItems} onCheckout={onCheckout} />

      <div className="cards__container">
        {courses.map((course) => (
          <>
            <Card
              course={course}
              key={course.id}
              onAddItem={onAddItem}
              onRemoveItem={onRemoveItem}
            />
          </>
        ))}
      </div>
    </div>
  );
}