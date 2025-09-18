type InputProps = React.ComponentPropsWithoutRef<"input"> & {
  type: "text" | "password" | "email" | "number" | "date";
};

export default function Input(props: InputProps) {
  const { ...rest } = props;
  return (
    <>
      <input
        className="inter w-60 h-11 text-sm rounded-lg placeholder:text-[#acacac] bg-white
      border border-[#4f4f4f] px-4"
        {...rest}
      />
    </>
  );
}
