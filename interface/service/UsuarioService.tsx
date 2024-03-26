import axios from "axios";
import { toast } from "react-toastify";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
});

export class UsuarioService {
  buscarTodos() {
    return axiosInstance.get("/api/pessoa/");
  }

  adicionarUsuario(dadosUsuario) {
    return axiosInstance.post("/api/pessoa/", dadosUsuario);
  }

  // Método para deletar um usuário específico
  deletar(usuarioId) {
    return axiosInstance.delete(`/api/pessoa/${usuarioId}`);
  }

  async verificaTelefone(telefone) {
    try {
        const response = await axiosInstance.get(`api/pessoa/?telefone=${telefone}`);
        const usuarioCel = response.data.filter(usuario => usuario.telefone === telefone);

        if (usuarioCel.length > 0) {
            toast.error('Número de Telefone Já Cadastrado.');
            return true; 
        }

        return false; 
    } catch (error) {
        console.error('Erro ao verificar Número de Celular.', error);
        throw error; 
    }
  }

  async verificarCpfExistente(cpf){
    try{
        const response = await axiosInstance.get(`/api/pessoa/?telefone=${cpf}`)
        const usuarioCpf = response.data.filter(usuario => usuario.cpf === cpf);
    
        if (usuarioCpf.length > 0){
          toast.error('CPF já cadastrado. Por favor, verifique o CPF inserido.');
          return true;
        }
        
        return false;
    } catch (error) {
      console.error('Erro ao verificar CPF.', error);
    }
  }

  async verificaMail(email) {
      try {
          const response = await axiosInstance.get(`/api/pessoa/?email=${email}`);
          const usuarioMail = response.data.filter(usuario => usuario.email === email);

          if (usuarioMail.length > 0) {
              toast.error('Email já cadastrado. Por favor, verifique o email inserido.');
              return true; 
          }

          return false; 
      } catch (error) {
          console.error('Erro ao verificar Email.', error);
          throw error; 
      }
  }
}