import { Input } from "@headlessui/react";

interface Props {
  type?: string;
  name?: string;
  placeholder?: string;
  className?: string;
}

function CInput({ type, name, placeholder, className }: Props) {
  return (
    <Input
      name={name}
      type={type}
      placeholder={placeholder}
      className={`border border-primary-500 rounded-lg text-neutral-600 text-lg py-4 px-3 shadow-sm ${className}`}
    />
  );
}

export default CInput;
