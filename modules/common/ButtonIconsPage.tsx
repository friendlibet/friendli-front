interface ButtonIconsPageProps {
  icon: React.ReactNode;
  func: (event: React.MouseEvent) => void;
  text?: string;
}

export const ButtonIconsPage = (props: ButtonIconsPageProps) => {
  const { icon, func, text } = props;

  return (
    <div className="flex flex-col w-full md:w-max">
      <button
        onClick={(e) => func(e)}
        className="transition-all duration-200 text-2xl bg-gray-50 hover:bg-yellow-400 border-2 p-2 w-full md:w-max flex items-center justify-center rounded-full hover:shadow-xl"
      >
        {icon}
        {text !== "" && <span className="ml-5 text-base">{text}</span>}
      </button>
    </div>
  );
};
