import './style.css'
import Logo from '../../assets/icon.svg';

function Sidebar({ setSatateCards, cards }) {

    function handleReset() {
        cards.forEach(card => {
            card.turned = false;
        });

        setSatateCards(cards)
    }

    return (
        <div className='sidebar'>
            <img src={Logo} alt='logo' />

            <button
                className='reset-btn'
                onClick={() => handleReset()}
            >RESET</button>
        </div>
    )
}

export default Sidebar;