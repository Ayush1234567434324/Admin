import './App.css';
import {React,useState} from 'react';
function App() {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [status, setStatus] = useState('');
  const [artwork, setArtwork] = useState('');
  const [id, setId] = useState(0);
  const [description, setDescription] = useState('');
  const [genres, setGenres] = useState([]);
   









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
    title: 'Your Title',
    artist: 'Your Artist',
    status: 'Your Status',
    artwork: 'Your Artwork',
    id: 1, // Replace with the actual id
    genres: ['Action', 'Adventure'], // Replace with the selected genres
    description: 'Your Description',
  };
  const backendEndpoint = 'https://universe-tau.vercel.app/api';

  const fetchInputValues = () => {
    console.log('Title:', title);
    console.log('Artist:', artist);
    console.log('Status:', status);
    console.log('Artwork:', artwork);
    console.log('ID:', id);
    console.log('Description:', description);
    console.log('Genres:', genres);

    fetch(`${backendEndpoint}/submit-data`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to send data to the backend.');
        }
      })
      .then((data) => {
        console.log('Data sent successfully:', data);
      })
      .catch((error) => {
        console.error('Error:', error.message);
      });

    






    setId(id+1);

  };




  
  return (
 <>
 <nav className="navbar navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Admin Panel</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Link</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><a className="dropdown-item" href="/">Action</a></li>
              <li><a className="dropdown-item" href="/">Another action</a></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <li><a className="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form className="d-flex mt-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
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


  <div className="form-group">
    <label style={{"color":"white"}} htmlFor="exampleFormControlTextarea1">Discription</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
  </div>

  <button className='btn btn-primary my-2' onClick={fetchInputValues}>Fetch Input Values</button>
  </div>

</div>


</>
  );

 








}

export default App;
