import { FC, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import InstagramImg from "public/assets/instagram_img.svg";
import TiktokImg from "public/assets/tiktok_img.svg";
import FacebookImg from "public/assets/facebook_img.svg";
import ArrowRight from "public/assets/arrow_right.svg";
import Details from "../shared/details";

const Footer: FC = () => {
  const { t } = useTranslation("footer");
  const [showFirstDetails, setShowFirstDetails] = useState<Boolean>(false);
  const [showSecondDetails, setShowSecondDetails] = useState<Boolean>(false);
  const [showThirdDetails, setShowThirdDetails] = useState<Boolean>(false);
  const showDetails = useRef<HTMLDivElement | null>(null);

  const handleOutsideClicker = (event: Event) => {
    if (showDetails.current && !showDetails.current.contains(event.target as Node)) {
      handleShowDetails("");
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClicker);
    return () =>
      window.removeEventListener("click", handleOutsideClicker);
  }, []);

  const [isLargeViewport, setIsLargeViewport] = useState<Boolean>(false)

  useEffect(() => {
    setIsLargeViewport(window.innerWidth > 768)
  }, [])

  const connectUs = [
    {
      textValue: "locationCity",
    },
    {
      textValue: "phoneNumber",
    },
  ];
  const arrSocMedImgs = [
    {
      src: TiktokImg,
      label: "Tiktok Image",
      href: "#",
    },
    {
      src: InstagramImg,
      label: "Instagram Image",
      href: "#",
    },
    {
      src: FacebookImg,
      label: "Facebook Image",
      href: "#",
    },
  ];

  const arrContactUs = [
    {
      textValue: "projectOrQuestion",
    },
    {
      textValue: "hearFromYou",
    },
  ];

  const contactUs = [
    {
      src: ArrowRight,
      href: "/contacts",
      iconText: "contactUs",
    },
  ];

  const handleShowDetails = (detailsBlock: String) => {
    setShowFirstDetails(
      detailsBlock === "FirstDetails" && showFirstDetails
        ? !showFirstDetails
        : detailsBlock === "FirstDetails"
    );
    setShowThirdDetails(
      detailsBlock === "ThirdDetails" && showThirdDetails
        ? !showThirdDetails
        : detailsBlock === "ThirdDetails"
    );
    setShowSecondDetails(
      detailsBlock === "SecondDetails" && showSecondDetails
        ? !showSecondDetails
        : detailsBlock === "SecondDetails"
    );
  };

  return (
    <footer className="footer-container">
      <div className="footer-content footer-md-container" ref={showDetails}>
        <div
          className="footer-connect-us footer-md-menu"
          onClick={() => handleShowDetails("FirstDetails")}
        >
          <span>
            <h3>{t("companyName")}</h3>
            <FontAwesomeIcon
              icon={faAngleUp}
              className={showFirstDetails ? "arrow-icon down" : "arrow-icon"}
            />
          </span>
          {(showFirstDetails || isLargeViewport) && (
            <div className="footer-connect-us-details footer-md-show-details">
              <Details params={connectUs} />
            </div>
          )}
        </div>
        <div
          className="footer-social-medias footer-md-menu"
          onClick={() => handleShowDetails("SecondDetails")}
        >
          <span>
            <h3>{t("socialMedias")}</h3>
            <FontAwesomeIcon
              icon={faAngleUp}
              className={showSecondDetails ? "arrow-icon down" : "arrow-icon"}
            />
          </span>
          {(showSecondDetails || isLargeViewport) && (
            <div className="footer-social-medias-icons footer-md-show-details footer-md-sm-icons">
              <Details params={arrSocMedImgs} />
            </div>
          )}
        </div>
        <div
          className="footer-contact-us footer-md-menu"
          onClick={() => handleShowDetails("ThirdDetails")}
        >
          <span>
            <h3>{t("whatsNext")}</h3>
            <FontAwesomeIcon
              icon={faAngleUp}
              className={showThirdDetails ? "arrow-icon down" : "arrow-icon"}
            />
          </span>
          {(showThirdDetails || isLargeViewport) && (
            <div className="footer-contact-us-paraghraphs footer-md-show-details">
              <Details params={arrContactUs} />
              <div className="footer-contact-us-arrow">
                <Details params={contactUs} />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="footer-rights-policy">
        <p>Alex Energy Service &copy; 2023</p>
        <p>Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
