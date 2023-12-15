import { NextPage } from "next";
import Layout from "@/components/layout/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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
        <div className="services__second--cycle">
          <h2>Second Cycle</h2>
        </div>
      </div>
    </Layout>
  );
};

export default ServicesPage;

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