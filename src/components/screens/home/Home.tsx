import { FC } from "react";
import Image from "next/image";
import Head from "next/head";
import Layout from "@/components/layout/Layout";

const Home: FC = () => {
  return (
    <Layout 
      title="Home"
      description="We do homelighting services from the begginning to the end."
    >
      <h1>
        Home Page - First Page
      </h1>
    </Layout>
  );
};

export default Home;
