package com.dev.Elegance.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dev.Elegance.entity.Cidade;
import com.dev.Elegance.repository.CidadeRepository;

@Service
public class CidadeService {
    
    @Autowired
    private CidadeRepository cidadeRepository;

    public List<Cidade> buscarTodos(){
        return cidadeRepository.findAll();
    }

    public Cidade inserir(Cidade cidade){
        cidade.setDataCriacao(new Date());
        return cidadeRepository.saveAndFlush(cidade);
    }

    public Cidade alterar(Cidade cidade){
        cidade.setDataAtualizacao(new Date());
        return cidadeRepository.saveAndFlush(cidade);
    }

    @SuppressWarnings("null")
    public void excluir(Long id){
        Cidade cidade = cidadeRepository.findById(id).get();
        cidadeRepository.delete(cidade);
    }
    
}
