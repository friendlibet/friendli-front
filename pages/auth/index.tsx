import { NextPage } from "next";
import friendliBetLogo from "../../public/friendliBet_logo.png";
import Image from "next/image";
import { BlockFormAuth } from "../../modules/auth/components/BlockFormAuth";
import Link from "next/link";

const SignInPage: NextPage = () => {
  return (
    <div className="bg-[#ffde59] min-h-screen w-full flex flex-col items-center justify-center">
      <div className="w-1/3 mb-10">
        <Image src={friendliBetLogo} alt="friendliBet Logo" />
      </div>

      <BlockFormAuth />
      <p className="mt-6 text-sm">
        Toujours pas de compte ?{" "}
        <Link href="/">
          <a className="font-medium text-black underline hover:no-underline hover:text-slate-800">
            S&apos;enregistrer
          </a>
        </Link>
      </p>
    </div>
  );
};

export default SignInPage;
