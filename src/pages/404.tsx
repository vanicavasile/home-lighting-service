import Layout from "@/components/layout/Layout";
import { NextPage } from "next";
import Image from "next/image";

const pageNotFound: NextPage = () => {
  return (
    <Layout title="404">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "calc(100vh - 70px)",
        }}
      >
        <Image
          priority
          src="/404.png"
          alt="404 Not Found"
          width={512}
          height={249}
        />
      </div>
    </Layout>
  );
};

export default pageNotFound;
