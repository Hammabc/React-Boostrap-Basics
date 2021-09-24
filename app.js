import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Container>
          <Form className="mb-2">
            <Row>
              <Col md>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email Adress</Form.Label>
                  <Form.Control type="email" placeholder="example@gmail.com" />
                  <Form.Text className="text-muted">
                    Make sure to use the right e-mail!
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter Your password" />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="secondary" type="submit">
              Login
            </Button>
          </Form>
          <Card className="mb-3" style={{ color: "#000" }}>
            <Card.Img src="https://media.gettyimages.com/photos/quaideazam-picture-id184944186?s=612x612" />
            <Card.Body>
              <Card.Title>Hello</Card.Title>
              <Card.Text>This is the Tomb of Quaid and it is located in Karachi!</Card.Text>
            </Card.Body>
          </Card>
          <Button>Button</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;
