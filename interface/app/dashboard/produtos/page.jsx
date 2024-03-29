"use client"

import React, { useState, useEffect } from 'react';
import { ProdutoService } from '../../../service/produtoService';
import Paginacao from '../../UI/dashboard/paginacao/paginacao';
import styles from '../../UI/dashboard/produtos/produtos.module.css';
import Search from '../../UI/dashboard/produtos/search/search';
import Link from 'next/link';
import { toast } from 'react-toastify';
import CustomModal from '../../UI/dashboard/customModal/customModal';
import AdicionarProdutoPage from './addProduto/page';
import { format } from 'date-fns';

const ProdutosPage = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [produtos, setProdutos] = useState([]);
    const [search, setSearch] = useState('');
    const produtoService = new ProdutoService();
    const [isLoading, setIsLoading] = useState(true);

    const formataData = (data) => {
        return format(new Date(data), 'dd/MM/yy  HH:mm');
    };

    const listaProduto = produtos.filter(produto => 
        produto.nome.toLowerCase().includes(search.toLowerCase()) ||
        produto.descricaoCurta.toLowerCase().includes(search.toLowerCase()) ||
        produto.detalhada.toLowerCase().includes(search.toLowerCase())
        ) 

    useEffect(() => {
        fetchData();
    }, [modalIsOpen]);
    
    useEffect(() => {
        if (!isLoading) {
            console.log("Dados carregados, isLoading agora é false");
        }
    }, [isLoading]);

    const fetchData = async () => {
        setIsLoading(false);
        try {
            const response = await produtoService.listarTodos();
            setProdutos(response.data); // Definir os produtos na lista
            console.log("recebe>>>>>>>>>>>:", isLoading)
        } catch (error) {
            console.error('Erro ao encontrar todos os produtos', error);
        }
    };

    const toggleModal = () => {
        setModalIsOpen(!modalIsOpen);
    };

    const handleAdd = (formData) => {
        toggleModal();
        toast.success('Adicionado com Sucesso',{
            position: "top-left",
            autoClose: 2000
        });
    };

    return ( 
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder={"Pesquisar Produto"} value={search} setSearch={setSearch}/>
                <div className={styles.addNew}>
                    <button onClick={toggleModal} className={styles.addButton}>Novo Produto</button>
                </div>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Nome</td>
                        <td>Descrição</td>
                        <td>Descrição Detalhada</td>
                        <td>Preço</td>
                        <td>Criado</td>
                        <td>Atualizado</td>
                        <td>Qtd. Estoque</td>
                        <td>Ação</td>
                    </tr>
                </thead>
                <tbody>
                    {listaProduto && listaProduto.length > 0 ? (
                        listaProduto.map(produto => (            
                            <tr key={produto.id}>
                                <td className={styles.estiloTable}>{produto.id}</td>
                                <td className={styles.estiloTable}>
                                    <div className={styles.produto}>
                                        <img src='/noproduct.jpg' alt='avatar' width={40} height={40} className={styles.avatar} />
                                        {produto.nome}
                                    </div>
                                </td>
                                <td className={styles.estiloTable}><div className={styles.produtoDescricao}>{produto.descricaoCurta}</div></td>
                                <td className={styles.estiloTable}><div className={styles.produtoDescricao}>{produto.detalhada}</div></td>
                                <td className={styles.estiloTable}>{produto.valorVenda}</td>
                                <td className={styles.estiloTable}>{formataData(produto.dataCriacao)}</td>
                                <td className={styles.estiloTable}>{formataData(produto.dataAtualizacao)}</td>
                                <td className={styles.estiloTable}>{produto.valorEstoque}</td>
                                <td className={styles.estiloTable}>
                                    <div className={styles.buttons}>
                                        <button className={`${styles.buttonUser} ${styles.visualizar}`}>Editar</button>
                                        <button className={`${styles.buttonUser} ${styles.excluir}`}>Excluir</button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="9">Nenhum Produto Encontrado</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <Paginacao/>

            <CustomModal isOpen={modalIsOpen} toggleModal={toggleModal}>
                <AdicionarProdutoPage onSubmit={handleAdd} onCloseModal={toggleModal}/>
            </CustomModal>
        </div>
     );
}
 
export default ProdutosPage;
