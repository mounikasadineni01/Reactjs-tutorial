const Shimmer = () => {
  return (
    <div className="body">
      <div className="filter-res">
        <div className="search-res">
          <input type="text"></input>
          <button className="Search-button">Search</button>
        </div>
        <button className="filter-button">See top restaurents</button>
      </div>
      <div className="res-container">
        <h1>See Restaurents</h1>
        <div className="res-list">
          <div className="shimmerCard"></div>
          <div className="shimmerCard"></div>
          <div className="shimmerCard"></div>
          <div className="shimmerCard"></div>
          <div className="shimmerCard"></div>
          <div className="shimmerCard"></div>
          <div className="shimmerCard"></div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
