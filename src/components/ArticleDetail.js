import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";

const styles = makeStyles({
  wrapper: {
    padding: "20px",
  },
});

const ArticleDetail = (props) => {
  const classes = styles();
  const { title, byline, abstract } = props.location.state.article;
  return (
    <div className={classes.wrapper}>
      <Typography component="h4" varient="h4">
        {title}
      </Typography>
      <Typography component="h2" varient="h2">
        {byline}
      </Typography>
      <Typography component="p" varient="body2">
        {abstract}
      </Typography>

      <Button variant="contained" color="primary">
        <Link to="/" style={{ textDecoration: "none" }}>
          Back to Articles
        </Link>
      </Button>
    </div>
  );
};

export default ArticleDetail;
