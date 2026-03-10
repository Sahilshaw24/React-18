import { useState, useEffect } from "react";

const Body = () => {
  const [resturantList, setResturantList] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.858427401320995&lng=88.3914329856634&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );

    const json = await data.json();
    setResturantList(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

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
        <ul>
          {resturantList.map((restaurant) => (
            <li key={restaurant.info.id}>
              {restaurant.info.name} - {restaurant.info.avgRating}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Body;