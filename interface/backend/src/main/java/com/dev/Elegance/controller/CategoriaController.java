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

import com.dev.Elegance.entity.Categoria;
import com.dev.Elegance.service.CategoriaService;

@RestController
@RequestMapping("/api/categoria")
@CrossOrigin("http://localhost:3000")
public class CategoriaController {
    
    @Autowired
    private CategoriaService categoriaService;

    @GetMapping("/")
    public ResponseEntity<List<Categoria>> buscar(){
        List<Categoria> categorias = categoriaService.buscarTodos();
        return ResponseEntity.ok(categorias);
    }

    @PostMapping("/")
    public ResponseEntity<Categoria> inserir(@RequestBody Categoria categoria){
        Categoria novaCategoria = categoriaService.inserir(categoria);
        return ResponseEntity.ok(novaCategoria);
    }

    @PutMapping("/")
    public ResponseEntity<Categoria> alterar(@RequestBody Categoria categoria){
        Categoria categoriaAtualizada = categoriaService.alterar(categoria);
        return ResponseEntity.ok(categoriaAtualizada);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable("id") Long id){
        categoriaService.excluir(id);
        return ResponseEntity.ok().build();
        
    }
}

