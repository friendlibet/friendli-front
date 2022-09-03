import React from "react";

interface InputFormProps {
  id: string;
  type: "text" | "password" | "email";
  label: string;
  placeholder?: string;
  error?: boolean;
  field?: any;
}

export const InputForm = (props: InputFormProps) => {
  const { label, id, placeholder, type, error = false, field } = props;

  const handleStyle = () => {
    switch (error) {
      case false:
        return "p-2 pl-4 transition-all duration-200 rounded-full border outline-none border focus:border-yellow-400 focus:bg-gray-50";
      case true:
        return "p-2 pl-4 transition-all duration-200 rounded-full border outline-none border text-red-500 border-red-400";
    }
  };

  return (
    <div className="flex flex-col">
      <label className="hidden" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={handleStyle()}
        {...field}
      />
    </div>
  );
};
