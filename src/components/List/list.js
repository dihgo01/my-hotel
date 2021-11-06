import React, { useEffect, useState } from 'react';
import { FiUsers, FiChevronDown, FiChevronUp } from 'react-icons/fi'
import api from '../../services/api'

import { ListRooms, Ulstyle, TitleList, HeaderRoom, BtnMoreInfo } from './styles';

export default function List() {

    const [ShowRoom, setShowRoom] = useState([])
    const [shownComments, setShownComments] = useState({});

    useEffect(async () => {
        const res = await api.get('https://hml-booking-engine.herokuapp.com/admin/rooms?begin_date=2021-10-01&end_date=2021-12-31')
        setShowRoom(res.data)
    }, [])

    const toggleComment = id => {
        setShownComments(prevShownComments => ({
            ...prevShownComments,
            [id]: !prevShownComments[id]
        }));
    }

    return (
        <div>

            <Ulstyle>
                <TitleList>
                    <div>
                        <h3>Tipo de quarto</h3>
                        <h3>Preço por noite</h3>
                    </div>
                    <div>
                        <h3>Capacidade</h3>
                    </div>
                </TitleList>
                {ShowRoom.map(rooms => {
                    return (
                        <ListRooms key={rooms.name}>
                            <HeaderRoom>
                                <div>
                                    <div className='image-box'>
                                        <img src={rooms.picture_url} alt='Quarto' />
                                        <h3 className ="titleRoom">{rooms.name}</h3>
                                    </div>
                                    <h3>R$ {rooms.amount.toFixed(1)}</h3>
                                </div>
                                <div>
                                    <h3><strong><FiUsers color='#29415E' size='24px' /></strong>{rooms.occupation}</h3>
                                    <a href='/checkout'>Reservar</a>
                                </div>
            
                            </HeaderRoom>
                                {
                                    shownComments[rooms.name] ?
                                        
                                        <div className="description">
                                            <h3>Sobre o quarto</h3>
                                            <p>{rooms.description}</p>
                                            <h3>Acomodações</h3>
                                            <p>{rooms.accommodation}</p>
                                            <h3>Comodidades</h3>
                                            <div className ="amenities">
                                                <li>{rooms.amenities}</li>
                                            </div>
                                        </div> : null
                                }
                                { shownComments[rooms.name] ?
                                    <BtnMoreInfo onClick={() => toggleComment(rooms.name)}>
                                        <FiChevronUp color='#29415E' size='20' /> Menos Informações 
                                    </BtnMoreInfo> :
                                    <BtnMoreInfo onClick={() => toggleComment(rooms.name)}>
                                        <FiChevronDown color='#29415E' size='20' />Mais Informações
                                    </BtnMoreInfo>
                                }
                                
                            
                        </ListRooms>
                    )
                })}
            </Ulstyle>

        </div>
    )

}

