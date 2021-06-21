import React from 'react'
import ArticleList from '../components/ArticleList';
const Home = (props) => {
  return (
    <div>
      <ArticleList loading={props.loading} articles={props.articles} />
    </div >
  )
}

export default Home
