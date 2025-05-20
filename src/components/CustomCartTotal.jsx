import ListGroup from "react-bootstrap/ListGroup";

const CustomCartTotal = ({ cartItems }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);
  return <ListGroup.Item>Total: ${total}</ListGroup.Item>;
};

export default CustomCartTotal;
