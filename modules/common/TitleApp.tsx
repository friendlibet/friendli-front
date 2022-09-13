interface TitleAppProps {
  title: string;
}

export const TitleApp = (props: TitleAppProps) => {
  const { title } = props;
  return <h1 className="font-bold text-2xl mt-2">{title}</h1>;
};
