package com.dev.Elegance.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dev.Elegance.entity.Produto;
import com.dev.Elegance.repository.ProdutoRepository;

@Service
public class ProdutoService {
    
    @Autowired
    private ProdutoRepository produtoRepository;

    public List<Produto> buscarTodos(){
       return produtoRepository.findAll();
    }

    public Produto inserir(Produto produto){
        produto.setDataCriacao(new Date());
        return produtoRepository.saveAndFlush(produto);
    }

    public Produto alterar(Produto produto){
        //Produto prodtuoExistente = produtoRepository.findById(produto.getId()).orElseThrow(() -> new RuntimeException("Produto não encontrado"));
        //produto.setDataCriacao(prodtuoExistente.getDataCriacao());
        produto.setDataAtualizacao(new Date());
        return produtoRepository.saveAndFlush(produto);
    }

    @SuppressWarnings("null")
    public void excluir(Long id){
        Produto produto = produtoRepository.findById(id).get();
        produtoRepository.delete(produto);
    }
}
