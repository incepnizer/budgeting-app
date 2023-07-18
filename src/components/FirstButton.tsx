import { ReactNode } from "react";

interface btnProps {
  children?: ReactNode;
  color?: string;
  onClick: () => void;
}
function FirstButton({
  children = "button",
  onClick,
  color = "primary",
}: btnProps) {
  return (
    <>
      <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </>
  );
}

export default FirstButton;
