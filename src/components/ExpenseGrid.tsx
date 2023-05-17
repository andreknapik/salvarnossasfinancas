import { useState } from "react";
import Modal from "./Modal";

function ExpenseGrid() {

    const jessica = 6000;
    const andre = 1600;

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };

function Expense() {

    const total = jessica + andre;
    return total;
}

    const total = Expense();

  return (
  <div>
    <button onClick={openModal}>Adicionar Receita</button>
    <h2>TOTAL: R$ {total} </h2>
    <ul>
        <li>Andre: R$ {andre}</li>
        <li>Jessica: R$ {jessica}</li>
    </ul>
    <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div>
        <h2>Adicionar Receita :)</h2>
        <input type="text" placeholder="Pessoa"/>
        <input type="text" placeholder="Origem"/>
        <input type="number" placeholder="Valor"/>
         </div>
        </Modal>
  </div> )
}

export default ExpenseGrid;