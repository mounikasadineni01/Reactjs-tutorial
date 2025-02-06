import Card from "./Card";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RES_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
  const [restList, setrestList] = useState([]);
  const [filterrestList, setfilterrestList] = useState([]);

  const [searchval, setsearchval] = useState("");

  useEffect(() => {
    Fetchdata();
  }, []);

  const Fetchdata = async () => {
    const jdata = await fetch(RES_URL);
    const datajson = await jdata.json();
    console.log(datajson);
    setrestList(
      datajson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        .restaurants
    );
    setfilterrestList(
      datajson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
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
            <Link key={res.info.id} to={"Menu/" + res.info.id}>
              <Card resData={res} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Body;
