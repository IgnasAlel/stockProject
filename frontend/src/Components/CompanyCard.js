import React, {useContext} from 'react';
import mainContext from "../Context/mainContext";
import '../styles/companyCard.css';

function CompanyCard({data}) {
    const {setChartOpen, setTicker} = useContext(mainContext)
    function setChart(){
        setTicker(data)
        setChartOpen(true)
    }
    return (
        <div className="company-card">
            <div className='img-wrapper'>
                <img src={data.logo} alt="company-logo"/>
            </div>
            <div className='info-wrapper'>
                <span onClick={setChart} className='name-span'>Name: {data.name}</span>
                <span>Country: {data.country}</span>
                <span>Traded in: {data.currency}</span>
                <span>Website: {<br/>} <a href={data.weburl} target="_blank" rel="noreferrer">{data.weburl}</a></span>
            </div>
        </div>
    );
}

export default CompanyCard;