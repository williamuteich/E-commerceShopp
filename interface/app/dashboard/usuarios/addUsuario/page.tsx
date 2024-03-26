"use client"

import { useState, useEffect } from 'react';
import styles from '../../../UI/dashboard/usuarios/adicionaUsuario/adicionaUsuario.module.css';
import { FaCheck } from "react-icons/fa";
import { UsuarioService } from '../../../../service/usuarioService';
import { PermissaoService } from '../../../../service/PermissaoService';
import { InputMask } from 'primereact/inputmask';
import { buscarCEP } from '../../../../service/apiCep'
import { toast, ToastContainer } from 'react-toastify';
        
const AdicionarUsuarioPage = ({ onCloseModal }) => {
    const [permissoes, setPermissoes] = useState([]);
    const [cargoSelecionado, setCargoSelecionado] = useState('');


    const usuarioService = new UsuarioService();
    const permissaoService = new PermissaoService();
    const cepService = new buscarCEP();

    const searchCep = async (cep) =>{
        const recebeCep = cep.replace(/[.-]/g, '');
        try {
            const response = await cepService.buscarEnderecoCep(recebeCep);
            console.log("Retorno do objeto: ",response)

            setFormData({
                ...formData,
                bairro: response.bairro,
                endereco: response.logradouro,
                //localidade: response.localidade,
                cep: response.cep
            })
        } catch (error) {
            console.error('Erro ao tentar encontrar o CEP', error)
        }
    }

    useEffect(() => {
        const fetchPermissoes = async () => {
            try {
                const response = await permissaoService.buscarTodas();
                setPermissoes(response.data);
            } catch (error) {
                console.error('Erro ao buscar permissões:', error);
            }
        };

        fetchPermissoes();
    }, []);

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        senha: '',
        endereco: '',
        cpf: '',
        ativo: '',
        cep: '',
        numEndereco: '',
        bairro: '',
        telefone: '',
        complemento: '',
    });

    const handleFormEdit = (event, nome) => {
        setFormData({
            ...formData,
            [nome]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {

            const senha = formData.senha
            const senhaCaracteres = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(senha)
            const senhaMaiuscula = /[A-Z]/.test(senha)
            
            const cpfExistente = await usuarioService.verificarCpfExistente(formData.cpf);
            const verificaTelefone = await usuarioService.verificaTelefone(formData.telefone);
            const verificaMail = await usuarioService.verificaMail(formData.email);

            if(senha && senha.length <= 7){
                toast.error('Sua senha deve ser maior ou igual a 8 caracteres.')
                return;
            }

            if(senha && senha.length >= 8) {
                if(!senhaMaiuscula){
                    toast.error('Sua deve conter letra Maiúscula.')
                    return;
                }
                if(!senhaCaracteres){
                    toast.error('Sua senha deve conter carácteres especiais.')
                    return;
                }
            }
            
            if (cpfExistente) {
                return;
            }
           
            if (verificaMail) {
                return; 
            }

            if (verificaTelefone) {
                return; 
            }

            const formDataToSend = {
                nome: formData.nome,
                email: formData.email,
                senha: formData.senha,
                endereco: formData.endereco,
                cpf: formData.cpf,
                ativo: formData.ativo,
                cep: formData.cep,
                numEndereco: formData.numEndereco,
                bairro: formData.bairro,
                telefone: formData.telefone,
                complemento: formData.complemento,
                permissaoPessoas: [{
                    permissao: {
                        id: cargoSelecionado
                    }
                }],
            };
            
            // Envie apenas os campos preenchidos do formulário para o servidor usando o método novoUsuario
            const recebeCPF = formDataToSend.cpf.replace(/[.-]/g, '');
            const response = await usuarioService.adicionarUsuario(formDataToSend);
            
            onCloseModal(); // Feche o modal após o envio bem-sucedido
            
        } catch (error) {
            console.error('Erro ao enviar dados do formulário:', error);
            // Lidere com o erro, se necessário
        }
    };

    return (
        <div className={styles.container} id="root">
            <ToastContainer />
            <div className={styles.imagemUsuario}>
                <img src='/noavatar.png' width={200} height={200}/>
                <button><a href=''>Adicionar Foto</a></button>
            </div>
            <form onSubmit={handleSubmit} className={styles.form}>
                <h1>Dados do Usuário</h1>
                <div className={styles.campo}>
                    <div className={styles.inputWrapper}>
                        <input type="text" name='Nome' placeholder='' required value={formData.nome} onChange={(e) => handleFormEdit(e, "nome")}/>
                        <label>Nome Completo</label>
                    </div>
                    <div className={styles.inputWrapper}>
                        <input type="email" placeholder='' name='Email' required value={formData.email} onChange={(e) => handleFormEdit(e, "email")}/>
                        <label>Email</label>
                    </div>
                    <div className={styles.inputWrapper}>
                        <InputMask id="cpf" placeholder='' mask="999.999.999-99" required value={formData.cpf} onChange={(e) => handleFormEdit(e, "cpf")}/>
                        <label>CPF</label>
                    </div>
                    <div className={styles.inputWrapper}>
                        <input type="password" placeholder='' name='Senha' required value={formData.senha} onChange={(e) => handleFormEdit(e, "senha")}/>
                        <label>Senha</label>
                    </div>
                    <div className={styles.inputWrapper}>
                        <InputMask id="telefone" mask="(99) 99999-9999" required value={formData.telefone} onChange={(e) => handleFormEdit(e, "telefone")}/>
                        <label>Celular</label>
                    </div>
                    <div className={styles.inputWrapper}>
                        <select name='cargo' id='cargo' value={cargoSelecionado} onChange={(e) => setCargoSelecionado(e.target.value)}>
                            <option value="-">Selecione um Cargo</option>
                            {permissoes.map(permissao => (
                                <option key={permissao.id} value={permissao.id}>{permissao.nome}</option>
                            ))}
                        </select>
                        <label>Cargo</label>
                    </div>
                    <div className={styles.inputWrapper}>
                        <select name='status' id='status' onChange={(e) => handleFormEdit(e, 'ativo')}>
                            <option value="-">Status</option>
                            <option value="true">Ativo</option>
                            <option value="false">Inativo</option>
                        </select>
                        <label>Status</label>
                    </div>
                    <div className={styles.inputWrapper}>
                        <InputMask id="cep" mask="99999-999" required value={formData.cep} onChange={(e) => handleFormEdit(e, "cep")} onBlur={(e) => searchCep(e.target.value)}/>
                        <label>Cep</label>
                    </div>
                    <div className={styles.inputWrapper}>
                        <input id='desc' required value={formData.bairro} onChange={(e) => handleFormEdit(e, "bairro")}/>
                        <label>Bairro</label>
                    </div>
                    <div className={styles.inputWrapper}>
                        <input id='desc' required value={formData.endereco} onChange={(e) => handleFormEdit(e, "endereco")}/>
                        <label>Logradouro</label>
                    </div>
                    <div className={styles.inputWrapper}>
                        <input id='num' type='number' required value={formData.numEndereco} onChange={(e) => handleFormEdit(e, "numEndereco")}/>
                        <label>Número</label>
                    </div>
                    <div className={styles.inputWrapper}>
                        <input id='complemento' required value={formData.complemento} onChange={(e) => handleFormEdit(e, "complemento")}/>
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

export default AdicionarUsuarioPage;
