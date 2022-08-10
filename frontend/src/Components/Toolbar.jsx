import React, {useContext, useRef, useState} from 'react';
import DatePicker from "react-datepicker";
import mainContext from "../Context/mainContext";
import '../styles/Toolbar.css';

function Toolbar() {
    const companyRef = useRef()
    const [error, setError] = useState("")
    const {startDate, setStartDate, endDate, setEndDate,dataList, setDataList} = useContext(mainContext)
    const checkInput = (input) => {
        const regex = /^[a-zA-Z\s]{0,35}$/
        return regex.test(input)
    }
    function getCompany() {
        const company = companyRef.current.value
        if (!checkInput(company)) return setError("Ticker should be letters only and up to 35 characters")
        const info = {
            company
        }
        const options = {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(info)
        }
        fetch("http://localhost:4002/search", options)
            .then(res=>res.json())
            .then(info => {
                if (info.success) {
                    const check = dataList.find(x => x.name === info.info.name )
                    setError("")
                    if (!check) setDataList([info.info, ...dataList])
                } else {
                    setError("Please enter correct company ticker")
                }
            })
    }
    return (
        <div className='toolbar-container'>
            {error && <span className='error'>{error}</span>}
                <div className='input-wrapper'>
                    <input className='company-input' ref={companyRef} type='text' placeholder='Enter company ticker'/>
                    <button className='search-button' onClick={getCompany}>Get Company</button>
                </div>
                <div className='datepicker-wrapper'>
                    <DatePicker
                        dateFormat="dd/MM/yyyy"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        maxDate={new Date(Date.now() - 86400000)}
                    />
                    <DatePicker
                        dateFormat="dd/MM/yyyy"
                        selected={endDate}
                        maxDate={new Date()}
                        onChange={(date) => setEndDate(date)}
                    />
                </div>
        </div>
    );
}

export default Toolbar;