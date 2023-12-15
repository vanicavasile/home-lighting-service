import Link from "next/link";
import { FC, useCallback } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import HomeLIghtingImg from "public/assets/home_lighting.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import RoFlagIcon from "public/assets/romanian_language.png";
import { useTranslation } from "next-i18next";

const Header: FC = () => {
  const router = useRouter();
  const { t } = useTranslation("header");

  const switchToLocale = useCallback(
    (locale: string) => {
      const path = router.asPath;
      console.log("locale");
      console.log(locale);
      return router.push(path, path, { locale });
    },
    [router]
  );

  return (
    <header className="header__container">
      <div className="header__logo">
        <Link href={"/"}>
          <Image
            src={HomeLIghtingImg}
            alt="Home Lighting Image"
            style={{
              width: "90px",
              height: "auto",
            }}
            color="white"
          />
        </Link>
      </div>
      <nav className="nav__container">
        <div className="nav__menu">
          <Link href="/about_us">{t("aboutPage")}</Link>
          <Link href="/services">{t("servicesPage")}</Link>
          <Link href="/sales">{t("salesPage")}</Link>
          <Link href="/contacts">{t("contactsPage")}</Link>
        </div>
        <div className="nav__icons">
          <ul>
            <li>
              <span>
                <FontAwesomeIcon icon={faCartShopping} height={"20px"} />
              </span>
            </li>
            <li>
              <label htmlFor="" className="nav__label--language--switching">
                {/* <Image
                  src={RoFlagIcon}
                  alt="Ro Flag Icon"
                  style={{
                    width: "20px",
                    height: "auto",
                  }}
                /> */}
                <button
                  onClick={() => switchToLocale("ro")}
                  className="nav__label--language--switching--btn"
                >
                  <span className="nav__label--language--switching--text">
                    Ro
                  </span>
                </button>
                <button
                  onClick={() => switchToLocale("ru")}
                  className="nav__label--language--switching--btn"
                >
                  <span className="nav__label--language--switching--text">
                    Ru
                  </span>
                </button>
                <button
                  onClick={() => switchToLocale("en")}
                  className="nav__label--language--switching--btn"
                >
                  <span className="nav__label--language--switching--text">
                    En
                  </span>
                </button>
                {/* <span className="nav__label--language--switching--icon">
                  <FontAwesomeIcon icon={faChevronDown} />
                </span> */}
              </label>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
