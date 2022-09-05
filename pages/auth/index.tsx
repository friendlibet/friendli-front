import { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import Link from "next/link";

import { BlockFormAuth } from "../../modules/auth/components/BlockFormAuth";

import friendliBetLogo from "../../public/friendliBet_logo.png";

const SignInPage: NextPage = () => {
  const { t } = useTranslation("common");

  return (
    <div className="bg-[#ffde59] min-h-screen w-full flex flex-col items-center justify-center">
      <div className="w-1/3 mb-10">
        <Image src={friendliBetLogo} alt="friendliBet Logo" />
      </div>

      <BlockFormAuth />
      <p className="mt-6 text-sm">
        {t("signIn.getRegister.title")}{" "}
        <Link href="/auth/register">
          <a className="font-medium text-black underline hover:no-underline hover:text-slate-800">
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
