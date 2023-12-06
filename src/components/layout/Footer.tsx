import { FC } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

const Footer: FC = () => {
  return (
    <footer className="footer__container">
      <div className="footer__main--contents">
        <div className="footer__main--connect--us">
          <h3>HomeLighting Services</h3>
          <ul>
            <li>Moldova Republic of, Chișinău</li>
            <li>Phone Number</li>
            <li>
              <link rel="stylesheet" href="" />
              GET DIRECTIONS Arrow
            </li>
          </ul>
        </div>
        <div className="footer__main--social--medias">
          <h3>Join Our Social Medias</h3>
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
          <h3>Let's discuss what's next</h3>
          <ul>
            <li>Have a project or a question?</li>
            <li>We'd love to hear from you.</li>
            <li className="footer__main--contents--directions__contact--li">
              <Link href="/">
                CONTACT US 
                <FontAwesomeIcon 
                  icon={faCircleArrowRight}
                  
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
