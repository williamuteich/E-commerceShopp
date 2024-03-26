import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:8080"
})

export class PermissaoService {
    buscarTodas() {
        return axiosInstance.get("/api/permissao/")
    }

    //deletar o usuario especifico
    deletar(usuarioId) {
        return axiosInstance.delete(`/api/pessoa/${usuarioId}`);
    }
}
