import React, { useState, useEffect } from 'react';
import './component.scss';

export default function Tile({ data }) {
const [hashdata, setHashdata] = useState([]);
const [index, setIndex] = useState(0);
useEffect(() => {setHashdata(data)}, [data]);

function createIndex() {
  setIndex(prevState => prevState++);
}

function put(dados) {
  console.log(dados);
}

  return (
    <React.Fragment>
      {
        hashdata.map((value, key) => (
          <div className={"country-tile"}>
            <div className={"name-space"}>{value.name}</div>
            <div className={"details-space"}>
              <p className={"capital"}>{value.capital}</p>
              <p className={"region"}>{value.region}</p>
              <p className={"population"}>{value.population}</p>
              <p className={"area"}>{value.area}</p>
              <p className={"timezone"}>{value.timezone}</p>
              <p className={"native-name"}>{value.nativeName}</p>
              <img src={value.flag} alt={"flag"} />
            </div>
          </div>
        ))
      }
    </React.Fragment>
      )

}
