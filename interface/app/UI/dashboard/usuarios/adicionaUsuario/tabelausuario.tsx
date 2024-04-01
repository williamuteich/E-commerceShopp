import styles from './adicionaUsuario.module.css';
import { FaCheck } from "react-icons/fa";
import { InputMask } from 'primereact/inputmask';
import { useState } from 'react';

const TabelaUsuarioAdicionar = ({ handleSubmit, formData, cargoSelecionado, setCargoSelecionado, searchCep, setFormData, permissoes, onCloseModal }) => {

    const [imagemUrl, setImagemUrl] = useState('/noavatar.png'); 

    const handleFormEdit = (event, nome) => {
        setFormData({
            ...formData,
            [nome]: event.target.value
        });
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file); 
            setImagemUrl(imageUrl); 
        }
    };

    return ( 
        <div className={styles.container} id="root">
            <form action="/upload" method="POST" encType="multipart/form-data" className={styles.imagemUsuario}>
                <img src={imagemUrl} width={200} height={200}/>
                <label htmlFor="imagem" className={styles.customFileUpload}>Adicionar Foto</label>
                <input type="file" id="imagem" name="imagem" accept="image/*" style={{ display: 'none' }} onChange={handleFileChange} />
            </form>
            <form onSubmit={handleSubmit} className={styles.form}>
                <h1>Dados do Usuário</h1>
                <div className={styles.campo}>
                    <div className={styles.inputWrapper}>
                        <input type="text" name='Nome' placeholder='' required value={formData.nome || ''} onChange={(e) => handleFormEdit(e, "nome")}/>
                        <label>Nome Completo</label>
                    </div>
                    <div className={styles.inputWrapper}>
                        <input type="email" placeholder='' name='Email' required value={formData.email || ''} onChange={(e) => handleFormEdit(e, "email")}/>
                        <label>Email</label>
                    </div>
                    <div className={styles.inputWrapper}>
                        <InputMask id="cpf" placeholder='' mask="999.999.999-99" required value={formData.cpf || ''} onChange={(e) => handleFormEdit(e, "cpf")}/>
                        <label>CPF</label>
                    </div>
                    <div className={styles.inputWrapper}>
                        <input type="password" placeholder='' name='Senha' required value={formData.senha || ''} onChange={(e) => handleFormEdit(e, "senha")}/>
                        <label>Senha</label>
                    </div>
                    <div className={styles.inputWrapper}>
                        <InputMask id="telefone" mask="(99) 99999-9999" required value={formData.telefone || ''} onChange={(e) => handleFormEdit(e, "telefone")}/>
                        <label>Celular</label>
                    </div>
                    <div className={styles.inputWrapper}>
                        <select
                            name='cargo'
                            id='cargo'
                            value={cargoSelecionado}
                            onChange={(e) => setCargoSelecionado(e.target.value)}
                        >
                            <option value="">Selecionar Cargo</option>
                            {permissoes.map(permissao => (
                                <option
                                    key={permissao.id}
                                    value={permissao.id}
                                >
                                    {permissao.nome}
                                </option>
                            ))}
                        </select>
                        <label>Cargo</label>
                    </div>
                    <div className={styles.inputWrapper}>
                        <select
                            name='status'
                            id='status'
                            value={formData.ativo}
                            onChange={(e) => handleFormEdit(e, 'ativo')}
                        >
                            <option value="-">Status</option>
                            <option value="true">Ativo</option>
                            <option value="false">Inativo</option>
                        </select>
                        <label>Status</label>
                    </div>
                    <div className={styles.inputWrapper}>
                        <InputMask id="cep" mask="99999-999" required value={formData.cep || ''} onChange={(e) => handleFormEdit(e, "cep")} onBlur={(e) => searchCep(e.target.value)}/>
                        <label>Cep</label>
                    </div>
                    <div className={styles.inputWrapper}>
                        <input id='desc' required value={formData.bairro || ''} onChange={(e) => handleFormEdit(e, "bairro")}/>
                        <label>Bairro</label>
                    </div>
                    <div className={styles.inputWrapper}>
                        <input id='desc' required value={formData.endereco || ''} onChange={(e) => handleFormEdit(e, "endereco")}/>
                        <label>Logradouro</label>
                    </div>
                    <div className={styles.inputWrapper}>
                        <input id='num' type='number' required value={formData.numEndereco || ''} onChange={(e) => handleFormEdit(e, "numEndereco")}/>
                        <label>Número</label>
                    </div>
                    <div className={styles.inputWrapper}>
                        <input id='complemento' required value={formData.complemento || ''} onChange={(e) => handleFormEdit(e, "complemento")}/>
                        <label>Complemento</label>
                    </div>
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
 
export default TabelaUsuarioAdicionar;
