import React, { useState, useEffect, useCallback } from 'react';
import { getData } from '../../Service/CallApiMock';
import { useParams } from 'react-router';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import './userPerformance.css';


interface UserPerformanceProps { }

interface PerformanceData {
    kind: string;
    value: number;
}

const UserPerformance: React.FC<UserPerformanceProps> = () => {
    const [data, setData] = useState<PerformanceData[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const { id } = useParams();
    const kindToText = ['', 'Cardio', 'Energie', 'Endurance', 'Force', 'Vitesse', 'Intensité']

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        const request = await getData("USER_PERFORMANCE", + `${id}`);
        setIsLoading(false);
        if (!request) {
            return alert('data error');
        }
        const formatData = request.data.data.map((data: any) => {
            return { ...data, kind: kindToText[data.kind] }
        });
        setData(formatData);
    }, [id]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

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