import { FunctionComponent } from 'react';
import yoga from '../../assets/yoga.svg';
import natation from '../../assets/natation.svg';
import cyclisme from '../../assets/cyclisme.svg';
import sport from '../../assets/sport.svg';
import './NavBarLeft.css';

/*
** NavBarLeft for the left side of the page
*/
const NavBarLeft: FunctionComponent = () => {
    return (
        <aside>
            <div className='background_padding_logo'>
                <img alt="logo" className="logo" src={yoga} />
            </div>
            <div className='background_padding_logo'>
                <img alt="logo" className="logo" src={natation} />
            </div>
            <div className='background_padding_logo'>
                <img alt="logo" className="logo" src={cyclisme} />
            </div>
            <div className='background_padding_logo'>
                <img alt="logo" className="logo" src={sport} />
            </div>
            <span className="copyright">Copyright, SportSee 2022</span>
        </aside>
    );
};

export default NavBarLeft;