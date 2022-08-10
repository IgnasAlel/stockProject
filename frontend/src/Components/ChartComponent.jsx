import React, {useContext} from 'react';
import mainContext from "../Context/mainContext";
import CandleChart from "./CandleChart";

function ChartComponent() {
    const {chartOpen} = useContext(mainContext)
    return (
        <div>
            {chartOpen && <CandleChart/>}
        </div>
    );
}

export default ChartComponent;