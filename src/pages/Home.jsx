import React from 'react'
import Articles from '../components/Articles';
import axios from 'axios';
const Home = (props) => {
  return (
    <div>
      <Articles loading={props.loading} articles={props.articles} />
    </div >
  )
}

export default Home
