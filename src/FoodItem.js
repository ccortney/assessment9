import {useParams, Navigate } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

// Display snack or drink item information
function FoodItem({ items, cantFind }) {
  const { id } = useParams();
  let item = items.data.find(item => item.id === id);
  if (!item) return <Navigate to={cantFind} />;

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {item.name}
          </CardTitle>
          <CardText className="font-italic">{item.description}</CardText>
          <p>
            <b>Recipe:</b> {item.recipe}
          </p>
          <p>
            <b>Serve:</b> {item.serve}
          </p>
        </CardBody>
      </Card>
    </div>
  );
}

export default FoodItem;