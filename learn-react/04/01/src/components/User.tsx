// export default function User(props: { name: string; age: number }) {
//   const { name, age } = props;
//   return (
//     <>
//       <h1>Name: {name}</h1>
//       <h1>Name: {age}</h1>
//     </>
//   );
// }

// export default function User({
//   userObj: { name, age },
//   clickHandler,
// }: {
//   userObj: {
//     name: string;
//     age: number;
//   };
//   clickHandler: () => void;
// }) {
//   return (
//     <>
//       <h1>Name: {name}</h1>
//       <h1>Name: {age}</h1>
//       <button onClick={clickHandler}> 클릭</button>
//     </>
//   );
// }

/* Uswer.d.ts 에서 컴포넌트 전역적으로, 따로 import 안해도 들어옴 */
// interface UserProps {
//   userObj: { name: string; age: number };
//   clickHandler: () => void;
// }

export default function User({
  userObj: { name, age },
  clickHandler,
}: UserProps) {
  return (
    <>
      <h1>Name: {name}</h1>
      <h1>Name: {age}</h1>
      <button onClick={clickHandler}> 클릭</button>
    </>
  );
}
