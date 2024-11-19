import { Field, Input } from "@headlessui/react";
// types
import type { ChangeEvent } from "react";
// props interface
interface Props {
  id?: string;
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  error?: string;
  touched?: boolean;
  className?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBluer?: (event: ChangeEvent<HTMLInputElement>) => void;
}

function CInput({
  id,
  type,
  name,
  value,
  placeholder,
  error,
  touched,
  className,
  onChange,
  onBluer,
}: Props) {
  return (
    <Field className={className}>
      <Input
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        className={`border border-primary-500 rounded-lg text-neutral-600 text-lg py-4 px-3 shadow-sm w-full mb-1`}
        onChange={onChange}
        onBlur={onBluer}
      />
      {touched && error ? (
        <div dir="rtl" className="text-danger-600">
          {error}
        </div>
      ) : null}
    </Field>
  );
}

export default CInput;
