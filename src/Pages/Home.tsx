import NavBarLeft from '../Components/NavBarLeft/NavBarLeft';
import NavBarUp from '../Components/NavBarUp/NavBarUp';
import { getData } from '../Service/CallApiMock';
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { IUserMainData } from '../interfaces';
import './home.css'
import KeyData from '../Components/KayData/KeyData';
import calories from '../assets/calories.svg'
import proteines from '../assets/proteines.svg'
import glucides from '../assets/glucides.svg';
import lipides from '../assets/lipides.svg';
import BarChartGraph from '../Components/BarChartGraph/BarChartGraph';
import UserAverageSessionGraph from '../Components/UserAverageSessionGraph/UserAverageSessionGraph';
import UserPerformance from '../Components/UserPerformance/UserPerformance';
import ScoreChart from '../Components/ScoreChart/ScoreChart';

const Home: React.FC = () => {

    const [data, setData] = useState<IUserMainData | any>([]);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        const fetchData = async () => {
            const request: any = await getData("USER_MAIN_DATA", + `${id}`);
            if (!request) return alert("data error");
            setData(request.data);
            console.log(request.data.userInfos.firstName)
        };
        fetchData();
    }, [id]);
    if (data.length === 0) return null;

    return (
        <div>
            <NavBarUp />
            <NavBarLeft />
            <div className="home">
                <div className="home__container">
                    <div className="home__container__firstname">
                        <h1>Bonjour <span>{data.userInfos.firstName}</span></h1>
                        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                        <div className='container_all_graph'>
                            <div className="home__container__firstname__graph">
                                <BarChartGraph />
                            </div>
                            <div className='container_last_graph'>
                                <UserAverageSessionGraph />
                                <UserPerformance />
                                <ScoreChart data={data} />
                            </div>

                        </div>
                        <div className='kaydata_container'>
                            <div className='kaydata'>

                                <KeyData
                                    logo={calories}
                                    info={`${data.keyData.calorieCount}kCal`}
                                    text="Calories"
                                />
                                <KeyData
                                    logo={proteines}
                                    info={`${data.keyData.proteinCount}g`}
                                    text="Proteines"
                                />
                                <KeyData
                                    logo={glucides}
                                    info={`${data.keyData.carbohydrateCount}g`}
                                    text="Glucides"
                                />
                                <KeyData
                                    logo={lipides}
                                    info={`${data.keyData.lipidCount}g`}
                                    text="Lipides"
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Home;