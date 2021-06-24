import React, { useEffect, useState } from "react";
import axios from "axios";
import ArticleList from "../components/ArticleList";
import Loading from "../components/Loading";

export default function Week(props) {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const { time } = props;

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      const res = await axios.get(` https://api.nytimes.com/svc/mostpopular/v2/viewed/${time}.json?api-key=${process.env.REACT_APP_KEY}`);
      console.log(res);
      setArticles(res.data.results);
      setLoading(false);
    };
    getArticles();
  }, [time]);

  return <div className="grid"> {loading ? <Loading /> : <ArticleList articles={articles} />}</div>;
}
