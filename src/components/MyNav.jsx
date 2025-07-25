import { Navbar, Nav, Container, Image } from "react-bootstrap";
import logo from "../../Netflix_Epicode_Non guardare stefano non è mio/assets/logo.png";

const MyNav = () => {
  return (
    <Navbar
      expand="lg"
      className=" mb-3"
      data-bs-theme="dark"
      style={{ background: "#221f1f" }}
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <Image
            src={logo}
            alt="Logo"
            style={{ width: "100px", height: "55px" }}
            rounded
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" className="active">
              Home
            </Nav.Link>
            <Nav.Link href="#">TV Shows</Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recently Added</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center ms-auto">
            <i className="bi bi-search icons text-white me-3"></i>
            <div className="fw-bold text-white me-3">KIDS</div>
            <i className="bi bi-bell icons text-white me-3"></i>
            <i className="bi bi-person-circle icons text-white me-3"></i>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
