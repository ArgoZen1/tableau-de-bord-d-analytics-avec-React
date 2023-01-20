import React from "react";
import './scoreChart.css'
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { v4 as uuidv4 } from 'uuid';

interface Props {
    data: {
        todayScore?: number; // today's score, may be undefined
        score: number; // overall score
    };
}

const ScoreChart: React.FC<Props> = ({ data }) => {
    // create array of scores
    const score = [
        // if today's score exists, use it, otherwise use overall score
        { value: data.todayScore || data.score },
        { value: 1 - (data.todayScore || data.score) },
    ];
    console.log(score)



    return (
        <div className="container_score">
            <h3>Score</h3>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={score}
                        dataKey="value"
                        startAngle={90}
                        endAngle={450}
                        innerRadius="70%"
                        outerRadius="80%"
                        cornerRadius="50%"
                    >
                        {score.map((entry, index) =>
                            <Cell key={uuidv4()} fill={index === 0 ? "#ff0000" : "#FBFBFB"} />
                        )}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div className="text">
                <span>
                    {(score[0].value * 100).toFixed(2)}%
                    <br />
                </span>
                de votre
                <br />
                objectif
            </div>
        </div>
    );
};


export default ScoreChart;