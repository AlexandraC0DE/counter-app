import './App.css';
import logoFreecodeCamp from './image/logoFreecodeCamp.png';
import Button from './components/Button';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {

  const [ numberClick, setNumberClick ] = useState(0);

  const  handleClick = () => {
    setNumberClick(numberClick + 1);
  }

  const resetCounter = () => {
    setNumberClick(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img 
          className='freecodecamp-logo'
          src={logoFreecodeCamp}
          alt='Logo de FreeCodeCamp'
        />
      </div>
      <div className='main-container'>
          <Counter numberClick={numberClick} />
          <Button 
            text='click'
            clickButton={true}
            handleClick={handleClick}
          />
          <Button 
            text='restart'
            clickButton={false}
            handleClick={resetCounter}
          />
      </div>
    </div>
  );
}

export default App;
