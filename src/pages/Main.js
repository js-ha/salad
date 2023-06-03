import React from 'react';

import NavTabsExample from '../components/Category';
import Ingredient from '../components/Ingredient';

const Main = ({ amount, setAmount }) => {
  return (
    <>
      <NavTabsExample />
      <Ingredient amount={amount} setAmount={setAmount} />
    </>
  );
};

export default Main;
