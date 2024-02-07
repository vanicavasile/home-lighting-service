import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";

interface GetParams {
  textValue?: string;
  src?: string;
  href?: string;
  label?: string;
  iconText?: string;
}

const Details = ({ params }: { params: GetParams[] }) => {
  const { t } = useTranslation("footer");

  return params.map((param: GetParams, index: Number) => {
        return (
          <span key={index.toString()}>
            {param.textValue && <p key={param.textValue}>{t(param.textValue)}</p>}
            {param.href && (
              <Link
                key={param.label}
                href={param.href}
              >
                {param.iconText && <p>{t(param.iconText)}</p>}
                {param.src && (
                  <Image
                    src={param.src}
                    alt={param.textValue || ""}
                    className="footer-social-medias-images"
                  />
                )}
              </Link>
            )}
          </span>
        );
      })
};

export default Details;
