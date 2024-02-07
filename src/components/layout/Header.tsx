import Link from "next/link";
import {
  FC,
  useCallback,
  useState,
  useEffect,
  useRef,
} from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Logo from "public/assets/logo.png";
import { useTranslation } from "next-i18next";
import Bag from "public/assets/bag.svg";

const Header: FC = () => {
  const router = useRouter();
  const [expandedMenu, setExpandedMenu] = useState<Boolean>(false);
  const [showLangBtns, setShowLangBtns] = useState<Boolean>(false);
  const { t } = useTranslation("header");
  let [switchL, setSwitchL] = useState<String[]>(["Ro", "Ru", "En"]);
  const mobileNavMenu = useRef<HTMLDivElement | null>(null);
  const dropDownLangBtns = useRef<HTMLDivElement | null>(null);
  const closeMobileNavMenu = useRef<HTMLDivElement | null>(null);
  const defaultLocaleClasses = { ro: "", ru: "", en: "" };
  const [localeBtnClasses, setLocaleBtnClasses] =
    useState(defaultLocaleClasses);

  const switchToLocale = useCallback(
    (event: any) => {
      const selectedLang = event.target.textContent;
      let langFiltered: String = switchL
        .filter((langItem) => selectedLang === langItem)
        .toString();
      let iLangFiltered = switchL.indexOf(langFiltered);
      switchL.unshift(switchL.splice(iLangFiltered, 1).toString());
      setSwitchL(switchL);
      setShowLangBtns(false);
      const path = router.asPath;
      const locale = event.target.textContent.toLowerCase();
      return router.push(path, path, { locale });
    },
    [router]
  );

  useEffect(() => {
    const parsedLocaleBtnClasses = {
      ...defaultLocaleClasses,
      [router.locale as keyof typeof defaultLocaleClasses]: "active",
    };
    setLocaleBtnClasses(parsedLocaleBtnClasses);
  }, [router]);

  const handleOutsideClickLangBtns = (event: Event) => {
    if (
      dropDownLangBtns.current &&
      !dropDownLangBtns.current.contains(event.target as Node)
    ) {
      setShowLangBtns(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClickLangBtns);
    return () =>
      window.removeEventListener("click", handleOutsideClickLangBtns);
  }, [showLangBtns]);

  const handleOutsideClickExpandedMenu = (event: Event) => {
    if (
      closeMobileNavMenu.current &&
      expandedMenu &&
      !closeMobileNavMenu.current.contains(event.target as Node)
    ) {
      closeMobileNavMenu.current?.classList.remove("expanded");
      handleNavigation();
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClickExpandedMenu);
    return () =>
      window.removeEventListener("click", handleOutsideClickExpandedMenu);
  }, [expandedMenu]);

  const handleClasslist = (isExpanded: Boolean) => {
    if (mobileNavMenu && isExpanded) {
      mobileNavMenu.current?.classList.remove("hidden", "hide-menu");
      mobileNavMenu.current?.classList.add("show-menu");
    }

    if (mobileNavMenu && !isExpanded) {
      mobileNavMenu.current?.classList.remove("show-menu");
      mobileNavMenu.current?.classList.add("hide-menu", "hidden");
    }
  };

  const handleNavigation = () => {
    setExpandedMenu(false);
    handleClasslist(false);
  };

  const handleShowMenu = () => {
    setExpandedMenu(!expandedMenu);
    handleClasslist(!expandedMenu);
  };

  const switchLangBtns = () => {
    setShowLangBtns(!showLangBtns);
  };

  return (
    <header className="header-container">
      <div className="header-main">
        <div className="header-logo">
          <Link href={"/"}>
            <Image
              priority
              src={Logo}
              alt="Alex Energy Service Logo"
              style={{
                width: "90px",
                height: "auto",
                borderRadius: "50px",
              }}
            />
          </Link>
        </div>
        <div className="nav-menu">
          <Link href="/about_us">{t("aboutPage")}</Link>
          <Link href="/services">{t("servicesPage")}</Link>
          <Link href="/sales">{t("salesPage")}</Link>
          <Link href="/contacts">{t("contactsPage")}</Link>
        </div>
        <nav className="nav-container-small-screen">
          <div className="nav-small-screen">
            <div className="nav-small-screen-bag">
              <Image
                src={Bag}
                alt="Bag"
                style={{
                  width: "20px",
                  height: "auto",
                  filter: "invert(1)",
                }}
              />
            </div>
            <div className="nav-small-screen-lang-btns" ref={dropDownLangBtns}>
              <button
                onClick={switchLangBtns}
                className={`nav-small-screen-lang-switch-btn ${localeBtnClasses.ro}`}
              >
                {switchL[0]}
              </button>
              <button
                onClick={switchToLocale}
                className={`${
                  showLangBtns
                    ? "nav-small-screen-lang-switch-btn"
                    : "nav-small-screen-lang-switch-btn hidden-btns"
                } ${localeBtnClasses.ru}`}
              >
                {switchL[1]}
              </button>
              <button
                onClick={switchToLocale}
                className={`${
                  showLangBtns
                    ? "nav-small-screen-lang-switch-btn"
                    : "nav-small-screen-lang-switch-btn hidden-btns"
                } ${localeBtnClasses.en}`}
              >
                {switchL[2]}
              </button>
            </div>
            <div
              onClick={handleShowMenu}
              ref={closeMobileNavMenu}
              className={
                expandedMenu
                  ? "nav-small-screen-menu expanded hide-to-full-screen"
                  : "nav-small-screen-menu hide-to-full-screen"
              }
            >
              <div className="top-line"></div>
              <div className="middle-line"></div>
              <div className="bottom-line"></div>
            </div>
            <div
              onClick={handleNavigation}
              ref={mobileNavMenu}
              className="nav-small-screen-menu-expanded hide-to-full-screen hidden"
            >
              <Link href="/about_us">{t("aboutPage")}</Link>
              <Link href="/services">{t("servicesPage")}</Link>
              <Link href="/sales">{t("salesPage")}</Link>
              <Link href="/contacts">{t("contactsPage")}</Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
