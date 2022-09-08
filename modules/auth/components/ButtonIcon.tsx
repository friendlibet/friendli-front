interface ButtonIconProps {
  icon: React.ReactNode;
  func: (event: React.MouseEvent) => void;
}

export const ButtonIcon = (props: ButtonIconProps) => {
  const { icon, func } = props;
  return (
    <button
      onClick={(e) => func(e)}
      className="transition-all z-20 duration-200 absolute top-10 right-10 text-4xl bg-white w-14 h-14 flex items-center justify-center rounded-full bg-yellow-200 hover:bg-yellow-50 hover:shadow-lg hover:text-emerald-700 hover:scale-150"
    >
      {icon}
    </button>
  );
};
