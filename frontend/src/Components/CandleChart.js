import React, {useContext, useEffect, useState} from 'react';
import Chart from 'react-apexcharts'
import mainContext from "../Context/mainContext";

function CandleChart() {
    const [priceInfo, setPriceInfo] = useState([])
    const [labelFontSize, setLabelFontSize] = useState('4px')
    const [titleFontSize, setTitleFontSize] = useState('6px')
    const [show, setShow] = useState(false)
    const {startDate, endDate,ticker} = useContext(mainContext)
    const responsive = () => {
        if (window.innerWidth <= 1920) {
            setLabelFontSize('12px')
            setTitleFontSize('22px')}
        if (window.innerWidth < 1440) {
            setLabelFontSize('10px')
            setTitleFontSize('18px')}
        if (window.innerWidth < 1024) {
            setLabelFontSize('8px')
            setTitleFontSize('10px')}
        if (window.innerWidth < 768) {
            setLabelFontSize('4px')
            setTitleFontSize('6px')}
    }
    window.onresize = () => {
        responsive()
    }
    useEffect(()=>{
        responsive()
    },[])
    function convertData(chartData) {
        let priceInfoARR= []
        for (let i = 0; i < chartData.c.length; i++) {
            const newDate = new Date(chartData.t[i] * 1000)
            let singleData = {
                x: newDate.toLocaleDateString(),
                y: [chartData.o[i].toFixed(2), chartData.h[i].toFixed(2), chartData.l[i].toFixed(2), chartData.c[i].toFixed(2)]
            }
            priceInfoARR.push(singleData)
        }
        setPriceInfo(priceInfoARR)
    }
    useEffect(()=>{
            const sDate = `${startDate.getFullYear()}.${startDate.getMonth() + 1}.${startDate.getDate()}`
            const eDate = `${endDate.getFullYear()}.${endDate.getMonth() + 1}.${endDate.getDate()}`
            const startTimestamp = Math.floor(new Date(sDate).getTime() / 1000)
            const endTimestamp = Math.floor(new Date(eDate).getTime() / 1000)
            const stockInfo = {
                symbol: ticker.ticker,
                start: startTimestamp,
                end: endTimestamp,
                interval: "D"
            }
            const options = {
                method: 'POST',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(stockInfo)
            }
            fetch("http://localhost:4002/candles", options)
                .then(res=>res.json())
                .then(info => {
                    convertData(info.data)
                    setShow(true)
                })
    },[ticker, startDate, endDate])
    const chart = {
        options: {
            title: {
                text: `CandleStick Chart - ${ticker.name}`,
                align: 'left',
                style: {
                    fontSize: titleFontSize
                }
            },
            chart: {
                toolbar:{
                    show:true,
                    tools: {
                        download: false,
                        zoom: false
                    }
                },
                type:'candlestick',
                zoom:{
                    enabled: true
                }
            },
            xaxis: {
              labels:{
                  style:{
                      fontSize: labelFontSize
                  }
              }
            },
            yaxis:{
                tooltip:{
                    enable:true
                },
                labels:{
                    style:{
                        fontSize: labelFontSize
                    }
                }
            }
        },
        series: [{
            name: 'series-1',
            data: priceInfo
        }]
    }
    return (
        <div>
            {show &&
            <Chart
                options={chart.options}
                series={chart.series}
                type='candlestick'
            />}
        </div>
    );
}

export default CandleChart;
