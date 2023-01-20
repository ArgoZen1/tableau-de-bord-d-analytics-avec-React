import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import logoSportSee from '../../assets/LogoSportSee.png';
import './NavBarUp.css';

/*
** NavBarUp for the top of the page
*/
const NavBarUp: FunctionComponent = () => {
    return (
        <header>
            <img alt="logo" className="logo" src={logoSportSee} />
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/">Profil</Link>
                <Link to="/">Réglage</Link>
                <Link to="/">Communauté</Link>
            </nav>
        </header>
    );
};

export default NavBarUp;