interface InputFormProps {
  id: string;
  type: "text" | "password" | "email";
  label: string;
  placeholder?: string;
  value?: string;
  error?: boolean;
}

export const InputForm = (props: InputFormProps) => {
  const { label, id, value, placeholder, type, error = false } = props;

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
      />
    </div>
  );
};

/**
 *     <label
      className="transition-all relative block p-2 border-2 border-gray-100 hover:border-yellow-400 rounded-lg"
      htmlFor="name"
    >
      <input
        className="w-full px-0 pt-3.5 pb-0 pl-2 text-sm placeholder-transparent border-none focus:ring-0 peer"
        id="name"
        type="password"
        placeholder="Name"
      />

      <span className="absolute text-xs font-medium text-gray-500 transition-all left-3 peer-focus:text-xs peer-focus:top-1 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm">
        {label}
      </span>
    </label>
 */
