import './keyData.css';


type KeyDataProps = {
    info: string;
    text: string;
    logo: string;
}

/*
** KeyData component takes an object with properties of "info", "text", and "logo" as its argument and returns JSX
*/
const KeyData = ({ info, text, logo }: KeyDataProps) => {
    return (
        <div className='container_flex_keydata'>
            <div className="home__container__keydata">
                <div className="home__container__icon">
                    <div className='logo_test_keydata'>
                        <img alt="logo" className="logo" src={logo} />
                        <div>
                            <p>{info}</p>
                            <p>{text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default KeyData;