import React, {useContext} from 'react';
import CompanyCard from "./CompanyCard";
import mainContext from "../Context/mainContext";
import '../styles/cardsList.css'

function CardsList() {
    const {dataList} = useContext(mainContext)
    return (
        <div className='cards-list'>
        {dataList.map((company, key)=>{
            return <CompanyCard data={company} key={key}/>
        })}
        </div>
    );
}

export default CardsList;