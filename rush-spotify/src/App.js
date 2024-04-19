//import logo from './logo.svg';
import logo from './image/spotify.png';
import albums from './image/albums.png';
import artistes from './image/artistes.png';
import genre from './image/genre.png'
import Albums from './Albums.js';
import Artists from './Artists.js';
import Genres from './Genres';
import RandomAlbums from './RandomAlbums.js';
import AlbumDetails from './AlbumD';
import ArtistDetails from './ArtistDetails';
import menumobile from './image/menu.png';
import croix from './image/croix.png'




import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import styles from './App.module.css';
import { useState } from 'react';

function App() {
  const [album, setAlbum] = useState([]);
  const [filtre,setFiltre] = useState('');
  const [divContent, setdivContent] = useState()
  const [albums1, setAlbums] = useState([]);


  const changeValue =  (e) =>{
    
      var id = e.target.id
      console.log(id)

       var test1 =  "http://localhost:8000/" + id;
      setFiltre(test1)
      console.log(filtre)

      var input = document.querySelector("[data=input]")
      input.id = test1;
  }

  const filterFetch = (e) =>{
   var id = e.target.id;
  console.log(e.target);
    console.log(filtre);
    fetch(id)
    .then(response => response.json())
    .then(data => {
     const {value} = e.target;

     const filterData = (searchTerm) => {
      const album = data.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
      setAlbum(album)
    } 

    filterData(value);
  })  

  }

  const [change,setchange] = useState()
  
  const menu = (e) => {
   //e.preventDefault()
    var div = document.getElementById("div_select")
    if(div == null){
     return;
    }
    div.remove();
     var element = e.target.parentElement;
     console.log(element)
   var name = element.getAttribute("id");
   console.log(name)

   var p = document.getElementById("where");
   p.innerHTML = name;

   

  //  fetch("http://localhost:8000/" + e.target.parentElement.id.toLowerCase())
  // .then(response => response.json())
  // .then(
  //   data => {
  //     setAlbums(data);
  // });  

  }

  const change_tabs = (e) => {
     e.preventDefault()
     var div = document.getElementById("div_select")
     if(div == null){
      return;
     }
     div.remove();
      var test = e.target;
    var name = test.getAttribute("id");
    console.log(name)

    var p = document.getElementById("where");
    p.innerHTML = name;
    
    setchange(
    <div>
       <input type="text" id="input_search" data="input" className={styles.search} placeholder='Search' onChange={filterFetch}></input><br></br>
       <input type="radio" id="albums" onChange={changeValue} name="filtre"></input>
       <label className={styles.filteredResult} >Albums</label>

       <input type="radio" id="genres" onChange={changeValue} name="filtre"></input>
       <label className={styles.filteredResult}>Genre</label>

       <input type="radio" id="artists" onChange={changeValue} name="filtre"></input>
       <label  className={styles.filteredResult}>Artiste</label>
    </div>
    )


 
  }

  const slide = () =>{
    var accueil = document.getElementById("accueil");
    var recherche1 = document.getElementById("Recherche");
    var sugges = document.getElementById("sugges");
    var slide = document.getElementById("slideMenu");
    var croix_close = document.getElementById("croix");

    
    accueil.style.display = "block";
    recherche1.style.display = "block";
    sugges.style.display = "block";
    croix_close.style.display = "block"
    slide.style.display = "none";
    window.setTimeout(function(){
      accueil.style.opacity = 1;
      accueil.style.transform = 'scale(1)';
      recherche1.style.opacity = 1;
    recherche1.style.transform = 'scale(1)';    
    sugges.style.opacity = 1;
    sugges.style.transform = 'scale(1)';   
    },0);
    // accueil.style.opacity = 1;
    // accueil.style.transform = 'scale(1)';
    

    
    
    
  } 

  const close_menu = () => {
    var accueil = document.getElementById("accueil");
    var recherche1 = document.getElementById("Recherche");
    var sugges = document.getElementById("sugges");
    var slide = document.getElementById("slideMenu");
    var croix_close = document.getElementById("croix");

    accueil.style.opacity = 0;
    accueil.style.transform = 'scale(0)';
    recherche1.style.opacity = 0;
    recherche1.style.transform = 'scale(0)';
    recherche1.style.opacity = 0;
    recherche1.style.transform = 'scale(0)';
    sugges.style.opacity = 0;
    sugges.style.transform = 'scale(0)';

    window.setTimeout(function(){
      accueil.style.display = "none";
      recherche1.style.display = "none";
      sugges.style.display = "none";
      croix_close.style.display = "none";
      slide.style.display = "block";
    },500);
    
   

  }
  return (
    <Router>

    
          <div className={styles.div}>
          
      <div className={styles.menu}>
      <img src={croix} alt="croix fermeture" className={styles.croix} id="croix" onClick={close_menu}></img>
      <img src={menumobile} alt='Menu mobile' className={styles.mobilemenu} id="slideMenu" onClick={slide}></img>
      <img src={logo} className={styles.size} alt="logo spotify" id="spotify"></img>

      <a href="/" className={styles.aMenu} id="accueil">Accueil</a>
      <a href="/recherche" className={styles.aMenu} id="Recherche" onClick={change_tabs}>Recherche</a>
      <a href="/random" className={styles.aMenu} id="sugges">Suggestions</a>
      </div>


      <div>
        <p className={styles.pWhere} id="where">Accueil</p>
      </div>
      
      <div className={styles.divSelect} id="div_select">
        <a href="/genres" id="Genres"><img src={genre} alt="genre"  className={styles.imgSelect} onClick={menu}></img></a>
        <a href="/artists" id="Artists"><img src={artistes} alt="artistes" className={styles.imgSelect} onClick={menu}></img></a>
        <a href="/albums" id="Albums"><img src={albums} alt="albums" className={styles.imgSelect} onClick={menu}></img></a>
      </div>

      <div>
        {change}
        {album.map(album => (
          <p className={styles.filteredResult}>{album.name}</p>
      ))}
      </div>

      <div>
      <p className={styles.filteredResult}>{albums1.map(album1 => album1.name)}</p>
      </div>
        
      <Routes>
          <Route path="/albums" element={<Albums />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/random" element={<RandomAlbums />} />
          <Route path="/albums/:id" element={<AlbumDetails />} />
          <Route path="/artists/:id" element={<ArtistDetails />} />
        </Routes>
    </div>
  </Router>
  );
 
}

export default App;
