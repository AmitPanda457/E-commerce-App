import { useDispatch } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { add } from "../store/cartSlice";
import "./card.css";

const CardComponent = (props) => {
  const dispatch = useDispatch();

  const addToCart = (data) => {
    dispatch(add(data));
  };

  return (
    <div className="col-md-3 card-container">
      <Card key={props.data.id} className="h-100 custom-card">
        <div className="text-center card-content">
          <Card.Img
            variant="top"
            src={props.data.image}
            className="card-image"
            style={{ width: "100px" }}
          />
        </div>
        <Card.Body>
          <Card.Title className="card-title">{props.data.title}</Card.Title>
          <Card.Text className="card-price">INR {props.data.price}</Card.Text>
        </Card.Body>
        <Card.Footer className="card-footer">
          <Button variant="primary" onClick={() => addToCart(props.data)}>
            ADD TO CART
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CardComponent;
