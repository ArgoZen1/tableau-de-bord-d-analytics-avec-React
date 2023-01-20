import React, { useState, useEffect } from "react";
import { getData } from '../../Service/CallApiMock';
import { useParams } from "react-router";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './userAverageSessionGraph.css';
import { CustomTooltip } from "./CustomToolTip";


export default function UserAverageSessionGraph() {

    const [data, setData] = useState([]);
    const { id } = useParams();
    // create an array of days
    const days = ["D", "L", "M", "M", "J", "V", "S"];

    useEffect(() => {
        const fetchData = async () => {
            const request = await getData("USER_AVERAGE_SESSIONS", + `${id}`);
            if (!request) return alert("data error");
            // format data to match the dataKey of the LineChart
            const formatData = request.data.sessions.map((data: any) => ({ ...data, day: days[data.day - 1] }));
            setData(formatData);
        };
        fetchData();
    }, [id]);
    if (data.length === 0) return null;


    return (
        <div className="container_graph_average">
            <h2>Durée moyenne des sessions</h2>

            <ResponsiveContainer width='100%' height='100%'>
                <LineChart data={data}>
                    <XAxis
                        type="category"
                        dataKey="day"
                        tickLine={true}
                        stroke="none"
                        padding={{ right: 5, left: 5 }}
                        tick={{ fontSize: 13, stroke: "white", opacity: 0.8 }}
                    />
                    <YAxis dataKey="sessionLength" domain={[0, 'dataMax + 30']} hide={true} />

                    <Tooltip
                        content={<CustomTooltip active={true} payload={[]} />}
                        cursor={{ stroke: 'white', strokeWidth: 1 }}
                        wrapperStyle={{ opacity: 0.8 }}
                    />
                    <Line
                        type="monotone"
                        dataKey="sessionLength"
                        stroke="rgba(255, 255, 255, 0.7)"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{ r: 4, strokeWidth: 4, stroke: 'white' }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}