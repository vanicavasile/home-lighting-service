import { NextPage } from "next";
import Layout from "@/components/layout/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const ContactsPage: NextPage = () => {
  return (
    <Layout title="contacts">
      <div className="contacts__container" 
        style={{
          display: "flex",
          margin: "100px"
        }}>
        <h2>Our Contacts</h2>
      </div>
    </Layout>
  );
};

export default ContactsPage;

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