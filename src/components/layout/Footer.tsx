import { FC } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

const Footer: FC = () => {
  const { t } = useTranslation('footer')

  return (
    <footer className="footer__container">
      <div className="footer__main--contents">
        <div className="footer__main--connect--us">
          <h3>{t('companyName')}</h3>
          <ul>
            <li>{t('locationCity')}</li>
            <li>{t('phoneNumber')}</li>
            <li>
              <link rel="stylesheet" href="" />
              {t('getDirection')} Arrow
            </li>
          </ul>
        </div>
        <div className="footer__main--social--medias">
          <h3>{t('socialMedias')}</h3>
          <ul className="footer__main--contact--us--ul">
            <li>
              <link rel="stylesheet" href="" />
              Tiktok
            </li>
            <li>
              <link rel="stylesheet" href="" />
              Instagram
            </li>
            <li>
              <link rel="stylesheet" href="" />
              Facebook
            </li>
          </ul>
        </div>
        <div className="footer__main--contact--us">
          <h3>{t('whatsNext')}</h3>
          <ul>
            <li>{t('projectOrQuestion')}</li>
            <li>{t('hearFromYou')}</li>
            <li className="footer__main--contents--directions__contact--li">
              <Link href="/">
                {t('contactUs')} 
                <FontAwesomeIcon 
                  icon={faCircleArrowRight}
                  height={"10px"}
                /> 
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__rights--policy">
        <p>HomeHighliting Services Group &copy; 2023</p>
        <p>Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;

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