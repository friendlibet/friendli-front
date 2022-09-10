interface ButtonIconProps {
  icon: React.ReactNode;
  func: (event: React.MouseEvent) => void;
}

export const ButtonIcon = (props: ButtonIconProps) => {
  const { icon, func } = props;

  /**
   * text règle
   */
  return (
    <div className="absolute top-10 right-10 z-20 flex flex-col">
      <button
        onClick={(e) => func(e)}
        className="transition-all duration-200 text-4xl bg-white w-14 h-14 flex items-center justify-center rounded-full bg-[#FFDE59] hover:bg-gray-200 hover:shadow-lg hover:text-black hover:scale-150"
      >
        {icon}
      </button>
    </div>
  );
};
