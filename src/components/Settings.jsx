// src/components/Settings.jsx
import React from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import MyNav from "./MyNav"; // Assicurati che il percorso sia corretto
import MyFooter from "./MyFooter"; // Assicurati che il percorso sia corretto

const Settings = () => {
  return (
    <>
      <MyNav />
      <Container className="my-5 text-white">
        <h2 className="mb-4">Impostazioni</h2>
        <Card className="bg-dark text-white border-secondary mb-4">
          <Card.Header className="h5 border-secondary">Generali</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formLanguage">
                <Form.Label>Lingua Preferita</Form.Label>
                <Form.Select className="bg-secondary text-white border-secondary">
                  <option>Italiano</option>
                  <option>English</option>
                  <option>Español</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formNotifications">
                <Form.Check
                  type="switch"
                  id="custom-switch-notifications"
                  label="Ricevi notifiche via email"
                  className="text-white"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formAutoplay">
                <Form.Check
                  type="switch"
                  id="custom-switch-autoplay"
                  label="Riproduzione automatica episodio successivo"
                  className="text-white"
                />
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>

        <Card className="bg-dark text-white border-secondary mb-4">
          <Card.Header className="h5 border-secondary">
            Riproduzione
          </Card.Header>
          <Card.Body>
            <Form.Group className="mb-3" controlId="formQuality">
              <Form.Label>Qualità video preferita</Form.Label>
              <Form.Select className="bg-secondary text-white border-secondary">
                <option>Automatica</option>
                <option>Bassa</option>
                <option>Media</option>
                <option>Alta</option>
              </Form.Select>
            </Form.Group>
          </Card.Body>
        </Card>

        <Button variant="success" className="me-2">
          Salva Impostazioni
        </Button>
        <Button variant="outline-danger">Annulla</Button>
      </Container>
      <MyFooter />
    </>
  );
};

export default Settings;
