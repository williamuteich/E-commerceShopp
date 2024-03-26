import React from "react";
import styles from './deletarDados.module.css'
import { MdErrorOutline } from 'react-icons/md';
import { FaCheck } from "react-icons/fa";

const ConfirmDelete = ({ isOpen, closeModalDelete, onConfirm, userId }) => {
  const handleConfirm = () => {
    onConfirm(userId);
  };

  if (!isOpen) return null; // Renderiza o componente apenas se isOpen for true

  return (
    <div className={styles.container}>
      <div className={styles.containerTitulo}>
          <h2>Confirmação!</h2>
        <div className={styles.contentMensagem}>
          <MdErrorOutline  size={25}/>
          <p>Tem certeza de que deseja excluir?</p>
        </div>
      </div>
      <div className={styles.contentButton}>
        <button onClick={closeModalDelete}>X <span>Cancelar</span></button>
        <button onClick={handleConfirm}><FaCheck size={14}/> <span>Confirmar</span></button>
      </div>
    </div>
  );
};

export default ConfirmDelete;
