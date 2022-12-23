import React from 'react'
import { useSelector } from 'react-redux';

const News = () => {
  const cryptoNews = useSelector((news) => news?.cryptoNews?.cryptoNews);

  return (
    <div>News</div>
  )
}

export default News