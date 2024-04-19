//import logo from './logo.svg';
import logo from './image/spotify.png';
import albums from './image/albums.png';
import artistes from './image/artistes.png';
import genre from './image/genre.png'



import styles from './App.module.css';

export function recherchePage() {
  fetch("http://localhost:8000/albums")
  .then(response => response.json())
  .then(data=> console.log(data));
  
  return (
    <>
     <p className={styles.aMenu}>test</p>
    </>
  );
}

export default recherchePage();
