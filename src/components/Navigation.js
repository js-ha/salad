import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavPillsExample() {
  return (
    <Card>
      <Card.Header>
        <Nav variant='pills' defaultActiveKey='#first'>
          <Nav.Item>
            <Nav.Link href='/main'>Main</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='/cart'>Cart</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
    </Card>
  );
}

export default NavPillsExample;
