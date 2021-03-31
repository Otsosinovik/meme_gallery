import Navbar from 'react-bootstrap/Navbar';
import logo from './mone.jpg';

const NavbarBrand = () => {
    return (
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
    )
}

export default NavbarBrand;
