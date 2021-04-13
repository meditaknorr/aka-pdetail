import React, { useState, useEffect } from 'react';
import Dataserver from '../../services/dataserver';
import Marker from '../../components/markers/component';
import Tile from '../../components/tiles/component';
import SearchBar from '../../components/searchbar/component';
import '../../styles/global.scss'

export default function Index() {
  const [datastore, setDatastore] = useState([]);
  const [loading, setLoading] = useState(false);
  const [marker, setMarker] = useState([
    { "id": 1, "country": "Mozambique"
    }, { "id": 2, "country": "Brazil" }
  ]);

  useEffect(() => {  }, []);

    return (
        <React.Fragment>
            <header className={"main-header"}> header </header>
            <main className={"main-container"}>

              <aside className={"aside-content"}>
                <Marker data={marker} onPress={MarkerAction} />
              </aside>

              <div className={"main-content-block"}>
                <div className={"search-bar"}>
                  <SearchBar status={loading} onPress={searchHandler} />
                </div>
                <div className={"search-results"}>
                  <Tile data={datastore} />
                </div>
              </div>

            </main>
            <footer className={"main-footer"}> footer </footer>
        </React.Fragment>
    )

    function MarkerAction(key) {
       let filtered = marker.filter(mark => {
         return mark.id != key;
       });
       setMarker(filtered);
     }

     function LoadingOff() {
       setLoading(false);
     }
     function LoadingOn() {
       setLoading(true);
     }
     function Datacaptcher(data) {
       const object = [...datastore, data[0]];
       setDatastore(object);
     }
     function searchHandler(query) {
       Dataserver(query, LoadingOff, Datacaptcher);
       LoadingOn();
     }
}
