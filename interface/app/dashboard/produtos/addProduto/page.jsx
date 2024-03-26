"use client"

import { useState } from 'react';
import styles from '../../../UI/dashboard/produtos/addProduto/addProduto.module.css';
import { FaCheck } from "react-icons/fa";
import { ProdutoService } from '../../../../service/produtoService';
import { InputNumber } from 'primereact/inputnumber';

const AdicionarProdutoPage = ({ onCloseModal }) => {

    const produtoService = new ProdutoService();

    const [formData, setFormData] = useState({
        nome: '',
        valorVenda: '',
        valorCusto: '',
        valorEstoque: '',
        descricaoCurta: '',
        detalhada: ''
    })

    const handleFormEdit = (event, nome) => {
        setFormData({
            ...formData,
            [nome]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const formDataSend = {
                nome: formData.nome,
                valorVenda: formData.valorVenda,
                valorCusto: formData.valorCusto,
                valorEstoque: formData.valorEstoque,
                descricaoCurta: formData.descricaoCurta,
                detalhada: formData.detalhada
            };

            await produtoService.novoProduto(formDataSend);
            onCloseModal();
        }catch (error) {
            console.error("Erro ao enviar dados do formulário", error);
        }
    }

    return ( 
        <div className={styles.container}>
            <div className={styles.imagemUsuario}>
                <img src="/noproduct.jpg" alt="" />
                <button>Adicionar Imagem</button>
            </div>
            <form action='' onSubmit={handleSubmit} className={styles.form}>
                <h1>Adicionar Produto</h1>
                <div className={styles.campo}>
                    <div className={styles.inputWrapper}>
                        <input type="text" name='Nome' placeholder='' required value={formData.nome} onChange={(e) => handleFormEdit(e, "nome")}/>
                        <label>Nome do produto</label>
                    </div>
                    <div className={`${styles.inputWrapper} ${styles.inputWrapperSmall}`}>
                        <InputNumber inputId="currency-brazil" placeholder='R$ 0,00' required value={formData.valorVenda} onValueChange={(e) => handleFormEdit(e,"valorVenda")} mode="currency" currency="BRL" locale="pt-BR" />
                        <label>Valor Venda</label>
                    </div>
                    <div className={`${styles.inputWrapper} ${styles.inputWrapperSmall}`}>
                        <InputNumber inputId="currency-brazil" placeholder='R$ 0,00' required value={formData.valorCusto} onValueChange={(e) => handleFormEdit(e,"valorCusto")} mode="currency" currency="BRL" locale="pt-BR" />
                        <label>Valor Custo</label>
                    </div>
                    <div className={styles.inputWrapper}>
                        <select name='brand' id='brand'>
                            <option value="-">Escolha uma marca</option>
                            <option value="Dell">Dell</option>
                            <option value="Apple">Apple</option>
                            <option value="Microsoft">Microsoft</option>
                            {/* Opções de marcas buscadas do banco de dados */}
                        </select>
                        <label>Marca</label>
                    </div>
                    <div className={styles.inputWrapper}>
                        <select name='category' id='category'>
                            <option value="-">Escolha uma categoria</option>
                            <option value="Jóias">Jóias</option>
                            <option value="Roupas">Roupas</option>
                            {/* Opções de categorias buscadas do banco de dados */}
                        </select>
                        <label>Categoria</label>
                    </div>
                    <div className={`${styles.inputWrapper} ${styles.inputWrapperSmall}`}>
                        <InputNumber value={formData.valorEstoque} placeholder='Ex: 1,200' onValueChange={(e) => handleFormEdit(e, "valorEstoque")} />
                        <label>Qtd. Estoque</label>
                    </div>
                </div>
                <div className={`${styles.inputWrapper} ${styles.textareaWrapper}`}>
                    <textarea name='Descrição' id='desc' rows="3" placeholder='' value={formData.descricaoCurta} onChange={(e) => handleFormEdit(e, "descricaoCurta")}></textarea>
                    <label>Desc. Produto</label>
                </div>
                <div className={`${styles.inputWrapper} ${styles.textareaWrapper}`}>
                    <textarea name="Descrição curta" id="descCurta" rows="2" placeholder='' value={formData.detalhada} onChange={(e) => handleFormEdit(e, "detalhada")}></textarea>
                    <label>Desc. Curta</label>
                </div>
                <div className={styles.contentButton}>
                    <div className={styles.divButtons}>
                        <span>X</span>
                        <button onClick={onCloseModal}>Cancelar</button>
                    </div>
                    <div className={styles.divButtons}>
                        <FaCheck size={14}/>
                        <button type="submit" >Salvar</button>
                    </div>
                </div>  
            </form>
        </div>
    );
}
 
export default AdicionarProdutoPage;
