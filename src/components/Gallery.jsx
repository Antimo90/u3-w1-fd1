import { Component } from "react";
import { Row, Col, Spinner, Alert } from "react-bootstrap";

const endpoint = "http://www.omdbapi.com/?apikey=91fd5d3f&s=";

class Gallery extends Component {
  state = {
    movies: [],
    isLoading: true,
    isError: false,
  };
  getMovies = (search) => {
    this.setState({ isLoading: true, isError: false, movies: [] });
    fetch(endpoint + search)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Errore : ${response.status} ${response.statusText}`);
        }
      })
      .then((data) => {
        console.log(data);
        this.setState({
          movies: data.Search,
          isLoading: false,
          isError: false,
        });
      })
      .catch((err) => {
        this.setState({
          isLoading: false,
          isError: true,
        });
        console.log("ERRORE DURANTE LA FETCH:", err);
      });
  };
  componentDidMount() {
    this.getMovies(this.props.movieSearch);
  }
  render() {
    const { movies, isLoading, isError } = this.state;

    return (
      <>
        <Row className="mx-2 g-2 no-wrap">
          {isLoading && (
            <div className="text-center my-4">
              <Spinner animation="border" variant="success" />
              <p className="text-white mt-2">Caricamento film...</p>
            </div>
          )}

          {isError && !isLoading && (
            <Alert variant="danger" className="text-center mx-3">
              Si è verificato un errore nel caricamento dei film per o nessun
              risultato trovato. Riprova più tardi!
            </Alert>
          )}

          {movies.slice(0, 6).map((movie) => (
            <Col xs={6} md={4} xl={2} key={movie.imdbID}>
              <img
                className="img-fluid"
                src={movie.Poster}
                alt={movie.Title}
                style={{ width: "100%", height: "290px" }}
              />
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

export default Gallery;
