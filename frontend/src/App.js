import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainPage from "./Pages/MainPage";
import {useState} from "react";
import mainContext from "./Context/mainContext";

function App() {
    const [dataList, setDataList] = useState([])
    const [startDate, setStartDate] = useState(new Date(Date.now() - 86400000));
    const [endDate, setEndDate] = useState(new Date());
    const [chartData, setChartData] = useState({})
    const [chartOpen, setChartOpen] = useState(false)
    const [ticker, setTicker] = useState('')
    const context = {
        startDate, setStartDate,
        endDate, setEndDate,
        chartData, setChartData,
        chartOpen, setChartOpen,
        ticker, setTicker,
        dataList, setDataList
    }
  return (
    <div className="App">
        <mainContext.Provider value={context}>
            <Router>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                </Routes>
            </Router>
        </mainContext.Provider>
    </div>
  );
}

export default App;
