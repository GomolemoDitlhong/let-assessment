import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  root: {
    ...theme.typography.body1,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
  wrapper: {
    padding: "20px",
    align: "left",
  },
  section: {
    display: "flex",
    marginTop: "10px",
    marginBottom: "20px",
  },
  title: {
    marginBottom: "1.8rem",
    fontWeight: "600",
  },
  littleSpace: {
    marginBottom: "1rem",
  },
}));

const ArticleDetail = (props) => {
  const classes = styles();
  const { title, byline, abstract, published_date } = props.location.state.article;
  return (
    <div className={classes.wrapper}>
      <div className={classes.section}>
        <Button variant="contained" color="primary">
          <Link to="/" style={{ textDecoration: "none" }}>
            Back to Articles
          </Link>
        </Button>
      </div>
      <Typography className={`${classes.root} ${classes.title}`}>{title}</Typography>
      <Typography component="h4" varient="h4" className={`${classes.root} ${classes.littleSpace}`}>
        {byline} : {published_date}
      </Typography>

      <Typography component="p" varient="body2">
        {abstract}
      </Typography>
    </div>
  );
};

export default ArticleDetail;
