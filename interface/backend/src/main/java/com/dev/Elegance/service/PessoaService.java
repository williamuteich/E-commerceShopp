package com.dev.Elegance.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dev.Elegance.entity.Pessoa;
import com.dev.Elegance.repository.PessoaRepository;


@Service
public class PessoaService {
    @Autowired
    private PessoaRepository pessoaRepository;

    public List<Pessoa> buscarTodos(){
       return pessoaRepository.findAll();
    }

    public Pessoa inserir(Pessoa pessoa){
        pessoa.setDataCriacao(new Date());
        return pessoaRepository.saveAndFlush(pessoa);
    }

    public Pessoa alterar(Pessoa pessoa){
        //Pessoa pessoaExistente = pessoaRepository.findById(pessoa.getId()).orElseThrow(() -> new RuntimeException("Pessoa Não Encontrada"));
        //pessoaExistente.setDataCriacao(pessoaExistente.getDataCriacao());
        pessoa.setDataAtualizacao(new Date());
        return pessoaRepository.saveAndFlush(pessoa);
    }

    @SuppressWarnings("null")
    public void excluir(Long id){
        Pessoa pessoa = pessoaRepository.findById(id).get();
        pessoaRepository.delete(pessoa);
    }
}
