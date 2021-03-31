import React, { useState } from 'react';
import { X, Hash } from 'react-bootstrap-icons';
import './component.scss';

export default function ({ id, country}) {
  return (
    <div className={"keyword-demo"}>
    <Hash role="img" aria-label="remove" className={"hashtag"} />
    <span className={"country-name"}>{country}</span>
    <X id={id} role="img" aria-label="remove" className= {"remove-item"} onClick={() => {return}} />
  </div>);
}
