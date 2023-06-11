import { Routes, Route, Link } from 'react-router-dom';
import Cart from './pages/Cart';
import Main from './pages/Main';
import NavPillsExample from './components/Navigation';
import { useState } from 'react';
import photos from './data/photos';

function App() {
  const [amount, setAmount] = useState(photos.map(() => 0));

  return (
    <>
      <NavPillsExample />
      <Routes>
        <Route
          path=''
          element={
            <div className='main_wrapper'>
              <img
                className='main_logo'
                src={`${process.env.PUBLIC_URL}/img/salad.png`}
                alt='main'
              />
              <h2>커스텀 샐러드 만들기</h2>
              <Link to='/vegetable'>만들러 가기!</Link>
            </div>
          }
        />
        <Route path='/:id' element={<Main amount={amount} setAmount={setAmount} />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
