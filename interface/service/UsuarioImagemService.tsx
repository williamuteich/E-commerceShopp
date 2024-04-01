import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:8080"
})

export class UsuarioImagemService {
    uploadImagem(obj) {
        console.log("ta recebendo aqui", obj)
        const formData = new FormData();
        formData.append("idPessoa", obj.idPessoa);
        formData.append('file', obj.file);

        const config = {
            headers: { // Corrigido para 'headers' em vez de 'Headers'
                'content-type': 'multipart/form-data'
            }
        }

        return axiosInstance.post(`/api/imagemUser/`, formData, config); // Passando formData como segundo argumento
    }
}