"use client"

import React, { useState } from 'react';
import AdicionarCategoriaPage from '../categorias/addCategoria/page';
import CustomModal from '../../UI/dashboard/customModal/customModal'; // Importe o CustomModal aqui
import styles from '../../UI/dashboard/categoria/categorias.module.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Paginacao from '../../UI/dashboard/paginacao/paginacao';
import Search from '../../UI/dashboard/categoria/search/search';
import Link from 'next/link';


const CategoriaPage = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const toggleModal = () => {
        setModalIsOpen(!modalIsOpen);
    };

    const handleAdd = (formData) => {
        toggleModal();
        toast.success('Adicionado com Sucesso', {
            position: "top-right",
            autoClose: 2000
        });
    };

    return (
        <div className={styles.container}>
            <ToastContainer />
            <div className={styles.top}>
                <Search placeholder={"Procurar por Marcas"}/>
                <div className={styles.addNew}>
                    <button className={styles.addButton} onClick={toggleModal}>Nova Categoria</button>
                </div>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Nome</td>
                        <td>Descrição</td>
                        <td>Criada</td>
                        <td>Ação</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={styles.estiloTable}>
                            <div className={styles.produto}>
                                Dell informatica
                            </div>
                        </td>
                        <td className={styles.estiloTable}>
                            <div className={styles.produtoDescricao}>
                                Este boné preto é um acessório versátil e elegante, perfeito para adicionar um toque de estilo a qualquer look.
                                Feito com materiais de alta qualidade, oferece conforto e ajuste perfeito. Ideal para uso casual ou esportivo, é uma peça essencial para qualquer guarda-roupa.
                            </div>
                        </td>
                        <td className={styles.estiloTable}>05/02/2010</td>
                        <td className={styles.estiloTable}>
                            <div className={styles.buttons}>
                                <Link href="/">
                                    <button className={`${styles.buttonUser} ${styles.visualizar}`}>Editar</button>
                                </Link>
                                <Link href="/">
                                    <button className={`${styles.buttonUser} ${styles.excluir}`}>Excluir</button>
                                </Link>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Paginacao/>

            <CustomModal isOpen={modalIsOpen} toggleModal={toggleModal}>
                <AdicionarCategoriaPage onSubmit={handleAdd} onCloseModal={toggleModal}/>
            </CustomModal>
        </div>
    );
}

export default CategoriaPage;

