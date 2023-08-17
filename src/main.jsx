import React from 'react';
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.scss';
import Home from '../views/Home/Home.jsx';
import Cardapio from '../views/Cardapio/Cardapio';
import Galeria from '../views/Galeria/Galeria';
import Finalizar from '../views/Finalizar/Finalizar';
import ConfirmarPedido from '../views/Confirmar/ConfirmacaoPedido';
import { BEBIDAS_MOCK } from './mock/BebidasMock';
import Site from '../views/Site/Site.jsx';
import { DOCES_MOCK } from './mock/DocesMock';
import { DESCARTAVEIS_MOCK } from './mock/DescartaveisMock';
import { SALGADOSFRITOS_MOCK } from './mock/SalgadosMock';
import { UTLEQUIPAMENTOS_MOCK } from './mock/UtlEquipamentosMock';
import { GALERIA_MOCK } from './mock/GaleriaImgsMock';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/site",
    element: <Site />,
  },
  {
    path: "/cardapio",
    element: <Cardapio data={[...SALGADOSFRITOS_MOCK, ...BEBIDAS_MOCK, ...DOCES_MOCK, ...DESCARTAVEIS_MOCK, ...UTLEQUIPAMENTOS_MOCK]} />,
  },
  {
    path: "/galeria",
    element: <Galeria data={ GALERIA_MOCK }/>
  },
  {
    path: "/finalizar",
    element: <Finalizar />,
  },
  {
    path: "/confirmar",
    element: <ConfirmarPedido />
  }
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);