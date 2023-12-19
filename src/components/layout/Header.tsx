import Link from "next/link";
import {
  FC,
  useCallback,
  useState,
  useEffect,
} from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Logo from "public/assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "next-i18next";


const Header: FC = () => {
  const router = useRouter();
  const { t } = useTranslation("header");
  const defaultLocaleClasses = {ro: "", ru: "", en: ""}
  const [localeBtnClasses, setLocaleBtnClasses] = useState(defaultLocaleClasses)

  const switchToLocale = useCallback(
    (event: any) => {
      const path = router.asPath;
      const locale = event.target.textContent.toLowerCase();
      return router.push(path, path, { locale });
    },
    [router]
  );


useEffect(() => {
  const parsedLocaleBtnClasses = {
    ...defaultLocaleClasses,
    [router.locale as keyof typeof defaultLocaleClasses]: "active"
  }
  setLocaleBtnClasses(parsedLocaleBtnClasses);
}, [router])


  return (
    <header className="header__container">
      <div className="header__logo">
        <Link href={"/"}>
          <Image
            priority
            src={Logo}
            alt="Home Lighting Image"
            style={{
              width: "90px",
              height: "auto",
            }}
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
                <button
                  onClick={switchToLocale}
                  className={`nav__label--language--switching--btn ${localeBtnClasses.ro}` }
                >
                  {"Ro"}
                </button>
                <button
                  onClick={switchToLocale}
                  className={`nav__label--language--switching--btn ${localeBtnClasses.ru}` }
                >
                  {"Ru"}
                </button>
                <button
                  onClick={switchToLocale}
                  className={`nav__label--language--switching--btn ${localeBtnClasses.en}` }
                >
                  {"En"}
                </button>
              </label>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
