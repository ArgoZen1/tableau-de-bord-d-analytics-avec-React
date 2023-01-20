import './customToolTip.css'

export const CustomTooltip: React.FC<{ active: boolean, payload: Array<any> }> = ({ active, payload }) => {
    if (!active || !payload || !payload.length) return null;

    return (
        <div className="custom-tooltip">
            <p>{payload[0].value}min</p>
        </div>
    );
};