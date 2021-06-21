import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
  footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "14px",
    width: "100%",
    backgroundColor: "#d1d1d1",
  },
});

function Footer() {
  const classes = styles();
  return (
    <div className={classes.footer}>
      <Typography variant="body2">Ny Times App - 2021</Typography>
    </div>
  );
}

export default Footer;
