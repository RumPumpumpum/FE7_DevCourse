// export를 했을 경우, 해당 컴포넌트에서 import를 해줘야함

interface UserProps {
  userObj: { name: string; age: number };
  clickHandler: () => void;
}
