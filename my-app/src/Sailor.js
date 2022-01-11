import React from "react";
import "./App.css";

const Sailor = (props) => {
  return (
      
      <div className="sailorCard">
        <div className="name">{props.name}</div>
        <div className="identity">Identity: {props.identity}</div>
        <img className="imagen" src={props.img} alt="" />
        <div className="birthday">birthday: {props.birthday}</div>
        <div className="about">about: {props.about}</div>
        <div className="color">color: {props.color}</div>
      </div>
    );
};




export default Sailor;