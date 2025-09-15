import First from "./components/First";
import Second from "./components/Second";
import style from "./App.module.css";
import classNames from "classnames/bind";

export default function App() {
  const isCancel = true;
  const cx = classNames.bind(style);
  return (
    <>
      <h1
        style={{
          color: "red",
          fontSize: "20px",
          textDecoration: "line-through",
        }}
      >
        App Component
      </h1>
      <h2 className="title">External Style</h2>
      <First />
      <Second />
      {/* 일반 문법 */}
      <h1 className={`${style.red_c} ${isCancel ? style.line_through : ""}`}>
        CSS Modules
      </h1>
      {/* classNames 문법 */}
      <h1 className={cx("red_c", { line_through: isCancel })}>
        CSS modules:classNames
      </h1>
    </>
  );
}
