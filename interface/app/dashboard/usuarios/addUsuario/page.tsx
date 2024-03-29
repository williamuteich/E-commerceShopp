"use client"

import { useState, useEffect } from 'react';
import styles from '../../../UI/dashboard/usuarios/adicionaUsuario/adicionaUsuario.module.css';
import { UsuarioService } from '../../../../service/UsuarioService';
import { PermissaoService } from '../../../../service/PermissaoService';
import { buscarCEP } from '../../../../service/apiCep'
import { toast, ToastContainer } from 'react-toastify';
import TabelaUsuarioAdicionar from '../../../UI/dashboard/usuarios/adicionaUsuario/tabelausuario';
        
const AdicionarUsuarioPage = ({ onCloseModal, usuario  }) => {
    const [permissoes, setPermissoes] = useState([]);
    const [cargoSelecionado, setCargoSelecionado] = useState(usuario.cargoId);
    const [formData, setFormData] = useState(usuario)
    

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
                ...formData,
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
        <div>
            <ToastContainer />
            <TabelaUsuarioAdicionar
                handleSubmit={handleSubmit}
                formData={formData}
                cargoSelecionado={cargoSelecionado} 
                setCargoSelecionado={setCargoSelecionado} 
                permissoes={permissoes}  // Certifique-se de incluir permissoes
                setFormData={setFormData} // Certifique-se de incluir setFormData
                searchCep={searchCep}
                onCloseModal={onCloseModal}
                permissoes={permissoes}
            />
        </div>
    );
}

export default AdicionarUsuarioPage;
