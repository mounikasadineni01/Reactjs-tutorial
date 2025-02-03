import { resList } from "../utils/mockData";
import Card from "./Card";
import { useState } from "react";

const Body = () => {
  const [restList, setrestList] = useState(resList);
  return (
    <div className="body">
      <div className="filter-res">
        <button
          className="filter-button"
          onClick={() => {
            const filtered = restList.filter((res) => res.data.avgRating > 4);
            setrestList(filtered);
          }}
        >
          See top restaurents
        </button>
      </div>
      <div className="res-container">
        <h1>See Restaurents</h1>
        <div className="res-list">
          {restList.map((res) => (
            <Card key={res.data.id} resData={res} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Body;
