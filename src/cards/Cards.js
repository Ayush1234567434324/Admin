import React from 'react'
import Navbar from '../navbar/navbar'
import {useState,useEffect} from 'react';

export default function Cards() {

    const [mangaData, setMangaData] = useState([]);

    useEffect(() => {
      // Define the URL of the API endpoint
      const apiUrl = "https://universe-tau.vercel.app/api/manga";
  
      // Fetch manga data from the API
      fetch(apiUrl)
        .then((response) => {
          
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json(); // Parse the response body as JSON
        })
        .then((data) => {
          // Set the fetched manga data in the state
          setMangaData(data);
          
        })
        .catch((error) => {
          // Handle any errors during the fetch
          console.error('Fetch error:', error);
        });
        
  
  
  
    }, [mangaData]);
  
  
  


  return (
    <><Navbar/>
    <div className="container" style={{background:"black",width:"100vw"}}>
  <div className="row " >
    {mangaData.map((manga, index) => (
      <div key={index} className={`col-md-4 mt-3`}>
        <div className="card" style={{ width: "18rem", marginBottom: "1rem" }}>
          <img src={manga.artwork} className="card-img-top" alt={manga.title} />
          <div className="card-body">
            <h5 className="card-title">{manga.title}</h5>
            <p className="card-text">{manga.description}</p>
            <a href={manga.url} className="btn btn-primary">Read Manga</a>
          </div>
        </div>
        {(index + 1) % 3 === 0 && <div className="w-100 d-md-none d-lg-none"></div>}
        {}
      </div>
    ))}
  </div>
</div>

    </>
    
  )
}
