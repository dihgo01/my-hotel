import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ptBR } from 'date-fns/locale';


import List from '../List/list'
import { Main, FormDate, SearchDate } from './styles';

export default function main() {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <Main>
            <SearchDate>
                <h2>Reserve a sua acomodação</h2>
                <FormDate>
                <DatePicker
                    filterDate={d => {
                        return new Date() <= -d;
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
                    locale= {ptBR}
                    selected={endDate}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    onChange={date => setEndDate(date)}
                />
                </FormDate>
                <hr />
            </SearchDate>
            {
                endDate ? <List /> : null
            }
            
        </Main>
    );
}

