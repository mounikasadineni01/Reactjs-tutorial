import Card from "./Card";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restList, setrestList] = useState([]);
  const [filterrestList, setfilterrestList] = useState([]);

  const [searchval, setsearchval] = useState("");

  useEffect(() => {
    Fetchdata();
  }, []);

  const Fetchdata = async () => {
    const jdata = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.66500&lng=77.44770&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const datajson = await jdata.json();
    console.log(datajson);
    setrestList(
      datajson?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
        .restaurants
    );
    setfilterrestList(
      datajson?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
        .restaurants
    );
  };

  return restList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter-res">
        <div className="search-res">
          <input
            type="text"
            value={searchval}
            onChange={(e) => {
              setsearchval(e.target.value);
            }}
          ></input>
          <button
            className="Search-button"
            onClick={() => {
              const filteredres = restList.filter((res) =>
                res.info.name.toLowerCase().includes(searchval.toLowerCase())
              );
              setfilterrestList(filteredres);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-button"
          onClick={() => {
            const filtered = restList.filter((res) => res.info.avgRating > 4);
            setrestList(filtered);
          }}
        >
          See top restaurents
        </button>
      </div>
      <div className="res-container">
        <h1>See Restaurents</h1>
        <div className="res-list">
          {filterrestList.map((res) => (
            <Card key={res.info.id} resData={res} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Body;
