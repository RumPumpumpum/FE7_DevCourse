import Input from "./components/html/Input";
import Button from "./components/html/Button";
import CheckBox from "./components/html/CheckBox";

export default function App() {
  return (
    <>
      <div className="center">
        <Input type="text" placeholder="Enter Todo List" />
        <Button className="bg-[#4F4F4F]">Add</Button>
        <Button className="bg-[#ED4848]">Cancel</Button>
        <Button className="bg-[#7D48ED]">Success</Button>
        <CheckBox>
          <span>
            I agree with <strong>terms</strong> and <strong>policies.</strong>
          </span>
        </CheckBox>
      </div>
    </>
  );
}
