interface TitleFormProps {
  text: string;
}

export const TitleForm = (props: TitleFormProps) => {
  const { text } = props;
  return <p className="p-4 text-center text-sm">{text}</p>;
};
