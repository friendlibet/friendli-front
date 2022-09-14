import { Footer } from "../../modules/app/components/Footer";
import { Header } from "../../modules/app/components/Header";
import { BlockProfil } from "../../modules/users/BlockProfil";

const ProfilPage = () => {
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

export default ProfilPage;
