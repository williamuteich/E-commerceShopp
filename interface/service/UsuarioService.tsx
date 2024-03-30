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

  editarUsuario(usuario) {
    console.log("está recebendo dados no axios:", usuario)
    return axiosInstance.put("/api/pessoa/", usuario);
  }

  // Método para deletar um usuário específico
  deletar(usuarioId) {
    return axiosInstance.delete(`/api/pessoa/${usuarioId}`);
  }

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

  async verificarCpfExistente(cpf, usuarioID){
    //console.log('retorno CPF:', cpf + ' <br>retorno usuario ' + usuarioID);
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