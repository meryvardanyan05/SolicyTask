import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card";
import "./Main.css";

const Main = () => {
  const { cards } = useSelector((state) => state.cardSlice);

  return (
    <div className='Main'>
      {cards?.map((card) => {
        return <Card key={card} id={card} />;
      })}
    </div>
  );
};

export default Main;
