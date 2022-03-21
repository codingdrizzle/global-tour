import React from "react";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";

export default function AppLayout({ children }) {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
}
