import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ptBR } from 'date-fns/locale';
import { formatWithOptions } from 'date-fns/fp'
import { FiCalendar } from 'react-icons/fi'


import List from '../List/list'
import { Mains, FormDate, SearchDate } from './styles';


export default function Main() {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState();

    const date = new Date()
    const DateNow = formatWithOptions({ locale: ptBR }," EE, d MMM", new Date().setDate(date.getDate() + 3));
    

    return (
        <Mains>
            <SearchDate>
                <h2>Reserve a sua acomodação</h2>
                <FormDate>
                <DatePicker
                    filterDate={d => {
                        return new Date() <= d;
                      }}
                    dateFormat=" EE, d MMM"
                    locale= {ptBR}
                    selected={startDate}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate} 
                    onChange={date => setStartDate(date)}
                />
                <DatePicker
                    filterDate={d => {
                        return new Date() <= d;
                      }}
                    dateFormat="EE, d MMM"
                    placeholderText={DateNow}
                    locale= {ptBR}
                    selected={endDate}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    onChange={date => setEndDate(date)}
                /><div className="icone-calender"><FiCalendar color={'#406591'} size={24} /></div>
                </FormDate> 
                <hr />
            </SearchDate>
            {
                endDate ? <List /> : null
            }
            
        </Mains>
    );
}

