import { resList } from "../utils/mockData";
import Card from "./Card";
import { useState } from "react";

const Body = () => {
  const [restList] = useState(resList);

  //   const [restList, setrestList] = useState(resList);

  const [filteredList, setFilteredList] = useState([]);

  const topRes = resList.filter((res) => res.data.avgRating > 4);

  const FastResFilter = () => {
    const filteredRes = resList.filter((res) => res.data.deliveryTime < 30);
    setFilteredList(filteredRes);
  };

  return (
    <div className="body">
      <div className="fastDelivery">
        <button className="fastDeliveryButton" onClick={FastResFilter}>
          Filter fast delivery restaurants
        </button>
        {/** onClick ={() => {const fl=restList.filter((res) => res.data.deliveryTime < 30); setRestList(fl);}}  */}
        {/* Show a new container for Fast Delivery Restaurants when the button is clicked */}
        {filteredList.length > 0 && (
          <div className="res-container">
            <h1>Fast Delivery Restaurants</h1>
            <div className="res-list">
              {/* Render the filtered list for fast delivery restaurants */}
              {filteredList.map((restaurant) => (
                <Card key={restaurant.data.id} resData={restaurant} />
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="res-container">
        <h1>Top Rated Restaurants</h1>
        <div className="res-list">
          {topRes.map((res) => (
            <Card key={res.data.id} resData={res} />
          ))}
        </div>
      </div>

      <div className="res-container">
        <h1>See all Restaurants</h1>
        <div className="res-list">
          {/* Render the full list of restaurants in the "See all Restaurants" section */}
          {restList.map((restaurant) => (
            <Card key={restaurant.data.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
