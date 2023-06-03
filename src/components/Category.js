import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

function NavTabsExample() {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Header>
        <Nav variant='tabs'>
          <Nav.Item>
            <Nav.Link href='/vegetable'>채소류</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='/meat_fish'>고기/생선류</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='/nuts'>견과류</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='/dressing'>드레싱</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
    </Card>
  );
}

export default NavTabsExample;
