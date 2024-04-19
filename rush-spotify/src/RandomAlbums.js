import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import { Link } from 'react-router-dom';

function RandomAlbums() {
  const [randomAlbums, setRandomAlbums] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/albums")
      .then(response => response.json())
      .then(data => {
        console.log(data);
          const max = data.length - 1;
          let tmpRandomAlbums = [];
          for (let i = 0; i < 10; i++) {
            let tmp = Math.floor(Math.random() * max);
            tmpRandomAlbums.push(data[tmp]);
          }
          setRandomAlbums(tmpRandomAlbums);
          let interval = setInterval(function () {  //https://devtrium.com/posts/set-interval-react#the-code
            let tmpRandomAlbums = [];
            for (let i = 0; i < 10; i++) {
              let tmp = Math.floor(Math.random() * max);
              tmpRandomAlbums.push(data[tmp]);
            }
            setRandomAlbums(tmpRandomAlbums);
          }, 1000 * 120);
        return () => clearInterval(interval);
      });
  }, []);

  var div = document.getElementById("div_select")
  if(div == null){
   return;
  }else(
    div.innerHTML = ""
  )
  var p = document.getElementById("where");
    p.innerHTML = "Suggestions";

  return (
    <div className={styles.divContent}>
      <ul style={{ listStyle: 'none'}} className={styles.filteredResult}>
        {randomAlbums.map(album => (
          <li key={album.id} style={{ marginBottom: '10px' }}>
            <p key={album.id} className={styles.filteredResult}><Link key={album.id} to={`/albums/${album.id}` } className={styles.filteredResult}>{album.name}</Link></p>
            <img src={album.cover} alt={album.name} style={{ width: '200px', height: 'auto' }} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RandomAlbums;