import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const Menu = () => {
  const [MenuList, setMenuList] = useState(null);

  const { resID } = useParams();

  useEffect(() => {
    GetMenu();
  }, []);

  const GetMenu = async () => {
    const data = await fetch(MENU_URL + resID);
    const jdata = await data.json();
    console.log(jdata.data);
    setMenuList(jdata.data);
  };
  if (MenuList == null) {
    return <Shimmer />;
  }
  const { name, cuisines, avgRatingString, costForTwoMessage } =
    MenuList?.cards[2]?.card?.card?.info;
  const { itemCards } =
    MenuList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  return (
    <div>
      <h1>{name}</h1>
      <h2>{cuisines.join(" ")}</h2>
      <h2>Rating : {avgRatingString}</h2>
      <h2>{costForTwoMessage}</h2>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
