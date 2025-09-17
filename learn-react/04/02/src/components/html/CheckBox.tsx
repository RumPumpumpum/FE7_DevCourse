import { twMerge } from "tailwind-merge";

type BoxProps = React.ComponentPropsWithoutRef<"input">;

export default function CheckBox(props: BoxProps) {
  const { children, className = "", ...rest } = props;

  // 체크박스랑 텍스트 감싸는 영역 스타일
  const containerStyles = "flex items-center gap-2 bg-black";
  // 체크박스 스타일
  const checkBoxStyles = twMerge(`h-5 w-5`, className);
  // 텍스트 스타일
  const spanlStyles = "text-white";

  return (
    <div className={containerStyles}>
      <input type="checkbox" className={checkBoxStyles} {...rest} />
      <span className={spanlStyles}>{children}</span>
    </div>
  );
}
