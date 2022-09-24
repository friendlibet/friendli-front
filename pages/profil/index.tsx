import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Footer } from "../../modules/app/components/Footer";
import { Header } from "../../modules/app/components/Header";
import { BlockProfil } from "../../modules/users/BlockProfil";

const ProfilPage = () => {
  const { t } = useTranslation("common");
  return (
    <div className="flex justify-center bg-gray-800 min-h-screen w-full">
      <div className="flex flex-col w-full md:w-3/4 bg-white">
        <Header />
        <div className="p-6">
          <BlockProfil />
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

export default ProfilPage;
