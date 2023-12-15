import { NextPage } from "next";
import Layout from "@/components/layout/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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

export async function getStaticProps({ locale }: { locale: string }) {
  console.log(locale)

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'header',
        'footer'
      ])),
    },
  }
}