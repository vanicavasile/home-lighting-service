import { NextPage } from "next";
import Layout from "@/components/layout/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const AboutUsPage: NextPage = () => {
  return (
    <Layout title="about_us">
      <div className="about__us__container" 
        style={{
          display: "flex",
          margin: "100px"
        }}>
        <h2>About Us | About Company</h2>
      </div>
    </Layout>
  );
};

export default AboutUsPage;

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