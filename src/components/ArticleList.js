import React from "react";
import Article from "./Article.js";
import List from "@material-ui/core/List";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";

// Styles
const styles = makeStyles((theme) => ({
  listWrapper: {
    marginTop: "3rem",
    marginBottom: "0.5rem",
  },
}));
export default function ArticleList({ articles }) {
  const classes = styles();
  return (
    <div className={classes.listWrapper}>
      <List>
        {articles.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </List>
    </div>
  );
}

ArticleList.propTypes = {
  loading: PropTypes.bool.isRequired,
  articles: PropTypes.array.isRequired,
};
