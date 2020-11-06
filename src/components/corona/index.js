import React, { useState, useEffect } from 'react';
import app from '../../services/firebase';
import 'firebase/database';

const Corona = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const db = app.database().ref('news');
    console.log(db);
    db.on('value', (snapshot) => {
      const firebaseNews = snapshot.val();
      // console.log('news', firebaseNews.data);
      setNews(firebaseNews.data);
    });
  }, []);
  // console.log(news);
  return (
    <div>
      <h2>Data Corona</h2>
      {news.map((news) => {
        return (
          <div>
            <div class="list-group">
              {news.activity.map((actDetail) => {
                return (
                  <a
                    href={actDetail.url}
                    class="list-group-item list-group-item-action active"
                  >
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">{news.id}</h5>
                      <small>{news.date}</small>
                    </div>
                    <p class="mb-1">{actDetail.title}</p>
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Corona;
