import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faBars, faGear, faCircleQuestion, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  return (
    <div className="sidebar">
        <FontAwesomeIcon className='hamburger-menu' icon={faBars} />
        <FontAwesomeIcon className='new-chat' icon={faPlus} />

        <div className='footer'>
            <div className='question'>
                <span></span>
                <FontAwesomeIcon icon={faCircleQuestion} />
            </div>
            <div>
                <FontAwesomeIcon icon={faClockRotateLeft} />
            </div>
            <div>
                <FontAwesomeIcon icon={faGear} />
            </div>

        </div>
    </div>
  )
}

export default Sidebar;
