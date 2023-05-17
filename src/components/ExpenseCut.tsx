import { useState } from "react";

function ExpenseCut() {

    const jessica = 6000;
    const andre = 1600;

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };

}
export default ExpenseCut;