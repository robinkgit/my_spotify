import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './App.module.css';


function Artists() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/artists")
      .then(response => response.json())
      .then(data => {
        setArtists(data);
      });
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const artistsPerPage = 32;
  const lastIndex = currentPage * artistsPerPage;
  const firstIndex = lastIndex - artistsPerPage;
  const currentArtists = artists.slice(firstIndex, lastIndex);
  const numberOfButtons = Math.ceil(artists.length / artistsPerPage);
  const arrayButtons = [];
  for(let i = 1; i<= numberOfButtons; i++){
    arrayButtons.push(i);
  }

  var div = document.getElementById("div_select")
  if(div == null){
   return;
  }else(
    div.innerHTML = ""
  )
  var p = document.getElementById("where");
    p.innerHTML = "Artists";

  return (
    <div className={styles.divContent}>
      <ul className={styles.filteredResult}>
      {currentArtists.map(artist => (
            <p className={styles.filteredResult} key={artist.id}><Link key={artist.id} to={`/artists/${artist.id}`}  className={styles.filteredResult}>{artist.name}</Link></p> /* Remplace le Href , au clic sur Le name , redirige vers /artist/et l'id artist */
      ))}
      </ul>
      <div className={styles.button}>
        {arrayButtons.map((index) => (
          <button key={index} onClick={() => setCurrentPage(index)}>{index}</button>
        ))}
      </div>
    </div>
  );
}

export default Artists;