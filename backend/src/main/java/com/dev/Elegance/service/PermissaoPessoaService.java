package com.dev.Elegance.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dev.Elegance.entity.Permissao;
import com.dev.Elegance.entity.PermissaoPessoa;
import com.dev.Elegance.entity.Pessoa;
import com.dev.Elegance.repository.PermissaoPessoaRepository;
import com.dev.Elegance.repository.PermissaoRepository;

@Service
public class PermissaoPessoaService {

    @Autowired
    private PermissaoPessoaRepository permissaoPessoaRepository;

    @Autowired
    private PermissaoRepository permissaoRepository;

    @Autowired
    private PessoaService pessoaService; 

    public void vincularPessoaPermissaoCliente(Pessoa pessoa){
        List<Permissao> listaPermissao = permissaoRepository.findByNome("cliente"); 
        if(!listaPermissao.isEmpty()){ 
            PermissaoPessoa permissaoPessoa = new PermissaoPessoa();
            Pessoa pessoaSalva = pessoaService.inserir(pessoa); 
            permissaoPessoa.setPessoa(pessoaSalva);
            permissaoPessoa.setPermissao(listaPermissao.get(0)); 
            permissaoPessoaRepository.saveAndFlush(permissaoPessoa);
        }
    }
}
