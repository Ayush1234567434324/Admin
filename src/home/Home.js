
import {React,useState,useEffect} from 'react';
import Navbar from '../navbar/navbar';

function Home() {
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
        setId(mangaData.length);
      })
      .catch((error) => {
        // Handle any errors during the fetch
        console.error('Fetch error:', error);
      });
      



  }, [mangaData]);





  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [status, setStatus] = useState('');
  const [artwork, setArtwork] = useState('');
 
  const [description, setDescription] = useState('');
  const [genres, setGenres] = useState([]);
 
  const [id, setId] = useState(mangaData.length);


  // Handle changes in input values
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'artist':
        setArtist(value);
        break;
      case 'status':
        setStatus(value);
        break;
      case 'artwork':
        setArtwork(value);
        break;
      case 'id':
        setId(value);
        break;
      case 'description':
        setDescription(value);
        break;
      default:
        break;
    }
  };
  const handleGenreChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setGenres((prevGenres) => [...prevGenres, value]);
    } else {
      setGenres((prevGenres) => prevGenres.filter((genre) => genre !== value));
    }
  };


  const formData = {
    title,
    artist,
    status,
    artwork,
    id,
    genre:genres, 
    description,
  };
  const backendEndpoint = 'https://universe-tau.vercel.app/api';

  const fetchInputValues = () => {
    console.log(formData);
    fetch(`${backendEndpoint}/submit-data`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
       
        if (response.ok) {
          return response.text(); // Get the response text
        } else {
          throw new Error('Failed to send data to the backend.');
        }
      })
      .then((responseText) => {
        console.log('Response Text:', responseText); // Log the response text
        // Parse the JSON here
        const data = JSON.parse(responseText);
        console.log('Data sent successfully:', data);
      })
      .catch((error) => {
        console.error('Error:', error.message);
      });
    




   

  };




  
  return (
 <>
 <Navbar/>
<div className="outer-container">
  <h1 style={{ color: "white" }}>Weebmania</h1>
  <div className="inner-container">
      <div className="input-group flex-nowrap my-2" style={{ width: "30vw" }}>
        <span className="input-group-text" id="addon-wrapping">@</span>
        <input
          type="text"
          name="title"
          className="form-control"
          placeholder="Title"
          aria-label="Title"
          aria-describedby="addon-wrapping"
          value={title}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-group flex-nowrap my-2" style={{ width: "30vw" }}>
        <span className="input-group-text" id="addon-wrapping">@</span>
        <input
          type="text"
          name="artist"
          className="form-control"
          placeholder="Artist"
          aria-label="Artist"
          aria-describedby="addon-wrapping"
          value={artist}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-group flex-nowrap my-2" style={{ width: "30vw" }}>
        <span className="input-group-text" id="addon-wrapping">@</span>
        <input
          type="text"
          name="status"
          className="form-control"
          placeholder="Status"
          aria-label="Status"
          aria-describedby="addon-wrapping"
          value={status}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-group flex-nowrap my-2" style={{ width: "30vw" }}>
        <span className="input-group-text" id="addon-wrapping">@</span>
        <input
          type="text"
          name="artwork"
          className="form-control"
          placeholder="Artwork"
          aria-label="Artwork"
          aria-describedby="addon-wrapping"
          value={artwork}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-group flex-nowrap my-2" style={{ width: "30vw" }}>
        <span className="input-group-text" id="addon-wrapping">@</span>
        <input
          type="number"
          name="id"
          className="form-control"
          placeholder="0"
          aria-label="id"
          aria-describedby="addon-wrapping"
          value={id}
          onChange={handleInputChange}
        />
      </div>
    <div className="genre mx-5" style={{ display: "flex", flexWrap: "wrap" }}>
  {[
    "Action",
    "Adventure",
    "Comedy",
    "Crime",
    "Drama",
    "Fantasy",
    "Gossip",
    "Historical",
    "Horror",
    "Magic",
    "Mystery",
    "Psychological",
    "Romance",
    "School-Life",
    "Sci-fi",
    "Seinen",
    "Shoujo",
    "Shounen",
    "Slice of Life",
    "Sports",
    "Supernatural",
    "Thriller",
    "Tragedy",
    "Yuri",
  ].map((genre) => (
    <div className="form-check form-check-inline col-2 mx-5" key={genre}>
      <input
        className="form-check-input"
        type="checkbox"
        id={`genreCheckbox_${genre}`}
        value={genre}
        checked={genres.includes(genre)}
        onChange={handleGenreChange}
      />
      <label
        style={{ color: "white" }}
        className="form-check-label"
        htmlFor={`genreCheckbox_${genre}`}
      >
        {genre}
      </label>
    </div>
  ))}
</div>


  <div className="form-group my-5" >
    <label style={{"color":"white"}} htmlFor="exampleFormControlTextarea1" >Discription</label>
    <textarea className="form-control"  id="exampleFormControlTextarea1" rows="2"   name="description" value={description} onChange={handleInputChange} ></textarea>
  </div>

  <button className='btn btn-primary my-2' onClick={fetchInputValues}>Fetch Input Values</button>
  </div>
</div>

<div className='message'>
<div className="right">
 <img className="mobile" src="mobile.png" alt='...'/>
 <img className="mobile-content" src={(artwork==='')?"https://i.imgur.com/DFfU4Et.jpg":artwork} alt='...'/>
 </div>
<div className="left">
<div className="card" style={{width: "18rem"}}>
  <img src={(artwork==='')?"https://i.imgur.com/DFfU4Et.jpg":artwork} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{artist}</p>
    <p className='card-status'>{status}</p>
  </div>
</div>
</div> 
 </div>



<h1 className='tagname'>Tags</h1>
<div className='tags-container'>
  {[...Array(3)].map((_, rowIndex) => (
    <div className='tags-row' key={rowIndex} style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
      {genres.slice(rowIndex * 7, (rowIndex + 1) * 7).map((genre, index) => (
        <div key={index} className='tag' style={{ fontSize: '16px', marginRight: '50px', marginBottom: '10px', color: 'white' }}>{genre}</div>
      ))}
    </div>
  ))}
</div>







</>
  );

 








}

export default Home;
