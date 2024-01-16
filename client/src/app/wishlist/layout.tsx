import { Fragment } from "react";
import { Navbar } from "../component";
import Footer from "../component/Footer";

export default function WishListLayout({
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
