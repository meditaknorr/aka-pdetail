import React, { useState, useEffect } from 'react';
import Marker from '../../components/markers/component';
import '../../styles/global.scss'

export default function Index() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState([]);
  const [marker, setMarker] = useState([
    { "id": 1, "country": "Mozambique"
    }, { "id": 2, "country": "Brazil" }]);

  useEffect(() => {  }, []);

  const deleteMarker = (key) => {
     let filtered = marker.filter(mark => {
       return mark.id != key;
     });
     setMarker(filtered);
   }

    return (
        <React.Fragment>
            <header className={"main-header"}>
              header
            </header>

            <main className={"main-container"}>

              <aside className={"aside-content"}>
                <Marker data={marker} onPress={deleteMarker} />
              </aside>

              <div className={"main-content-block"}>
                <form className={"main-search-bar"} onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Write here your search parameters. E.g.: Mozambique, Portugal" onChange={() => {return}} />
                  <button className={""}>search</button>
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
