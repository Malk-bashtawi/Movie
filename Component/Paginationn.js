import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import { PaginationControl } from 'react-bootstrap-pagination-control';

const Paginationn = ({NumerOfPages,GetCurrentPage}) => {
    const [pag, setPage] = useState(1)
    const numberOfpages=NumerOfPages;
  //console.log(NumerOfPages)
  GetCurrentPage(pag)
  return (
    <div>
     
   <PaginationControl
      page={pag}
      between={4}
      total={numberOfpages}
      limit={1}
      changePage={(p) => {
        setPage(p); 
        console.log(p)
      }}
      ellipsis={4}
    />
    </div>
  )
}

export default Paginationn
