import React, { useState, useEffect } from 'react';
import { X, Hash } from 'react-bootstrap-icons';
import './component.scss';

export default function Marker({ data, onPress }) {
const [hashdata, setHashdata] = useState(data);
useEffect(() => {setHashdata(data)}, [data]);

  return (
    <React.Fragment>
      {
        hashdata.map((data, key) => (
          <div key={data.id} className={"tagword-demo"}>
            <Hash className={"hashtag"} />
            <span className={"country-name"} aria-label="country nam" >{data.country}</span>
            <X id={data.id} role="button" aria-label="remove country" className= {"remove-item"} onClick={(e) => {onPress(data.id)}} />
          </div>
          )
        )
      }
    </React.Fragment>
    )

}
