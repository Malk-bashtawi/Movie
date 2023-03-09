import Container from 'react-bootstrap/esm/Container';
import MoviesList from './Component/MoviesList';
import Navbar from './Component/Navbar';
import Tg from './Component/Tg';
import axios from 'axios'
import { useEffect, useState } from 'react';
import MoviDetails from './Component/MoviDetails';
import {Route,Routes,BrowserRouter } from "react-router-dom";



function App() {
  //get all movie by axios
  const [AllMovies, setAllMovies] = useState([]);
  const [NumerOfPages, setNumerOfPages] = useState(0);

  
  const fetchPost = async () => {
    try {
      const response = await axios
('https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=1'
      );
      console.log(response.data.results)
      setNumerOfPages(response.data.total_pages
        )

      setAllMovies(response.data.results);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(()=> {
    fetchPost();
  }, [])
 
  //get current page
  const GetCurrentPage = async (page) => {
    try {
      const response = await axios
      ( `https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=${page}`
      );
     // console.log(response.data)
     setAllMovies(response.data.results);
     setNumerOfPages(response.data.total_pages
      )

    } catch (err) {
      console.error(err);
    }
  };
 
   
 
   //to search in api
 
   const Search = async(val) => {
    if(val !== ''){
      const responseData = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=1&include_adult=false&query=${val}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
     setAllMovies(responseData.results);
      setNumerOfPages(responseData.total_pages);
      console.log(responseData.results)
      
  
    }else{
      fetchPost()

   
    };
  }
   



  return (
    <div className="color_body">
     <Navbar Search={Search} />
     <Container>
     <BrowserRouter>
     <Routes>
     <Route path="/" element={ <MoviesList AllMovies={AllMovies} NumerOfPages={NumerOfPages}  GetCurrentPage={ GetCurrentPage}/>} />
     <Route path="/:id" element={<MoviDetails />} />
    </Routes>
       </BrowserRouter>
          

     </Container>
    </div>
  );
  }

export default App;


/*
  if(val === null)
    {
      fetchPost();

    } 
    
    else{
      try {
        const response = await axios
        ( `https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=1&query=${val}`
        );
        console.log(response.data.results)
        setAllMovies(response.data.results);
        setNumerOfPages(response.data.total_pages)
        //console.log(val)
 
      } catch (err) {
        console.error(err);
      }
  
   };





*/