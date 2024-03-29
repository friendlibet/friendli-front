interface ButtonFormProps {
  value: string | React.ReactNode;
  type: "submit" | "button" | "reset";
  style: "submit" | "classic" | "classic-alt" | "danger";
  icon?: React.ReactNode;
  func?: (event: React.MouseEvent) => void;
}

export const ButtonForm = (props: ButtonFormProps) => {
  const { value, type, style, icon, func } = props;

  const handleStyle = () => {
    switch (style) {
      case "classic":
        return "transition-all p-2 bg-gray-100 hover:bg-yellow-300 w-full rounded-full";

      case "danger":
        return "transition-all p-2 bg-red-300 hover:bg-red-500 w-full rounded-full";

      case "submit":
        return "transition-all p-2 bg-gray-100 hover:bg-[#1A936F] text-sm w-full rounded-full";

      case "classic-alt":
        return "";
    }
  };

  return (
    <div className="w-full relative">
      <span className="absolute top-2.5 left-2.5">{icon}</span>
      <button
        onClick={(e) => func && func(e)}
        type={type}
        className={`flex justify-center ${handleStyle()}`}
      >
        {value}
      </button>
    </div>
  );
};
