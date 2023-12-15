import { NextPage } from "next";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const ServicesPage: NextPage = () => {
  return (
    <Layout title="services">
      <div
        className="services__container"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%"
        }}
      >
        <div className="services__first--cycle">
        <h2><Link href="/services/first_cycle">First Cycle</Link></h2>
        </div>
        <div className="services__second--cycle">
        <h2><Link href="/services/second_cycle">Second Cycle</Link></h2>
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