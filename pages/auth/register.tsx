import { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import Link from "next/link";

import { BlockFormRegister } from "../../modules/auth/components/BlockFormRegister";

import friendliBetLogo from "../../public/friendliBet_logo.png";

const RegisterPage: NextPage = () => {
  const { t } = useTranslation("common");

  return (
    <div className="bg-[#2B59C3] min-h-screen w-full flex flex-col items-center justify-center">
      <div className="w-1/3 mb-10">
        <Image src={friendliBetLogo} alt="friendliBet Logo" />
      </div>

      <BlockFormRegister />
      <p className="mt-6 text-sm text-blue-100">
        {t("register.getSignIn.title")}{" "}
        <Link href="/auth">
          <a className="font-medium text-white underline hover:no-underline hover:text-yellow-300">
            {t("register.getSignIn.link")}
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

export default RegisterPage;
