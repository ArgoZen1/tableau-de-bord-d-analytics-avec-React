import { NavLink } from 'react-router-dom';
import image1Mock from '../assets/image1Mock.jpg';
import image2Mock from '../assets/image2Mock.jpg';
import NavBarLeft from '../Components/NavBarLeft/NavBarLeft';
import NavBarUp from '../Components/NavBarUp/NavBarUp';
import "./profil.css"

const Profil: React.FC = () => {
    return (
        <>
            <NavBarUp />
            <NavBarLeft />
            <div className='body_profil'>
                <main>
                    <div className='container_img_title'>

                        <h2>Bonjour, vous pouvez choisir un utilisateur</h2>

                        <div className='container_img'>
                            <NavLink to="/user/18">
                                <div className='image_logo_mock'><img src={image1Mock} alt="Logo Kasa" /></div>
                                <p>Cecilia Ratorez</p>
                            </NavLink>

                            <NavLink to="/user/12">

                                <div className='image_logo_mock'><img src={image2Mock} alt="Logo Kasa" /></div>
                                <p>Karl Dovineau</p>
                            </NavLink>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default Profil;


