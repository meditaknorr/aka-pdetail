import React, { useState, useEffect } from 'react';
import Marker from '../../components/markers/component';
import SearchBar from '../../components/searchbar/component';
import '../../styles/global.scss'

export default function Index() {
  const [data, setData] = useState([]);
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
                <div className={"search-bar"}>
                  <SearchBar />
                </div>
                <div className={"search-results"}>

                </div>
              </div>
            </main>

            <footer className={"main-footer"}>
              footer
            </footer>
        </React.Fragment>
    )
}
