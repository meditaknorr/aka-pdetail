import React, { useState, useEffect } from 'react';
import { X, Hash } from 'react-bootstrap-icons';
import './component.scss';

export default function ({ data, onPress }) {
const [hashdata, setHashdata] = useState(data);
useEffect(() => {setHashdata(data)}, [data]);

  return (
    <React.Fragment>
      {
        hashdata.map((data, key) => (
          <div key={data.id} className={"tagword-demo"}>
            <Hash role="img" aria-label="remove" className={"hashtag"} />
            <span className={"country-name"}>{data.country}</span>
            <X id={data.id} role="img" aria-label="remove" className= {"remove-item"} onClick={(e) => {onPress(data.id)}} />
          </div>
          )
        )
      }
    </React.Fragment>
    )

}
