import React from 'react';

import { Finish } from './styles';

export default function Sucess() {
    return (
        <Finish>
            <img src='/img/sucess.png' alt='Sucess' />
            <h1>Sua reserva foi feita com sucesso!</h1>
            <div>
                <p>Você receberá um e-mail com a confirmação e mais detalhes sobre sua reserva. Estamos ansiosos para recebê-lo!</p>
            </div>    
        </Finish>
    );
}
