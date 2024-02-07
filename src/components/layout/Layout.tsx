import { FC, PropsWithChildren } from "react";
import Meta from "@/pages/seo/Meta";
import { IMeta } from "@/pages/seo/meta.interface";

const Layout: FC<PropsWithChildren<IMeta>> = ({ children, title, description }) => {
  return (
    <Meta title={title} description={description}>
      <main className="main-body"> {children}</main>
    </Meta>
  );
};

export default Layout;
