import React, { useState } from 'react';
import photos from '../data/photos';
import { useParams } from 'react-router-dom';

const Ingredient = ({ amount, setAmount }) => {
  const params = useParams();
  const vegetable = photos.filter((photo) => photo.category === '채소류');
  const meat_fish = photos.filter((photo) => photo.category === '고기/생선류');
  const nuts = photos.filter((photo) => photo.category === '견과류');
  const dressing = photos.filter((photo) => photo.category === '드레싱');

  let arr = [];
  if (params.id === 'vegetable') {
    arr = vegetable;
  } else if (params.id === 'meat_fish') {
    arr = meat_fish;
  } else if (params.id === 'nuts') {
    arr = nuts;
  } else {
    arr = dressing;
  }

  const handleMinus = (index) => {
    if (amount[index] > 1) {
      setAmount(amount.with(index, amount[index] - 1));
    } else {
      setAmount(amount.with(index, 0));
    }
  };

  const handlePlus = (index) => {
    setAmount(amount.with(index, amount[index] + 1));
  };
  console.log(amount);
  return (
    <>
      {arr.map((photo, i) => {
        return (
          <div key={i}>
            <div>
              <img className='photo' src={`${process.env.PUBLIC_URL}/img/${photo.img}.jpg`} />
            </div>
            <div>{photo.img}</div>
            <button onClick={() => handleMinus(photo.id)}>-</button>
            <button onClick={() => handlePlus(photo.id)}>+</button>
            <span>{amount[photo.id]}</span>
          </div>
        );
      })}
    </>
  );
};

export default Ingredient;