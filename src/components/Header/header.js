import React from 'react';
import { MdWifi, MdRestaurant, MdWatch, MdPool, MdMap } from 'react-icons/md'
import { FiChevronDown } from 'react-icons/fi'


import { Header, ContentMap, BtnMap, Icons } from './styles';

export default function header() {
  return (
    <Header>
      <div>
        <div>
          <h1>Pousada Na Tribu's</h1>
          <p>
            Próximo aos setores de entretenimento e empresarial,
            o Plaza Bittar Hotel fica a 1 quarteirão do Shopping Brasília e
            a 15 minutos de carro do Aeroporto Internacional de Brasília.
            Os quartos dispõem de ar-condicionado, e o Wi-Fi... <br />
            <a href='#' alt='Expandir'><strong><FiChevronDown color='#29415E' size='20' /></strong>Expandir descrição do hotel</a>
          </p>
        </div>
        <div>
          <h3>Comodidades do hotel</h3>
          <Icons>
            <span><strong><MdWifi color='#CFD9E7' size='20' /></strong> Wifi Gratuito</span>
            <span><strong><MdRestaurant color='#CFD9E7' size='20' /></strong> Restaurante</span>
            <span><strong><MdWatch color='#CFD9E7' size='20' /></strong> Recepção 24h</span>
            <span><strong><MdPool color='#CFD9E7' size='20' /></strong> Piscina</span>
            <span><strong><img src='/img/towel.png' alt='Toalha' /></strong>Toalha de banho</span>
          </Icons>

        </div>
      </div>
      <ContentMap>
        <div className="img-wrapper">
          <img src='/img/Rectangle.png' alt='Mapa' className="img-responsive btn-responsive"/>
          <div className="img-overlay">
            <BtnMap type='button'><MdMap color='#536580' />Visualizar no mapa</BtnMap>
          </div>
          <p>Av. Porto Novo, 764-806 - Ibiraquera, Imbituba - SC</p>
        </div>
        <div>
          <span><strong>Check in: </strong>14:00 às 17:00</span><br />
          <span><strong>Check out: </strong>até às 11:00</span><br />
          <br />
          <br />
          <span><strong>Cancelamento grátis: </strong><br />até 7 dias antes da sua reserva.</span>
        </div>
      </ContentMap>
    </Header>
  );
}

