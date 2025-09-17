// import User from "./components/User";
import Profile from "./components/Profile";
import Child from "./components/Child";

export default function App() {
  // const userObj = {
  //   name: "kim",
  //   age: 20,
  // };

  const profileObj = {
    cardImg:
      "https://images.pexels.com/photos/158251/forest-the-sun-morning-tucholskie-158251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    profImg:
      "https://cdn.pixabay.com/photo/2024/11/08/12/57/cat-9183327_1280.jpg",
    alias: "KIM",
    userId: "@KIM0421",
  };

  const clickHandler = () => {
    console.log("clicked!");
  };

  // const Style = {
  //   fontSize: "50px",
  //   color: "red",
  // };

  const Header = () => <h1>Header</h1>;

  return (
    <>
      {/* <User userObj={userObj} clickHandler={clickHandler} /> */}
      <Profile {...profileObj} clickHandler={clickHandler} />
      <Child Header={<Header />} />
    </>
  );
}
