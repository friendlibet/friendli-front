import type { NextPage } from "next";
import Router from "next/router";
import { useEffect } from "react";

const Home: NextPage = () => {
  const router = Router;

  useEffect(() => {
    const isAuth = localStorage.getItem("token") || null;
    if (!isAuth) router.push("/auth");
  }, []);

  return <div>{process.env.NEXT_PUBLIC_API_ROUTER}</div>;
};

export default Home;
