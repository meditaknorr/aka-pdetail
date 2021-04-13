import React, { useState } from 'react';
import LoadingBar from '../loadingbar/component';
import './component.scss';

export default function SearchBar({ status, onPress }) {
  const [query, setQuery] = useState("");

  return (
    <React.Fragment>
      <form className={"main-search-bar"} onSubmit={searchbuttonHandler}>
        <input pattern="[A-Za-z\s]{3,20}" value={query} type="text" placeholder="Search criteria. e.g.: country name" onChange={queryAction} aria-label="Write here a country name" />
        {status?<div className={"loadingBar"}><LoadingBar /></div>:<button type="submit" value="Submit" aria-label="search a country detail" >search</button>}
      </form>
    </React.Fragment>
    )

    function queryAction(e) {
      setQuery(e.target.value);
    }
    function searchbuttonHandler(e) {
      e.preventDefault();
      if(query.length >= 3) {
        onPress(query);
        setQuery("");
      }
    }

  }
