import React from "react";
import Article from "./Article.js";
import CircularProgress from "@material-ui/core/CircularProgress";
import List from "@material-ui/core/List";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
  loaderWrapper: {
    marginTop: "3rem",
    marginBottom: "3rem",
  },
});
export default function ArticleList({ loading, articles }) {
  const classes = styles();
  return (
    <>
      {loading ? (
        <div className={classes.loaderWrapper}>
          <CircularProgress />
        </div>
      ) : (
        <List>
          {articles.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </List>
      )}
    </>
  );
}

ArticleList.propTypes = {
  loading: PropTypes.bool.isRequired,
  articles: PropTypes.array.isRequired,
};
