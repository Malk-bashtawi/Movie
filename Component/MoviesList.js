import React from 'react'
import CardesMovies from './CardesMovies'
import Paginationn from './Paginationn'
import Row from 'react-bootstrap/Row';

const MoviesList = ({AllMovies,NumerOfPages, GetCurrentPage}) => {
  return (
    
    <Row className='mt-3'>
    
    {AllMovies.length >= 1 ?
      
      
      (AllMovies.map((mov) => (
        <CardesMovies key={mov.id} mov={mov}/>

      )))
       : <h1> No Elementes</h1>}


     <Paginationn NumerOfPages={NumerOfPages} GetCurrentPage={GetCurrentPage}/>
    </Row>

  )
}

export default MoviesList
