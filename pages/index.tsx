import type { NextPage } from "next";
import Router from "next/router";
import { Footer } from "../modules/app/components/Footer";
import { Header } from "../modules/app/components/Header";

const Home: NextPage = () => {
  const router = Router;

  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

export default Home;
