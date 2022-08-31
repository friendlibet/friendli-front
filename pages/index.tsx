import type { NextPage } from "next";

const Home: NextPage = () => {
  return <div>{process.env.NEXT_PUBLIC_API_ROUTER}</div>;
};

export default Home;
