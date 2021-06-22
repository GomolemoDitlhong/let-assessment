import React from "react";

function Footer() {
  const yearNow = new Date().getFullYear();
  return (
    <div className="footer">
      <div>Copyright © {yearNow} All Rights Reserved</div>
      <div>
        Website Design and Developent by
        <a href="https://github.com/GomolemoDitlhong" target="_blank" rel="noreferrer">
          {" "}
          Gomolemo Ditlhong
        </a>
      </div>
    </div>
  );
}

export default Footer;
