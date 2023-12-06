import { NextPage } from "next";
import Layout from "@/components/layout/Layout";

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
