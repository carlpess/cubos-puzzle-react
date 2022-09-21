import './style.css';
import Sidebar from '../../components/Sidebar';
import Card from '../../components/card';
import cards from '../../cards';
import { useState } from 'react';
import Congrats from '../../assets/congrats.png'

function Main() {
  const [stateCards, setStateCards] = useState([...cards])

  return (
    <div className='container'>
      <Sidebar
        cards={cards}
        setSatateCards={setStateCards}
      />

      <div className='container-main'>
        <div
          className='container-cards'
          style={{ 'justifyContent': `${stateCards.length ? 'flex-start' : 'center'}` }}
        >
          {stateCards.length ?
            stateCards.map(card => (
              <Card
                key={card.id}
                card={card}
                stateCards={stateCards}
                setSatateCards={setStateCards}
              />
            ))

            :
            <img src={Congrats} alt='congrats' />
          }
        </div>
      </div>
    </div>
  );
}

export default Main;
