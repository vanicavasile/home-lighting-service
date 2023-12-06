import { NextPage } from "next";
import Layout from "@/components/layout/Layout";

const SalesPage: NextPage = () => {
  return (
    <Layout title="sales">
      <div className="sales__container" 
        style={{
          display: "flex",
          margin: "100px"
        }}>
        <h2>Our Products for Sale</h2>
      </div>
    </Layout>
  );
};

export default SalesPage;
