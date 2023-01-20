import React, { useState, useEffect, useCallback } from 'react';
import { getData } from '../../Service/CallApiMock';
import { useParams } from 'react-router';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import './userPerformance.css';


interface UserPerformanceProps { }

interface PerformanceData {
    kind: string; // type of performance data
    value: number; // value of performance data
}

const UserPerformance: React.FC<UserPerformanceProps> = () => {
    // state to store performance data
    const [data, setData] = useState<PerformanceData[]>([]);
    // state to indicate if data is currently being fetched
    const [isLoading, setIsLoading] = useState(false);
    // get user ID from URL parameters
    const { id } = useParams();
    // mapping of performance data kind to text
    const kindToText = ['', 'Cardio', 'Energie', 'Endurance', 'Force', 'Vitesse', 'Intensité']

    // useCallback hook to fetch data from API
    const fetchData = useCallback(async () => {
        setIsLoading(true);
        const request = await getData("USER_PERFORMANCE", + `${id}`);
        setIsLoading(false);
        if (!request) {
            return alert('data error');
        }
        // format the data by adding kind text
        const formatData = request.data.data.map((data: any) => {
            return { ...data, kind: kindToText[data.kind] }
        });
        // set the formatted data to the state
        setData(formatData);
    }, [id]);

    // useEffect hook to fetch data when component is mounted
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    // if no data found and not currently loading, display message
    if (data.length === 0 && !isLoading) {
        return <p>No data found</p>
    }

    return (
        <div className='container_user_performance'>
            <ResponsiveContainer width='100%' height='100%'>
                <RadarChart cx='50%' cy='50%' outerRadius='65%' data={data}>
                    <PolarGrid gridType='polygon' />
                    <PolarAngleAxis dataKey='kind' stroke='white' tickLine={false} axisLine={false} tick={{ fontSize: 10 }} />
                    <Radar dataKey='value' stroke='#FF0101' fill='#FF0101' fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default UserPerformance;