import { useState } from "react";

export default function App() {
  const [items, setItems] = useState(["Apple", "Banana", "Cherry"]);
  const handleItemAdd = () => {
    setItems((items) => ["New Item", ...items]);
  };
  return (
    <>
      <ul>
        {items.map((item) => (
          <input key={item} placeholder={item} style={{ display: "block" }} />
        ))}
      </ul>
      <button onClick={handleItemAdd}>추가</button>
    </>
  );
}
