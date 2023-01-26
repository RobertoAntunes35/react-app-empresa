
import React, { useState } from 'react';

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

import './Calendario.css'

function Calendario() {
    const [value, setValue] = useState(new Date())
    console.log(value.toDateString())
    return (

        <div className="calendario-app">
            <h2 className='text-center'>Data Analise</h2>
            <div className='calendar-container'>
                <Calendar 
                onChange={setValue} 
                value={value}/>
            </div>
        </div>
    )
}

export default Calendario