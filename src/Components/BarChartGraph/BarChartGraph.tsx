import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { getData } from '../../Service/CallApiMock';
import './barChartGraph.css';
import { IUserAverageSessions } from '../../interfaces';


const BarChartGraph: React.FC = () => {
    // Declare state variable "data" and set it to an empty array
    const [data, setData] = useState<IUserAverageSessions | any>([]);
    // Use the "id" from the URL params
    const { id } = useParams<{ id: string }>();

    // Use the "useEffect" hook to fetch data from the API when the component mounts
    useEffect(() => {
        // Async function to retrieve data from the API
        const fetchData = async () => {
            // Send a request to the API using the "getData" function and passing in "USER_ACTIVITY" and the user's id
            const request = await getData("USER_ACTIVITY", + `${id}`);
            // If the request is unsuccessful, show an error message
            if (!request) return alert('data error');

            // Update the "data" state with the retrieved data
            setData(request.data.sessions);
        };
        // Call the async function
        fetchData();
    }, [id]);

    // If the "data" state is empty, return nothing
    if (data.length === 0) return null;

    // Loop through the data and format the "day" property
    for (let i = 0; i < data.length; i++) {
        data[i].day = i + 1
    }

    return (
        <div className="graph">
            <div className='container_block_up'>
                <p className='activity'>Activité quotidienne</p>
                <div className='container_p_span'>
                    <p><span>.</span>Poids (kg)</p>
                    <p><span>.</span>Calories brulées (kCal)</p>
                </div>
            </div>
            <div>
                <ResponsiveContainer height={200}>
                    <BarChart data={data} barGap={8} barCategoryGap={1}>
                        <CartesianGrid vertical={false} strokeDasharray="1 1" />
                        <XAxis dataKey="day" tickLine={false} tick={{ fontSize: 14 }} dy={7} stroke="1 1" />
                        <YAxis yAxisId="kilogram" dataKey="kilogram" type="number" domain={['dataMin - 2', 'dataMax + 1']} tickCount={4} axisLine={false} orientation="right" tickLine={false} tick={{ fontSize: 14 }} dx={15} />
                        <YAxis yAxisId="calories" dataKey="calories" type="number" domain={['dataMin - 20', 'dataMax + 10']} hide={true} />
                        <Tooltip />
                        <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={10} radius={[50, 50, 0, 0]} />
                        <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={10} radius={[50, 50, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default BarChartGraph;
