import { Dropdown } from "react-bootstrap";

const MyTitle = () => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-3 container-fluid">
      <div className="d-flex align-items-center">
        <h2 className="ms-4 me-3">TV Shows</h2>{" "}
        <Dropdown>
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            className="rounded-0"
            style={{
              backgroundColor: "#221f1f",
              border: "1px solid white",
              padding: "0.25rem 0.5rem",
            }}
          >
            Genres
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="d-flex">
        <i className="bi bi-grid icons me-3"></i>
        <i className="bi bi-grid-3x3 icons me-4"></i>
      </div>
    </div>
  );
};

export default MyTitle;
