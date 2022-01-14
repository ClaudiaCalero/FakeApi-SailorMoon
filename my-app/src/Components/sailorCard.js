import React, { useState } from 'react';
import "./App.css";
import "./App";


  const Sailor = (props) => {

    return (
    
        <li key={props.id} className="sailorCard">
          <div className="marinera">{props.marinera}</div>
          <div className="identity">identity: {props.identity}</div>
          <img className="imagen" src={props.img} alt="" />
          <div className="birthday">birthday: {props.birthday}</div>
          <div className="about">{props.about}</div>
          <div className="color">color:{props.color}</div>
        </li>
    
    );
  };


export default Sailor;

