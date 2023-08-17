import { useState, useEffect } from "react";
import React from "react";
import "./index.scss";

const ButtonsAddRemove = ({ data, onAdicionar, onRemover }) => {
  const initialValue =
    parseInt(localStorage.getItem(`counter_${data.nome}`)) || 0;
  const [counter, setCounter] = useState(initialValue);

  useEffect(() => {
    localStorage.setItem(`counter_${data.nome}`, counter.toString());
  }, [counter, data.nome]);

  const decrementar = () => {
    if (counter > 0) {
      onRemover(data.nome);
      setCounter((prevCounter) => prevCounter - 1);
    }
  };

  return (
    <div className="name">
      <h2>{data.nome}</h2>
      <div className="name__btn">
        {data.precoFatia20a25 && data.precoFatia25a30 ? (
          <div className="name_preco">
            <div>
              <h2>Preço Fatia 20 a 25</h2>
              <h2>({data.precofatia20a25})</h2>
            </div>
            <div>
              <h2>Preço Fatia 25 a 30 </h2>
              <h2>({data.precoFatia25a30})</h2>
            </div>
          </div>
        ) : data.precoFesta && data.precoMedio ? (
          <div className="name_preco">
            <h2>Preço p/Festas (R$ {data.precoFesta})</h2>
            <h2>Preços Médio (R$ {data.precoMedio})</h2>
          </div>
        ) : (
          <h2 className="name_precoSolo">R$ {data.preco}</h2>
        )}
        <button onClick={decrementar}>-</button>
        <span>{counter}</span>
        <button
          onClick={() => {
            onAdicionar(data.nome);
            setCounter((prevCounter) => prevCounter + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ButtonsAddRemove;
