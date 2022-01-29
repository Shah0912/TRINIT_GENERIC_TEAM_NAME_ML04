import React,{useState} from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
const DisplayResult = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div>
        <form>
        <DatePicker startDate={startDate} onChange={(date) => setStartDate(date)}/>
        </form>
         <h5>The predicted price is xyz</h5>   
        </div>
    )
}

export default DisplayResult
