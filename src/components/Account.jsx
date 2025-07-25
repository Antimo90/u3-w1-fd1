
import React from "react";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import MyNav from "./MyNav"; 
import MyFooter from "./MyFooter"; 

const Account = () => {
  return (
    <>
      <MyNav />
      <Container className="my-5 text-white">
        <h2 className="mb-4">Account</h2>
        <Row className="mb-4">
          <Col md={8}>
            <Card className="bg-dark text-white border-secondary">
              <Card.Header className="h5 border-secondary">
                Membro Dal: Luglio 2023
              </Card.Header>
              <Card.Body>
                <Card.Title>Dettagli Profilo</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item className="bg-dark text-white border-secondary">
                    **Email:** utente@esempio.com
                  </ListGroup.Item>
                  <ListGroup.Item className="bg-dark text-white border-secondary">
                    **Nome Utente:** MarioRossiNetflix
                  </ListGroup.Item>
                  <ListGroup.Item className="bg-dark text-white border-secondary">
                    **Abbonamento:** Premium Ultra HD
                  </ListGroup.Item>
                </ListGroup>
                <Button variant="outline-light" className="mt-3 me-2">
                  Gestisci Abbonamento
                </Button>
                <Button variant="outline-info" className="mt-3">
                  Cambia Password
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="bg-dark text-white border-secondary">
              <Card.Header className="h5 border-secondary">
                Piani e Pagamenti
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Il tuo prossimo addebito è il 25 Agosto 2025.
                </Card.Text>
                <Button variant="outline-light">
                  Aggiorna Dettagli Pagamento
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <Card className="bg-dark text-white border-secondary">
              <Card.Header className="h5 border-secondary">
                Profili & Parental Control
              </Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item className="bg-dark text-white border-secondary">
                    **Principale:** Tutti i contenuti
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      className="float-end"
                    >
                      Gestisci
                    </Button>
                  </ListGroup.Item>
                  <ListGroup.Item className="bg-dark text-white border-secondary">
                    **Bambini:** Solo contenuti per bambini
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      className="float-end"
                    >
                      Gestisci
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
                <Button variant="outline-light" className="mt-3">
                  Aggiungi Profilo
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <MyFooter />
    </>
  );
};

export default Account;
