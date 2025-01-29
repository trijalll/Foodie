import React, { useEffect, useState } from "react";
import ResCard from "./Res-card";
import Fakecard from "./Fakecard";
import { Link } from "react-router-dom";

function RestaurantContainer() {
  const [rest, Setrest] = useState([]);
  const [srch, Setsrch] = useState("");
  const [another_list, setanother_list] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    finder();
  }, [srch]);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://food-del-backend-xe66.onrender.com/api"
      );
      const json = await data.json();
      const restaurants =
        json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
      Setrest(restaurants);
      setanother_list(restaurants);
    } catch (err) {
      console.log("Error fetching data:", err);
      alert("Api issue");
    }
  };

  const finder = () => {
    const up_list = rest.filter((res) =>
      res.info.name.toLowerCase().includes(srch.toLowerCase())
    );
    setanother_list(up_list);
  };

  const search = () => {
    return <></>;
  };

  return (
    <div className="mb-[8vw]">
  <div className="search w-full flex items-center justify-center">
    <div className="searchBody h-[15vh] w-[50%] flex items-center justify-center my-10 relative">
      {/* Search Icon */}
      <i className="ri-search-line absolute left-6 text-white text-lg"></i>

      {/* Search Input */}
      <input
        className="w-full h-[60%] rounded-full pl-12 pr-4 border bg-slate-600 placeholder-white text-white focus:outline-none"
        value={srch}
        onChange={(e) => Setsrch(e.target.value)}
        type="text"
        placeholder="Search your restaurant here..."
      />
    </div>
  </div>

  {rest.length === 0 ? (
    <div className="flex flex-wrap gap-5 m-auto w-4/5 md:my-4 justify-center">
      <Fakecard />
      <Fakecard />
      <Fakecard />
      <Fakecard />
      <Fakecard />
    </div>
  ) : (
    <div className="h-auto w-[90vw] mx-auto flex flex-wrap justify-center gap-[5vw]">
      {another_list.map((res) => (
        <Link to={"/restaurants/" + res.info.id} key={res.info.id}>
          <ResCard
            name={res.info.name}
            img_id={res.info.cloudinaryImageId}
            rating={res.info.avgRating}
            time={res.info.sla.deliveryTime}
            areaname={res.info.areaName}
          />
        </Link>
      ))}
    </div>
  )}
</div>

  );
}

export default RestaurantContainer;
