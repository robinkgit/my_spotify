import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './App.module.css';

function ArtistDetails() {
  const [artist, setArtist] = useState(null);// remplis la data artist par le SetArtist qui récupere la data du fetch
  const { id } = useParams(); // Récupérer l'ID de l'artiste depuis l'URL
  useEffect(() => {
    fetch(`http://localhost:8000/artists/${id}`)
      .then(response => response.json())
      .then(data => {
        setArtist(data);
      });
  }, [id]); 

  if (!artist) {
    return
  }


  return (
    <div  className={styles.divContent}>
      <h2 className={styles.filteredResult}>{artist.name}</h2>
      <img src={artist.photo} alt={artist.name} style={{ width: '500px', height: 'auto' }} />
      <p className={styles.filteredResult}>Description : {artist.description}</p>
      <p className={styles.filteredResult}>Bio : {artist.bio}</p>
    </div>
  );
}

export default ArtistDetails;