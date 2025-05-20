import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";

const CustomCheckoutItem = ({ item }) => {
  return (
    <ListGroup.Item key={item.id} className="checkout-page_group">
      <Image className="checkout-page_image" src={item.image} rounded />
      <p>
        {item.title} - ${item.price}
      </p>
    </ListGroup.Item>
  );
};

export default CustomCheckoutItem;
