import React from 'react'
import Header from '../../src/components/Banner/Header/Header'
import { Link } from 'react-router-dom'
import './index.scss'

const Finalizar = () => {
  return (
    <section>
      <Header />
      <div className="form-container">
        <h1>SEU PEDIDO</h1>
        <div className="form-container__pedido">
          <h1>Resumo do pedido:</h1>
          <h1>Total: R$ 0,00</h1>
        </div>
        <form className="form-container__form-content">
          <div className="form-container__formInput">
            <label>Nome:</label>
            <input type="text" placeholder="José Avellino Campos" />
          </div>
          <div className="form-container__formInput">
            <label>CPF / CNPJ:</label>
            <input type="number" placeholder="078.982.192.00" />
          </div>
          <div className="form-container__formInput">
            <label>CEP:</label>
            <input type="number" placeholder="78001-888" />
          </div>
          <div className="form-container__formInput">
            <label>Endereço:</label>
            <input required type="text" placeholder="Avenida das palmeiras " />
          </div>
          <div className="form-container__formInput">
            <label>nº:</label>
            <input type="number" placeholder="09" />
          </div>
          <div className="form-container__formInput">
            <label>Tefelfone:</label>
            <input type="number" placeholder="(61) 99999-098" />
          </div>
          <div className="form-container__formInput">
            <label>E-mail:</label>
            <input type="email" placeholder="Joseavelino@gmail.com" />
          </div>
          <div className="form-container__formInput">
            <label>Data do evento:</label>
            <input type="date" />
          </div>
        </form>
          <div className='form-container__formInput'>
            <Link to={"/confirmar"}>
                <button type='submit'>Finalizar pedido</button>
            </Link>
          </div>
        <div className="alert-content">
          <p>
            * O frete será cobrado de acordo com a região de entrega; <br />
            ** Para emissão de nota fiscal, enviar dados completos do
            solicitante (nome, telefone CPF ou CNPJ e endereço),
            <br /> via Whatsapp ou e-mail.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Finalizar