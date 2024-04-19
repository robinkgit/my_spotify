// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';

function App() {
  let [albums, setAlbums] = useState([]);
  fetch("http://localhost:8000/albums")
  .then(response => response.json())
  .then(
    data => {
      setAlbums(data);
  });  
  return (
    <div className="albums">
      {albums.map(album => <p>{album.name}</p>)}
    </div>
  );
}

export default App;