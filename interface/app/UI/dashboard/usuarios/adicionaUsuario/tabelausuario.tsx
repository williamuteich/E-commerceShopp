import styles from './adicionaUsuario.module.css';
import { FaCheck } from "react-icons/fa";
import { InputMask } from 'primereact/inputmask';
import { useState } from 'react';
import { UsuarioImagemService } from '../../../../../service/UsuarioImagemService';

const TabelaUsuarioAdicionar = ({ handleSubmit, formData, cargoSelecionado, setCargoSelecionado, searchCep, setFormData, permissoes, onCloseModal, usuario }) => {
    const [imagemSelecionada, setImagemSelecionada] = useState(null)
    const usuarioImagemService = new UsuarioImagemService();

    const handleFormEdit = (event, nome) => {
        setFormData({
            ...formData,
            [nome]: event.target.value
        });
    };

    const uploadImagens = (event) => {
        event.preventDefault();
        usuarioImagemService.uploadImagem({
            idPessoa: usuario.id,
            file: event.target.files[0] 
        }).then(response => {
            alert('Imagem inserida com sucesso');
            setImagemSelecionada(response.data); 
        }).catch(error => {
            console.error('Erro ao enviar imagem:', error);
        });
        event.target.value = ''; // Corrigido o clear do campo de upload
    }
    
    const imgUsuario =  imagemSelecionada ? imagemSelecionada.imagemUser :  'noavatar.png'
    console.log("aaaaaaaaaaaaaa", imgUsuario)
    return ( 
        <div className={styles.container} id="root">
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.imagemUsuario}>
                    <img src={`/${imgUsuario}`} width={200} height={200} alt="Imagem do usuário" />
                    <label htmlFor="imagem" className={styles.customFileUpload}>
                        Adicionar Foto
                        <input
                            type="file"
                            id="imagem"
                            name="imagem"
                            onChange={uploadImagens}
                            accept="image/*"
                            style={{ display: 'none' }}
                        />
                    </label>
                </div>
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
<<<<<<< HEAD
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
=======
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

>>>>>>> 9d7c33545b38bc8a1bc5083fd5ba14a1d246ada6
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
