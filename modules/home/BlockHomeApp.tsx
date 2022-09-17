import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";
import { useTranslation } from "next-i18next";

import { useGetUserGroups } from "../../graphql/groups/useGetUserGroups";
import { useWindowResize } from "../common/hooks/useWindowResize";

import { TitleApp } from "../common/TitleApp";
import { ButtonIconsPage } from "../common/ButtonIconsPage";
import { CardGroup } from "../groups/CardGroup";

import { BsPlusLg } from "react-icons/bs";
import { FaLayerGroup } from "react-icons/fa";

export const BlockHomeApp = () => {
  const router = Router;
  const dispatch = useDispatch();
  const { t } = useTranslation("common");
  const windowSize = useWindowResize();
  const getUserGroups = useGetUserGroups();
  const { groups } = useSelector((state: any) => ({
    ...state.groupReducer,
  }));

  interface GroupProps {
    id: string;
    name: string;
    description: string;
  }

  useEffect(() => {
    if (getUserGroups.data !== undefined && groups.length === 0) {
      dispatch({
        type: "GETGROUPSINFO",
        payload: getUserGroups.data.getUserGroups,
      });
    }
  }, [getUserGroups, groups]);

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
      <div className="mt-6">
        {groups.length > 0 &&
          groups.map((el: GroupProps) => (
            <CardGroup key={el.id} name={el.name} />
          ))}
      </div>
    </div>
  );
};
