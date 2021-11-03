import React from 'react';
import { MdWifi, MdRestaurant, MdWatch, MdPool, } from 'react-icons/md'
import { Title, Content, Header} from '../styles/header';

export default function header() {
    return (
        <Header>
            <div>
                <Title>Pousada Na Tribu's</Title>
                <Content>
                    Próximo aos setores de entretenimento e empresarial,
                    o Plaza Bittar Hotel fica a 1 quarteirão do Shopping Brasília e
                    a 15 minutos de carro do Aeroporto Internacional de Brasília.
                    Os quartos dispõem de ar-condicionado, e o Wi-Fi...
                </Content>
                <h3>Comodidades do hotel</h3>
                <MdWifi  color = '#536580'/>Wifi Gratuito 
                <MdRestaurant  color = '#536580'/>Restaurante
                <MdWatch color = '#536580'/> Recepção 24h
                <MdPool color = '#536580'/>Piscina

            </div>
            <div>

            </div>

        </Header>

    );
}