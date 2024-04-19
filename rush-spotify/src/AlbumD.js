import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './App.module.css';


function AlbumDetails() {
    const [album, setAlbum] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:8000/albums/${id}`)
            .then(response => response.json())
            .then(data => {
                setAlbum(data);
            })
            .catch(error => {
                console.error('Error fetching album:', error);
            });
    }, [id]);

    if (!album) { // verifie la présence d'album
        return;
    }



    return ( // SI presence d'album affiche la div 
    <div className={styles.divContent}>
        <h2  className={styles.filteredResult}>{album.album.name}</h2> {/* ?? */}
        <p  className={styles.filteredResult}>id de l'artiste : {album.album.artist_id}</p>
    <p  className={styles.filteredResult}>{album.album.description}</p>
    <img src={album.album.cover} alt={album.album.name} style={{ width: '500px', height: 'auto' }} />
    <p  className={styles.filteredResult}>date de sortie : {album.album.release_date}</p>
    <p  className={styles.filteredResult}>Rangs de popularité : {album.album.popularity}</p>
        <p  className={styles.filteredResult}> Nombre de titre: {album.tracks.length}</p>
        <ul className={styles.filteredResult}>
            {album.tracks.map(track => ( // map les Tracks a track pour sortir les clef name et sa durée
                <li key={track.id}>
                <h4 className={styles.filteredResult}>{track.name}</h4>
                <p  className={styles.filteredResult}>Durée : {track.duration} secondes</p>
                <audio controls src={track.mp3}></audio>
              </li>
            ))}
        </ul>
    </div>
);
}

export default AlbumDetails;