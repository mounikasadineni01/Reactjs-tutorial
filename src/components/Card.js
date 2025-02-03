import { IMG_URL } from "../utils/constants";

const Card = (props) => {
  // const{resName, cuisine, Rating} = props;
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, sla, costForTwo } =
    resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-image"
        src={IMG_URL + cloudinaryImageId}
        alt={name}
      ></img>
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>Rating : {avgRating} </h5>
      <h5>{costForTwo}</h5>
      <h5>{sla.deliveryTime} minutes</h5>
    </div>
  );
};

export default Card;
