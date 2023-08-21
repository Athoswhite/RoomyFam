import React, { Fragment } from "react";
import Header3 from "./Header3";

const Header = ({ header }) => {
  const getHeader = () => {
   return <Header3 />
  };
  return <Fragment>{getHeader()}</Fragment>;
};
export default Header;
