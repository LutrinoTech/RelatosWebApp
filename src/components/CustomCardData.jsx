import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/CustomCardData.css";

const CustomCardData = ({ icon, data }) => {
  return (
    <div className="card-metadata">
      <FontAwesomeIcon icon={icon} size="lg" color="gray" />
      <span>{data}</span>
    </div>
  );
};

export default CustomCardData;
