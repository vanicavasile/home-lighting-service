import { NextPage } from "next";
import Layout from "@/components/layout/Layout";

const ServicesPage: NextPage = () => {
  return (
    <Layout title="services">
      <div
        className="services__container"
        style={{
          display: "flex",
          margin: "100px 0 0 150px"
        }}
      >
        <div className="services__first--cycle">
          <h2>First Cycle</h2>
        </div>
      </div>
    </Layout>
  );
};

export default ServicesPage;
