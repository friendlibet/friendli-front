import { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import Link from "next/link";

import { BlockFormAuth } from "../../modules/auth/components/BlockFormAuth";

import { BiRuler } from "react-icons/bi";
import { FaRuler } from "react-icons/fa";
import friendliBetLogo from "../../public/friendliBet_logo.png";
import { ButtonIcon } from "../../modules/auth/components/ButtonIcon";
import React from "react";
import { PopUpHelp } from "../../modules/auth/components/PopUpHelp";

const SignInPage: NextPage = () => {
  const { t } = useTranslation("common");

  const showPopUp = (event: React.MouseEvent) => {
    event.preventDefault();
    const popUpTarget = document.querySelector("#help-popup");
    if (popUpTarget && popUpTarget.classList.contains("-top-full")) {
      popUpTarget?.classList.remove("-top-full");
      popUpTarget?.classList.add("top-0");
    } else {
      popUpTarget?.classList.add("-top-full");
      popUpTarget?.classList.remove("top-0");
    }
  };

  return (
    <div className="relative bg-[#2B59C3] min-h-screen w-full flex flex-col items-center justify-center">
      <PopUpHelp id="help-popup" />
      <ButtonIcon icon={<FaRuler />} func={showPopUp} />
      <div className="w-1/3 mb-10">
        <Image src={friendliBetLogo} alt="friendliBet Logo" />
      </div>
      <BlockFormAuth />
      <p className="mt-6 text-sm text-blue-100">
        {t("signIn.getRegister.title")}{" "}
        <Link href="/auth/register">
          <a className="font-medium text-white underline hover:no-underline hover:text-yellow-300">
            {t("signIn.getRegister.link")}
          </a>
        </Link>
      </p>
    </div>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default SignInPage;
