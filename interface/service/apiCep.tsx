import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://viacep.com.br/ws/01001000/json/"
});

export class buscarCEP {
  async buscarEnderecoCep(data) {
    const response = await axiosInstance.get(`https://viacep.com.br/ws/${data}/json/`)
    return response.data
  }
}
