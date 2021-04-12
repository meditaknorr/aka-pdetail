import React, { useState } from 'react';
import LoadingBar from '../loadingbar/component';
import './component.scss';

export default function({ status, onPress }) {
  const [query, setQuery] = useState("");

  function queryAction(e) {
    setQuery(e.target.value);
  }

  function searchbAction() {
    onPress();
  }

  return (
    <React.Fragment>
      <form className={"main-search-bar"} onSubmit={(e) => e.preventDefault()}>
        <input pattern="[a-zA-Z][a-zA-Z0-9_-]" value={query} type="text" minLength={3} maxLength={40} placeholder="Search criteria. e.g.: country name" onChange={queryAction} role="textbox" aria-label="Write here a country name" />
        {status?<div className={"loadingBar"}><LoadingBar /></div>:<button onClick={searchbAction} role="button" aria-label="search for a country detail" >search</button>}

      </form>
    </React.Fragment>
    )
  }
