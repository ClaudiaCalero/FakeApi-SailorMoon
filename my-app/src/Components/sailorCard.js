import React, { useState } from 'react';
import "./App.css";

const sailorCard = (props) => {

  return (
      
      <span className="sailorCard">
        <span className="marinera">{props.marinera}</span>
        <span className="identity">identity: {props.identity}</span>
        <img className="imagen" src={props.img} alt="" />
        <span className="birthday">birthday: {props.birthday}</span>
        <span className="about">{props.about}</span>
        <span className="color">color: {props.color}</span>
      </span>
    );
};

  


export default sailorCard;