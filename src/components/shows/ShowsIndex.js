import { Link } from "react-router-dom";
import {useState, useEffect} from 'react';
import ErrorMessage from "../errors/ErrorMessage";
import { getAllShows } from "../../api/fetch";

import "./ShowsIndex.css";
const URL = process.env.REACT_APP_API_BASE_URL;
import ShowListing from "./ShowListing";

export default function ShowsIndex() {
  const [loadingError, setLoadingError] = useState(false)
  const [shows, setShows] = useState([])
  //const
  //const

  useEffect(() => {
    getAllShows().then((response) => {
      setShows(response)
      setLoadingError(false)
    }).catch((error) => {
      setLoadingError(true)
    })
  }, [])


  function handleTextChange(event) {
    console.log(searchTitle);
    const title=event.target.value;
    const result=title.length ? filterShows (title, allShows) : allShows

    setSearchTitle(title)
    setShows(result)
  }

  function filterShows (search, shows) {
    return shows.filter((show) => {
      return show.title.toLowerCase().match(search.toLowerCase)
    })
  }


  return (
    <div>
      {false ? (
        <ErrorMessage />
      ) : (
        <section className="shows-index-wrapper">
          <h2>All Shows</h2>
          <button>
            <Link to="/shows/new">Add a new show</Link>
          </button>
          <br />
          <label htmlFor="searchTitle">
            Search Shows:
            <input
              type="text"
              // value={searchTitle}
              id="searchTitle"
              // onChange={handleTextChange}
            />
          </label>
          <section className="shows-index">
            {/* <!-- ShowListing components --> */}
          </section>
        </section>
      )}
    </div>
  );
}
