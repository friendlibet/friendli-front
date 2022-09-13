import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { useEffect, useState } from "react";

import { handleLogout } from "../../common/services/handleLogout";

import friendliBetLogo from "../../../public/friendliBet_logo.png";
import { useWindowResize } from "../../common/hooks/useWindowResize";

import { GiHamburgerMenu, GiSoccerBall } from "react-icons/gi";
import { FaSignOutAlt } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { FaLayerGroup } from "react-icons/fa";

interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const windowSize = useWindowResize();
  const router = Router;

  useEffect(() => {
    const isAuth = localStorage.getItem("token") || null;
    if (!isAuth) router.push("/auth");
  }, []);

  return (
    <header className="flex items-center justify-between p-4 bg-[#2B59C3] border-b-2 border-blue-500 h-32">
      <div className="w-20">
        <Image src={friendliBetLogo} alt="friendliBet Logo" />
      </div>
      <button
        onClick={() => setToggle(!toggle)}
        className="flex md:hidden text-4xl text-white hover:text-yellow-400"
      >
        <GiHamburgerMenu />
      </button>
      {(toggle || windowSize > 768) && (
        <nav className="absolute left-0 top-32 md:relative md:top-auto md:left-auto bg-[#2B59C3] w-full">
          <ul className="flex flex-col md:flex-row justify-center md:space-x-4 text-yellow-500 font-medium">
            <li className="flex p-2 md:hidden hover:bg-blue-500 hover:text-white">
              <Link href="/profil">
                <a className="flex space-x-2 items-center">
                  <AiOutlineUser className="text-white" />
                  <span>Mon profil</span>
                </a>
              </Link>
            </li>
            <li className="p-2 hover:bg-blue-500 hover:text-white">
              <Link href="/groups">
                <a className="flex space-x-2 items-center">
                  <FaLayerGroup className="text-white" />
                  <span>Groupes</span>
                </a>
              </Link>
            </li>
            <li className="p-2 hover:bg-blue-500 hover:text-white">
              <Link href="/results">
                <a className="flex space-x-2 items-center">
                  <GiSoccerBall className="text-white" />
                  <span>Résultats</span>
                </a>
              </Link>
            </li>
            <li className="p-2 md:hidden hover:bg-blue-500 hover:text-white">
              <a
                onClick={handleLogout}
                className="cursor-pointer flex space-x-2 items-center"
              >
                <FaSignOutAlt className="text-red-500" />
                <span>Déconnexion</span>
              </a>
            </li>
          </ul>
        </nav>
      )}
      <div className="hidden md:flex">PROFIL</div>
    </header>
  );
};
