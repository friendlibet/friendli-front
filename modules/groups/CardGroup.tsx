interface CardGroup {
  name: string;
}

export const CardGroup = (props: CardGroup) => {
  const { name } = props;
  return (
    <div className="mt-2 w-full bg-gray-50 hover:bg-gray-100 p-4 rounded-lg border">
      <h2 className="font-medium text-blue-500">{name}</h2>
    </div>
  );
};
