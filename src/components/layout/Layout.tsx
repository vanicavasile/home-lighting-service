import { FC, PropsWithChildren } from "react";
import Header from "./Header";
import Meta from "@/pages/seo/Meta";
import { IMeta } from "@/pages/seo/meta.interface";
import dynamic from "next/dynamic";



const Layout: FC<PropsWithChildren<IMeta>> = ({ children, title, description }) => {
  return (
    <Meta title={title} description={description}>
      <main className="main__body"> {children}</main>
    </Meta>
  );
};

export default Layout;
