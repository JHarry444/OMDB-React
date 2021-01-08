import {
  Button, Navbar, Form, FormControl,
} from 'react-bootstrap';

const Navigation = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">OMDB Example</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
