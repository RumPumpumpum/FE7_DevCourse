import type { SetStateAction, Dispatch } from "react";

type InputProps = Omit<React.ComponentPropsWithRef<"input">, "value"> & {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

export default function Input(props: InputProps) {
  const { value, setValue, ref, ...rest } = props;
  return (
    <>
      <input
        {...rest}
        ref={ref}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
}
