import type { NextPage } from "next";
import Router from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Footer } from "../modules/app/components/Footer";
import { Header } from "../modules/app/components/Header";
import { BlockHomeApp } from "../modules/home/BlockHomeApp";

const Home: NextPage = () => {
  const { t } = useTranslation("common");
  const router = Router;

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen w-full">
      <div className="flex flex-col w-full md:w-3/4 bg-white border-0 md:border-l-2 md:border-r-2 border-yellow-400">
        <Header />
        <div className="p-6">
          <BlockHomeApp />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Home;
