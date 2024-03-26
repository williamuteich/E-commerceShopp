package com.dev.Elegance.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dev.Elegance.entity.Permissao;
import com.dev.Elegance.repository.PermissaoRepository;

@Service
public class PermissaoService {
    
    @Autowired
    private PermissaoRepository permissaoRepository;

    public List<Permissao> buscarTodos(){
        return permissaoRepository.findAll();
    }

    public Permissao inserir(Permissao permissao){
        permissao.setDataCriacao(new Date());
        return permissaoRepository.saveAndFlush(permissao);
    }

    public Permissao alterar(Permissao permissao){
        permissao.setDataAtualizacao(new Date());
        return permissaoRepository.saveAndFlush(permissao);
    }

    public void excluir(Long id){
        Permissao permissao = permissaoRepository.findById(id).get();
         permissaoRepository.delete(permissao);
    }
}
