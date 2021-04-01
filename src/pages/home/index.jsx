import React, { useState, useEffect } from 'react';
import Marker from '../../components/markers/component';
import '../../styles/global.scss'

export default function Index() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [marker, setMarker] = useState([
    { "id": 1, "country": "Mozambique"
    }, { "id": 2, "country": "Brazil" }]);

  useEffect(() => {  }, []);

  function markerAction(key) {
     let filtered = marker.filter(mark => {
       return mark.id != key;
     });
     setMarker(filtered);
   }

  function queryAction(e) {
    setQuery(e.target.value);
  }

  function searchbAction() {
    setQuery("");
  }

    return (
        <React.Fragment>
            <header className={"main-header"}>
              header
            </header>

            <main className={"main-container"}>
              <aside className={"aside-content"}>
                <Marker data={marker} onPress={markerAction} />
              </aside>

              <div className={"main-content-block"}>
                <form className={"main-search-bar"} onSubmit={(e) => e.preventDefault()}>
                  <input pattern="[a-zA-Z][a-zA-Z0-9_-]" value={query} type="text" minLength={3} maxLength={40} placeholder="Search criteria. e.g.: country name, country code" onChange={queryAction} role="textbox" aria-label="Write here a country name" />
                  <button onClick={searchbAction} role="button" aria-label="search for a country detail" >search</button>
                </form>
                <div className={"main-search-result"}>

                </div>
              </div>
            </main>

            <footer className={"main-footer"}>
              footer
            </footer>
        </React.Fragment>
    )
}
