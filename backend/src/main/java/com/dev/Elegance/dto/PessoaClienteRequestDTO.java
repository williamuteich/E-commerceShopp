package com.dev.Elegance.dto;

import org.springframework.beans.BeanUtils;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.dev.Elegance.entity.Cidade;
import com.dev.Elegance.entity.Pessoa;

import lombok.Data;
@Data
@CrossOrigin
public class PessoaClienteRequestDTO {
    
    private String nome;
    private String cpf;
    private String email;
    private String endereco;
    private String cep;
    private Cidade cidade;

    public Pessoa converter(PessoaClienteRequestDTO pessoaClienteRequestDTO){
        Pessoa pessoa = new Pessoa();
        BeanUtils.copyProperties(pessoaClienteRequestDTO, pessoa);
        return pessoa;
    }
}
