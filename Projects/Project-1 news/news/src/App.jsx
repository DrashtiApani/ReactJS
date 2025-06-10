import { useState, useEffect } from "react";
import News from "./news/News"
import './index.css'


function App() {
 
  let [news, setNews] = useState([])

  const getNews = async () => { fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://feeds.bbci.co.uk/news/rss.xml`)
    .then(res => res.json())
    .then((data) => {
      setNews(data.items)
      console.log(data.items);
      
    })
  }

  useEffect(() => {
    getNews();
  }, [])

  return (
   <>
   
    <News newsData={news} />

   </>
  )
}

export default App
