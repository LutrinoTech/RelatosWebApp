import "../styles/CustomCart.css";

const CustomCart = ({ items = 0 }) => {
  return items ? (
    <div className="cart">
      <span>{items}</span>
    </div>
  ) : null;
};

export default CustomCart;
