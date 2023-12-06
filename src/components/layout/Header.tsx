import Link from "next/link";
import { FC } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import HomeLIghtingImg from "public/assets/home_lighting.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import RoFlagIcon from "public/assets/romanian_language.png"

const Header: FC = () => {
  const { pathname } = useRouter();

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
          <Link href="/about_us">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/sales">Sales</Link>
          <Link href="/contacts">Contacts</Link>
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
                <Image 
                  src={RoFlagIcon} 
                  alt="Ro Flag Icon" 
                  style={{
                    width: "20px",
                    height: "auto"
                  }}
                  />
                <span className="nav__label--language--switching--text">Ro</span>
                <span className="nav__label--language--switching--icon">
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
              </label>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
