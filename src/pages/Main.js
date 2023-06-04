import React from 'react';

import NavTabsExample from '../components/Category';
import Ingredient from '../components/Ingredient';

const Main = ({ amount, setAmount }) => {
  return (
    <div className='main_wrapper'>
      <NavTabsExample />
      <Ingredient amount={amount} setAmount={setAmount} />
    </div>
  );
};

export default Main;
