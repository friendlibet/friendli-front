import { FieldError } from "react-hook-form";
import { AiFillCheckCircle } from "react-icons/ai";
import { MdError } from "react-icons/md";
import { checkingFormatPassword } from "../../../misc/checkingFormatPassword";

interface CheckingPasswordProps {
  password: string;
  errors?: FieldError;
}

export const CheckingPassword = (props: CheckingPasswordProps) => {
  const { errors, password } = props;

  return (
    <div
      className={`w-fit flex space-x-2 items-center p-1 pl-4 pr-4 transition-all duration-200 rounded-full bg-gray-50 text-gray-600 ${
        errors ? "bg-red-50" : ""
      }`}
    >
      <span>
        {checkingFormatPassword(password) ? (
          <AiFillCheckCircle className="text-emerald-500" />
        ) : (
          <MdError className="text-red-500" />
        )}
      </span>
      <span className="text-xs">
        8 caractères, 1 majuscule, 1 minuscule, 1 chiffre
      </span>
    </div>
  );
};
