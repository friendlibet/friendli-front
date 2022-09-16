import Router from "next/router";
import { useTranslation } from "next-i18next";
import { useWindowResize } from "../common/hooks/useWindowResize";

import { TitleApp } from "../common/TitleApp";
import { ButtonIconsPage } from "../common/ButtonIconsPage";

import { BsPlusLg } from "react-icons/bs";
import { FaLayerGroup } from "react-icons/fa";

export const BlockHomeApp = () => {
  const router = Router;
  const { t } = useTranslation("common");
  const windowSize = useWindowResize();

  return (
    <div className="flex flex-col">
      <TitleApp title={t("home.title")} icon={<FaLayerGroup />} />
      <div className="mt-6 flex items-center">
        <ButtonIconsPage
          func={() => router.push("/groups")}
          icon={<BsPlusLg />}
          text={windowSize > 764 ? "" : t("home.buttons.addOneGroup")}
        />
        <span className="hidden md:flex ml-2 text-xl">
          {t("home.buttons.addOneGroup")}
        </span>
      </div>
      <div className="mt-4">Hello</div>
    </div>
  );
};
