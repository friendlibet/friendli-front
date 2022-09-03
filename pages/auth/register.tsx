import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import { BlockFormRegister } from "../../modules/auth/components/BlockFormRegister";

import friendliBetLogo from "../../public/friendliBet_logo.png";

const RegisterPage: NextPage = () => {
  return (
    <div className="bg-[#ffde59] min-h-screen w-full flex flex-col items-center justify-center">
      <div className="w-1/3 mb-10">
        <Image src={friendliBetLogo} alt="friendliBet Logo" />
      </div>

      <BlockFormRegister />
      <p className="mt-6 text-sm">
        T&apos;as déjà un compte ?{" "}
        <Link href="/auth">
          <a className="font-medium text-black underline hover:no-underline hover:text-slate-800">
            Connecte toi
          </a>
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
