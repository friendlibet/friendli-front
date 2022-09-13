interface TitleAppProps {
  title: string;
  icon?: React.ReactNode;
}

export const TitleApp = (props: TitleAppProps) => {
  const { title, icon } = props;
  return (
    <h1 className="font-bold text-2xl mt-2 flex items-center">
      {icon && <span className="mr-2 text-blue-500">{icon}</span>} {title}
    </h1>
  );
};
