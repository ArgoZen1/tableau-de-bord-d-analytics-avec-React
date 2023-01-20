import './customToolTip.css'

export const CustomTooltip: React.FC<{ active: boolean, payload: Array<any> }> = ({ active, payload }) => {
    // If tooltip is not active or payload is missing or empty, return null
    if (!active || !payload || !payload.length) return null;

    return (
        <div className="custom-tooltip">
            {/* Display the value of the first element in the payload array with "min" unit */}
            <p>{payload[0].value}min</p>
        </div>
    );
};