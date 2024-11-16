import { Button } from "@headlessui/react";

interface Props {
  text: string;
  type?: "button" | "submit" | "reset";
  round?: "sm" | "md" | "pill";
  append?: React.ReactNode;
  className?: string;
}

function CButton({ text, type = "button", append, round, className }: Props) {
  const roundedClasses = {
    sm: "rounded",
    md: "rounded-lg",
    pill: "rounded-full",
  };

  return (
    <Button
      type={type}
      className={`flex justify-center ${
        round && roundedClasses[round]
      } ${className}`}
    >
      <div>{text}</div>
      {append}
    </Button>
  );
}

export default CButton;
