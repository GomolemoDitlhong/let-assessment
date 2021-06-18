import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const styles = makeStyles({
  transparent: {
    backgroundColor: "transparent",
    paddingTop: "10px",
    height: "40px",
    paddingBottom: "0px",
    "&$selected": {
      color: "red",
    },
  },

  // This is required for the '&$selected' selector to work
  selected: {},
});

function Footer() {
  const classes = styles();
  return (
    <BottomNavigation classes={{ root: classes.transparent, selected: classes.selected }}>
      <Typography variant="p">@ 2021</Typography>
    </BottomNavigation>
  );
}

export default Footer;
