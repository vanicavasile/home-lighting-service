import { FC, PropsWithChildren } from "react";
import Header from "./Header";
import Meta from "@/pages/seo/Meta";
import { IMeta } from "@/pages/seo/meta.interface";
import dynamic from "next/dynamic";

const DynamicFooter = dynamic(() => import('./Footer'), {
  ssr: false
})

const Layout: FC<PropsWithChildren<IMeta>> = ({ children, title, description }) => {
  return (
    <Meta title={title} description={description}>
      <Header />
      <main className="main__body"> {children}</main>
      <DynamicFooter />
    </Meta>
  );
};

export default Layout;
