import { twMerge } from "tailwind-merge";

// button 태그에 들어갈 수 있는 모든 속성을 한방에 정하고 싶다!
type ButtonProps = React.ComponentPropsWithoutRef<"button">;

export default function Button(props: ButtonProps) {
  const { children, className = "", ...rest } = props;

  return (
    <>
      <button
        className={twMerge(
          `inter text-sm w-[77px] h-[44px] bg-[#4f4f4f] 
      text-white rounded-lg cursor-pointer`,
          className
        )}
        {...rest}
      >
        {children}
      </button>
    </>
  );
}
