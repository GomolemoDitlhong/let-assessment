import React from "react";
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

// Styles
const styles = makeStyles((theme) => ({
  progressWrapper: {
    marginTop: "10rem",
    marginBottom: "5rem",
    display: "flex",
    justifyContent: "center",
  },
}));
function Loading() {
  const classes = styles();
  return (
    <div className={classes.progressWrapper}>
      <CircularProgress />
    </div>
  );
}

export default Loading;
