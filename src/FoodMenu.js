import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

// Display list of snacks or drinks, linking to each item
function FoodMenu({ items }) {
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {items.title}
          </CardTitle>
          <CardText>
            {items.description}
          </CardText>
          <ListGroup>
            {items.data.map(item => (
              <Link to={`/${items.url}/${item.id}`} key={item.id}> 
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
              
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;
