import React from "react";
import { useDispatch } from "react-redux";
import { cardSlice } from "../../Redux/reducers/card/cardSlice";
import "./Card.css";

const Card = ({ id }) => {
  const dispatch = useDispatch();
  const { removeCard } = cardSlice.actions;
  return (
    <div className='Card'>
      <span onClick={() => dispatch(removeCard(id))}>X</span>
      <p>{id}</p>
    </div>
  );
};

export default Card;
