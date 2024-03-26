package com.dev.Elegance.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dev.Elegance.entity.Produto;
import com.dev.Elegance.service.ProdutoService;

@RestController
@RequestMapping("/api/produto")
@CrossOrigin("http://localhost:3000")
public class ProdutoController {
    
    @Autowired
    private ProdutoService produtoService;

    @GetMapping("/")
    public ResponseEntity<List<Produto>> excluir(){
        List<Produto> buscarTodos = produtoService.buscarTodos();
        return ResponseEntity.ok(buscarTodos);
    }

    @PostMapping("/")
    public ResponseEntity<Produto> inserir(@RequestBody Produto produto){
        Produto adicionarProtudo = produtoService.inserir(produto);
        return ResponseEntity.ok(adicionarProtudo);
    }

    @PutMapping("/")
    public ResponseEntity<Produto> alterar(@RequestBody Produto produto){
        Produto alterarProduto = produtoService.alterar(produto);
        return ResponseEntity.ok(alterarProduto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable("id") Long id){
        produtoService.excluir(id);
        return ResponseEntity.ok().build();
    }
}
