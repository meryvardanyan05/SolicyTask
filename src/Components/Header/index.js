import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Header.css";
import { cardSlice } from "../../Redux/reducers/card/cardSlice";
import Button from "../../UI/Button";

const Header = () => {
  const dispatch = useDispatch();
  const { cards } = useSelector((state) => state.cardSlice);
  const { addCard, sortCards } = cardSlice.actions;

  const clickHandler = () => {
    let r = Math.floor(Math.random() * 1000);
    if (cards.includes(r)) {
      // const newArray = cards.filter((e) => e !== r);
      // dispatch(addCard(newArray));
      clickHandler();
    } else {
      const newArray = [...cards, r];
      dispatch(addCard(newArray));
    }
  };

  return (
    <div className='Header'>
      <Button title='Add Card' onClick={clickHandler} />
      <Button title='Sort cards' onClick={() => dispatch(sortCards())} />
    </div>
  );
};

export default Header;
