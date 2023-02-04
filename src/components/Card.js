import React from 'react';
import '../css/Card.css'

export default function Card(props) {
  return <div className="card">
      <center>
  <img className="card-img-top mt-4" src={props.src}></img>
  </center>
  <div className="card-body">
    <p className="card-text">{props.desc}</p>
  </div>
</div>
}
