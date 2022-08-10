import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import mainContext from "../Context/mainContext";
import {useContext} from "react";
import '../styles/mainPage.css'
import Toolbar from "../Components/Toolbar";
import CardsList from "../Components/CardsList";
import ChartComponent from "../Components/ChartComponent";

function MainPage() {
    const {dataList} = useContext(mainContext)
    return (
        <div>
            <div className="d-flex j-center align-center">
                <Toolbar/>
            </div>
            <div className='content-wrapper'>
                {dataList && <CardsList/>}
                <div className='chart-container'>
                    <ChartComponent/>
                </div>
            </div>
        </div>
    );
}

export default MainPage;