import Navbar from 'react-bootstrap/Navbar';
import logo from './kit.jpg';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return (
      <Navbar bg="dark" variant="dark">

        <Navbar.Brand href="/dashboard">
            <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            />
            &nbsp;Meme Gellery
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>

        <Nav className="mr-auto">
          <Nav.Link href="/category">Category</Nav.Link>
          <Nav.Link href="#pricing">Upload meme</Nav.Link>
          <NavDropdown title="Developer" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Vk</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Instagramm</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Mail</NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <Form inline>
          <FormControl size="sm" type="text" placeholder="Enter..." className="mr-sm-2" />
          <Button size="sm" variant="outline-light">Search</Button>
        </Form>

      </Navbar>
    )
}

export default Header;
