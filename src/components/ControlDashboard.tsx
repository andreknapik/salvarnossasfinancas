import { format } from 'date-fns';
import React, { useState } from 'react';
import Modal from './Modal';

const ControlDashboard = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const cardGoal = 3000;
  const burn = 1600;
  const dataHoje = Date.now();
  const dataFormatada = format(dataHoje, 'dd/MM/yyyy');
  const fimMes = new Date('2023-05-31').getTime();
  const diferenca = cardGoal - burn;
  const diasRestantes = Math.floor((fimMes - dataHoje) / (1000 * 60 * 60 * 24));
  const gastoDiario = diferenca / diasRestantes;

  return (
    <>
      <div>
        <h2>RESTAM: {diasRestantes} para acabar o mês.</h2>
        <ul>
          <li>Hoje é: {dataFormatada}</li>
          <li>Saldo Inicial: R$ {cardGoal}</li>
          <li>Você gastou: R$ {burn}</li>
          <li>Resta: R$ {diferenca}</li>
          <li>Você ainda pode gastar: R$ {gastoDiario} por dia</li>
          <li>Sua média diária foi: R$ </li>
        </ul>
      </div>
      <div>
        <button onClick={openModal}>Abrir Modal</button>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2>Título do Modal</h2>
          <p>Conteúdo do Modal</p>
        </Modal>
      </div>
    </>
  );
};

export default ControlDashboard;