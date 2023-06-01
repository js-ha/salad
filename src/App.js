import { Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import Main from './pages/Main';
import NavPillsExample from './components/Navigation';
import { useState } from 'react';
import photos from './data/photos';

function App() {
  const [amount, setAmount] = useState(photos.map(() => 0));

  return (
    <div>
      <NavPillsExample />
      <Routes>
        <Route path='/:id' element={<Main amount={amount} setAmount={setAmount} />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
