import { IMG_URL } from "../utils/constants";

const Card = (props) => {
  // const{resName, cuisine, Rating} = props;
  const { resData } = props;
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data;
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
      <h5>{costForTwo / 100} FOR TWO</h5>
      <h5>{deliveryTime} minutes</h5>
    </div>
  );
};

export default Card;
