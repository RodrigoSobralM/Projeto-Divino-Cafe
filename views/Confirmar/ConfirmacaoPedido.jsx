import React from 'react'
import './index.scss';
import Header from '../../src/components/Banner/Header/Header';

function ConfirmarPedido() {
    return (
        <section>
            <Header />
            <div className="confirmar-pedido-container">
                <h1>Pedido enviado com sucesso!</h1>
                <h2>Obrigado pela preferência</h2>
                <h3>Em breve estaremos dando retorno <br />
                    referente ao andamento do seu pedido.</h3>
            </div>
        </section>
    )
}

export default ConfirmarPedido;