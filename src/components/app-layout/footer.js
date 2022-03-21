import React from "react";

const LinkStyles = {
  textDecoration: "none",
  fontWeight: 800,
  color: 'blue',
};

const FooterStyles = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderTop: "1px solid rgba(0,0,0,.125)",
  marginTop: 100,
  padding: '5px 0',
};

const Footer = () => {
  return (
    <div style={FooterStyles} className={'footer-styles'}>
      <p className={'p-0 m-0 mx-2'}>Created by<a href={"https://github.com/codingdrizzle"} style={LinkStyles}> codingdrizzle</a></p>
      <p className={'p-0 m-0 mx-2'}>&copy; Copyright 2022 | World Tour.</p> 
    </div>
  );
};

export default Footer;
