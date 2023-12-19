import { NextPage } from "next";
import Home from "@/components/screens/home/Home";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'


const HomePage: NextPage = () => {
  return <>
    <Home />
  </>
}

export default HomePage

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