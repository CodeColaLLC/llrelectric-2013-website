import React from "react";
import Header from "./Header";
import Footer from "./Footer";


const PageScaffold = ({ children }) => (
    <>
  <div className='content'>
    <Header />
      { children }
  </div>
    <Footer />
        </>
);

export default PageScaffold;