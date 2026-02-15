import { useState, useEffect } from "react";

const [resturantList, setResturantList] = useState("");

useEffect(() => {
  fetchdata();
}, []);

const fetchdata = async () => {
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.858427401320995&lng=88.3914329856634&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
  );

  const json = await data.json();
  console.log(json);
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          placeholder="Search for restaurant, cuisine or a dish..."
        />
      </div>
      <div className="restaurant-list">
        <h2>Restaurant List</h2>
      </div>
    </div>
  );
};

export default Body;
