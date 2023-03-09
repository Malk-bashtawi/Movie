import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Tg = ({Search}) => {
  const setInput=(val)=>{
    Search(val)
  
  }
  
  return (
    <div>
   
    
    
          <Container >
          <Navbar bg="light" expand="lg">

          <img src='../m.jfif'  />
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
               
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={event => setInput(event.target.value)} 
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
        </Navbar>
        </Container>

      
    
    </div>
  )
}

export default Tg
