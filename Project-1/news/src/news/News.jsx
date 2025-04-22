import React from 'react';


const News = ({ newsData }) => {
  return (
    <>
    <title>  News - Breaking news, Latest news, Live news, Today news</title>
    
      <div className="container">
        <div className="row">
          <div className="header">
            <span style={{ borderRight: '1px solid black', paddingRight: '10px' }}>Edition</span>

            <select name="Country" id="Country">
              <option value="1">India</option>
              <option value="2">USA</option>
              <option value="3">Switzerland</option>
              <option value="4">Australia</option>
              <option value="5">Canada</option>
            </select>

            <button>Read More</button>
            <button>Subscribe To TOI+</button>

           
            <div style={{ display: 'flex', gap: '10px', marginLeft: 'auto' }}>
              <img src="https://tse2.mm.bing.net/th?id=OIP.iHM633kqshe4X5mBSzs9ewAAAA&pid=Api&P=0&h=180" alt="" />
              <img src="https://tse1.mm.bing.net/th?id=OIP.GXs2WSLR6jqhqTL_m72kpgHaFP&pid=Api&P=0&h=180" alt="" />
              <img src="https://tse3.mm.bing.net/th?id=OIP._JjoMNR9hbyl3tgxsaxLZQHaHa&pid=Api&P=0&h=180" alt="" />
              <img src="https://tse4.mm.bing.net/th?id=OIP.R3VG4Imr00pMaqM9a9Mh4AHaHa&pid=Api&P=0&h=180" alt="" />
            </div>
          </div>
        </div>
      </div>

    
      <div>
        <h1 className="news-title">THE TIMES OF INDIA</h1>
      </div>

    
      <div className="container">
        <div className="news-container">
          {newsData.map((item, index) => (
            <div className="news-card" key={index}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <img src={item.enclosure.thumbnail} alt="" />
              <a href={item.guid} target="_blank" rel="noopener noreferrer">
                <button>Read More..</button>
              </a>
              <p><strong>Published:</strong> {item.pubDate}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default News;
