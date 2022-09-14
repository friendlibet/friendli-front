import Image from "next/image";
import { useSelector } from "react-redux";
import { TitleApp } from "../common/TitleApp";

import { FaHandPeace } from "react-icons/fa";
import { ButtonForm } from "../form/components/ButtonForm";

export const BlockProfil = () => {
  const { userInfo } = useSelector((state: any) => ({
    ...state.userReducer,
  }));
  return (
    <div className="flex flex-col">
      <TitleApp title={`Hello, ${userInfo.firstName}`} icon={<FaHandPeace />} />
      <div className="mt-6 flex items-center">
        <div className="p-4 flex flex-col items-center justify-center w-full">
          <Image
            src={userInfo.avatar}
            alt={`${userInfo.firstname} image avatar`}
            width="100"
            height="100"
            className="rounded-full"
          />
          <ul className="mt-4 flex flex-col space-y-2 w-full">
            <li className="flex w-full">
              <ButtonForm
                style="classic"
                type="button"
                value="Edit mon profil"
              />
            </li>
            <li className="flex w-full">
              <ButtonForm
                style="danger"
                type="button"
                value="Supprimer mon compte"
                func={() => console.log("okokook")}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
