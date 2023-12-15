import { FC } from "react";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import { useTranslation } from 'next-i18next'

const Home: FC = () => {
  const { t } = useTranslation('common')
  

  return (
    <Layout 
      title="Home"
      description="We do homelighting services from the begginning to the end."
    >
      <h1>
        {t('submitBtn')}
      </h1>
    </Layout>
  );
};

export default Home;


