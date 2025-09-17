import Input from "./components/html/Input";
import Button from "./components/html/Button";

export default function App() {
  return (
    <>
      <div className="center">
        <Input txt="Enter Todo List" />
        <Button className="bg-amber-300">Button</Button>
        <Button>Button2</Button>
      </div>
    </>
  );
}
