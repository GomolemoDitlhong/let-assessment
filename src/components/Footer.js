import React from "react";
import { makeStyles } from "@material-ui/core";
// Styles
const styles = makeStyles((theme) => ({
  footer: {
    gridRow: "3",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    marginTop: "10px",
    background: "rgb(212, 212, 212)",
    borderRadius: "0px",
    fontWeight: "normal",
    fontFamily: '"Roboto"',
    position: "relative",
    "& a": {
      textDecoration: "none",
      color: "inherit",
      "&:hover": {
        color: "#005e46",
      },
    },
  },
}));

function Footer() {
  const yearNow = new Date().getFullYear();
  const classes = styles();
  return (
    <div className={classes.footer}>
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
