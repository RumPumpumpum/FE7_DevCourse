export default function Input(props: { txt: string }) {
  return (
    <>
      <input
        type="text"
        placeholder={props.txt}
        className="w-[240px] h-[44px] px-4 py-2 border rounded-md "
      ></input>
    </>
  );
}
