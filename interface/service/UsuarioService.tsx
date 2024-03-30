import axios from "axios";
import { toast } from "react-toastify";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
});

export class UsuarioService {
  //Metodo que busca todos os dados de usuário.
  buscarTodos() {
    return axiosInstance.get("/api/pessoa/");
  }

  adicionarUsuario(dadosUsuario) {
    return axiosInstance.post("/api/pessoa/", dadosUsuario);
  }

  //Metodo para editar usuário.
  editarUsuario(usuario) {
    return axiosInstance.put("/api/pessoa/", usuario);
  }

  // Metodo para deletar um usuário específico
  deletar(usuarioId) {
    return axiosInstance.delete(`/api/pessoa/${usuarioId}`);
  }

  //Validação de telefone
  async verificaTelefone(telefone, usuarioID) {
    try {
        const response = await axiosInstance.get(`api/pessoa/?telefone=${telefone}`);
        const usuarioCel = response.data.filter(usuario => usuario.telefone === telefone && usuario.id !== usuarioID);

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

  //Validação para CPF
  async verificarCpfExistente(cpf, usuarioID){
    try{
        const response = await axiosInstance.get(`/api/pessoa/?telefone=${cpf}`)
        const usuarioCpf = response.data.filter(usuario => usuario.cpf === cpf && usuario.id !== usuarioID);
    
        if (usuarioCpf.length > 0 &&  usuarioCpf.length){
          toast.error('CPF já cadastrado. Por favor, verifique o CPF inserido.');
          return true;
        }
        
        return false;
    } catch (error) {
      console.error('Erro ao verificar CPF.', error);
    }
  }

  //Validação para Número de Celular
  async verificaMail(email, usuarioID) {
      try {
          const response = await axiosInstance.get(`/api/pessoa/?email=${email}`);
          const usuarioMail = response.data.filter(usuario => usuario.email === email && usuario.id !== usuarioID);

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