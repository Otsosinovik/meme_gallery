import './App.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './mone.jpg';

const App = () => {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
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
          <Nav.Link href="#home">Работники</Nav.Link>
          <Nav.Link href="#pricing">Заработная плата</Nav.Link>
          <NavDropdown title="Табельный учет" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Отпускные</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Переработки</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Что нибудь</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Итоги месяца</NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <Form inline>
          <FormControl size="sm" type="text" placeholder="Введите..." className="mr-sm-2" />
          <Button size="sm" variant="outline-light">Поиск</Button>
        </Form>

      </Navbar>
    </div>
  );
}

export default App;
