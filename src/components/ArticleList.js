import React from "react";
import Article from "./Article.js";
import CircularProgress from "@material-ui/core/CircularProgress";
import List from "@material-ui/core/List";
import PropTypes from "prop-types";

export default function ArticleList({ loading, articles }) {
  return (
    <div className="grid">
      <>
        {loading ? (
          <div className="progressWrapper">
            <CircularProgress />
          </div>
        ) : (
          <div className="listWrapper">
            <List>
              {articles.map((article) => (
                <Article key={article.id} article={article} />
              ))}
            </List>
          </div>
        )}
      </>
    </div>
  );
}

ArticleList.propTypes = {
  loading: PropTypes.bool.isRequired,
  articles: PropTypes.array.isRequired,
};
