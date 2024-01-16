import { Fragment } from "react";
import { Navbar } from "../component";
import Footer from "../component/Footer";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Fragment>
      <Navbar />
      {children}
      <Footer/>
    </Fragment>
  );
}
