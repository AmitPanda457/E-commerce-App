import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
import { useSelector } from "react-redux";

const Cart = () => {
  const productCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const removeItem = (data) => {
    dispatch(remove(data));
  };
  const card = productCart.map((data) => {
    return (
      <div className="col-md-12 " style={{ marginBottom: "20px" }}>
        <Card key={data.id} className="h-100">
          <div className="text-center">
            <Card.Img
              variant="top"
              src={data.image}
              style={{ width: "100px", height: "130px" }}
            />
          </div>
          <Card.Body>
            <Card.Title>{data.title}</Card.Title>
            <Card.Text>INR {data.price}</Card.Text>
          </Card.Body>
          <Card.Footer style={{ background: "white" }}>
            <Button variant="danger" onClick={() => removeItem(data.id)}>
              Remove Item
            </Button>
          </Card.Footer>
        </Card>
      </div>
    );
  });
  return (
    <>
      <div className="row">{card}</div>
    </>
  );
};
export default Cart;
