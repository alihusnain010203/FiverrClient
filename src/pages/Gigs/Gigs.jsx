import React, { useEffect, useRef, useState } from "react";
import "./Gigsstyle.scss";
import GigCard from "../../components/GigCard/GigCard";
import newRequest from "../../utils/NewRequest.js";
import { useParams } from "react-router-dom";
import {gigs} from '../../dummydata.js'
const Gigs = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");
  const [data, setData] = useState([]);
  const [search, setSearch] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { category } = useParams();
  const [error, setError] = useState(null);
  const minRef = useRef();
  const maxRef = useRef();
  
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await newRequest.get(
        `/gigs${category ? `?category=${category}` : ""}&min=${minRef.current.value || 0}&max=${maxRef.current.value || 10000}&sort=${sort}`
      );
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(data);
  useEffect(() => {
    fetchData();
  }, [sort]);

  const apply = () => {
    fetchData();
    setOpen(false);
    minRef.current.value = "";
    maxRef.current.value = "";
  }

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  return (
    <div className="Gigs">
      <div className="container">
        <span className="breadcrumbs">FIVERR {">"} GRAPHICS & DESIGN</span>
        <h1>AI Artists</h1>
        <p>Explore the boundaries of art and technology with Fiverr's AI artists</p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" min={0} ref={minRef} placeholder="min"  />
            <input type="text" min={0} ref={maxRef} placeholder="max"  />
            <button onClick={fetchData}>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort by</span>
            <span className="sortType">{sort === "sales" ? "Best Selling" : "Newest"}</span>
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightmenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {isLoading ? (
            "Loading"
          ) : error ? (
            <div>Error: {error.message}</div>
          ) : (
            data.map((gig) => {
              return <GigCard key={gig.id} item={gig} />;
            })
          )}
          {/* {
            gigs.map((gig) => {
              return <GigCard key={gig.id} item={gig} />

            })
          } */}
        </div>
      </div>
    </div>
  );
};

export default Gigs;