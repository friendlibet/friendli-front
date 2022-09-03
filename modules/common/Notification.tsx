interface NotificationProps {
  value: string;
  type?: "error" | "success";
}

export const Notification = (props: NotificationProps) => {
  const { value, type = "error" } = props;

  const handleStyle = () => {
    switch (type) {
      case "error":
        return "bg-gradient-to-r from-rose-500 to-rose-300 border-red-800 text-black";
      case "success":
        return "bg-gradient-to-r from-green-500 to-emerald-500 border-green-800";
    }
  };

  return (
    <div
      className={`p-4 rounded-full border-l-4 shadow-xl ${handleStyle()}`}
      role="alert"
    >
      <h3 className="text-sm font-medium">{value}</h3>
    </div>
  );
};
