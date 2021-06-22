import React, { useEffect, useState } from "react";
import axios from "axios";
import ArticleList from "../components/ArticleList";

export default function Week(props) {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const { time } = props;

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      const res = await axios.get(` https://api.nytimes.com/svc/mostpopular/v2/viewed/${time}.json?api-key=${process.env.REACT_APP_KEY}`);
      setArticles(res.data.results);
      setLoading(false);
    };
    getArticles();
  }, [time]);

  return <ArticleList loading={loading} articles={articles} />;
}
