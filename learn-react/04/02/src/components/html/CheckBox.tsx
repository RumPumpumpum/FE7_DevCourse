// type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {
//   type: "checkbox";
// };

// export default function CheckBox(props: InputProps) {
//   const { children = "I Agree", ...rest } = props;

//   return (
//     <>
//       <div className="flex items-center gap-2">
//         <input
//           id="chk"
//           className="appearance-none w-5 h-5 rounded-[5px]
//       border border-[#4f4f4f] checked:bg-[url('/check.svg')]
//       checked:bg-no-repeat checked:bg-center"
//           {...rest}
//         />type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "type">;
// export default function CheckBox(props: InputProps) {
//   const { children = "I Agree", ...rest } = props;
//   return (
//     <>
//       <div className="flex items-center gap-2">
//         <input
//           id="chk"
//           type="checkbox"
//           className="appearance-none w-5 h-5 rounded-[5px] border border-[#4f4f4f] bg-[#4F4F4F] checked:bg-[url('/check.svg')] checked:bg-no-repeat checked:bg-center"
//           {...rest}
//         />
//         <label htmlFor="chk">{children}</label>
//       </div>
//     </>
//   );
// }
//         <label htmlFor="chk">{children}</label>
//       </div>
//     </>
//   );
// }

type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "type">;
export default function CheckBox(props: InputProps) {
  const { children = "I Agree", ...rest } = props;
  return (
    <>
      <div className="flex items-center gap-2">
        <input
          id="chk"
          type="checkbox"
          className="appearance-none w-5 h-5 rounded-[5px] border border-[#4f4f4f] bg-[#4F4F4F] checked:bg-[url('/check.svg')] checked:bg-no-repeat checked:bg-center"
          {...rest}
        />
        <label htmlFor="chk">{children}</label>
      </div>
    </>
  );
}
