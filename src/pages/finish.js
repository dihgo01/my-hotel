import React from 'react';

// import { Container } from './styles';
import Image from 'next/image'

export default function finish() {
    return (
        <>
            <Image src='/img/sucess.png' alt='Sucess' width={281}
              height={176} />
            <h1>Sua reserva foi feita com sucesso!</h1>
            <p>Você receberá um e-mail com a confirmação e mais detalhes sobre sua reserva. Estamos ansiosos para recebê-lo!</p>
        </>
    );
}
