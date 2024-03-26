import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:8080"
})

export class ProdutoService {
    //vai listar toso os usuarios cadastrados no banco de dadso
    listarTodos() {
        return axiosInstance.get("/api/produto/");
    }

    //adicionar um novo usuario
    novoProduto(dadosProduto) {
        return axiosInstance.post("/api/produto/", dadosProduto);
    }

    //alterar dados do usuario

    
    alterarProduto(alterarDados){
        return axiosInstance.put("/api/produto/", alterarDados)
    }

    //deletar o usuario especifico
    deletarUsuario(deletarUsuario){
        return axiosInstance.delete("/api/produto/", deletarUsuario)
    }
}
