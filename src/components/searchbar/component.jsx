import React, { useState } from 'react';
import './component.scss';

export default function() {
  const [query, setQuery] = useState("");

  function queryAction(e) {
    setQuery(e.target.value);
  }

  function searchbAction() {
    setQuery("");
  }

  return (
    <React.Fragment>
      <form className={"main-search-bar"} onSubmit={(e) => e.preventDefault()}>
        <input pattern="[a-zA-Z][a-zA-Z0-9_-]" value={query} type="text" minLength={3} maxLength={40} placeholder="Search criteria. e.g.: country name, country code" onChange={queryAction} role="textbox" aria-label="Write here a country name" />
        <button onClick={searchbAction} role="button" aria-label="search for a country detail" >search</button>
        <div className={"processing"}></div>
      </form>
    </React.Fragment>
    )
  }
