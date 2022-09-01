import { ReactElement } from "react";

interface ButtonFormProps {
  value: string;
  type: "submit" | "button" | "reset";
  style: "submit" | "classic" | "classic-alt";
  icon?: React.ReactNode;
}

export const ButtonForm = (props: ButtonFormProps) => {
  const { value, type, style, icon } = props;

  const handleStyle = () => {
    switch (style) {
      case "classic":
        return "transition-all p-2 bg-gray-100 hover:bg-yellow-300 w-full rounded-full";

      case "submit":
        return "transition-all p-2 bg-emerald-300 hover:bg-emerald-500 text-sm w-full";

      case "classic-alt":
        return "";
    }
  };

  return (
    <div className="w-full relative">
      <span className="absolute top-2.5 left-2.5">{icon}</span>
      <button type={type} className={handleStyle()}>
        {value}
      </button>
    </div>
  );
};
