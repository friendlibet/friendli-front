import React from "react";

interface InputFormProps {
  id: string;
  type: "text" | "password" | "email" | "date";
  label: string;
  placeholder?: string;
  errors?: any;
  field?: any;
}

export const InputForm = (props: InputFormProps) => {
  const { label, id, placeholder, type, errors, field } = props;

  const handleStyle = () => {
    if (errors !== undefined && errors[id]) {
      return "p-2 pl-4 transition-all duration-200 rounded-full border outline-none border text-red-500 border-red-400";
    }
    return "p-2 pl-4 transition-all duration-200 rounded-full border outline-none border focus:border-yellow-400 focus:bg-gray-50";
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
      {errors !== undefined && errors[id] && (
        <span className="text-xs mr-0 ml-auto p-1 text-red-500">
          {errors[id].message}
        </span>
      )}
    </div>
  );
};
