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

import com.dev.Elegance.entity.Estado;
import com.dev.Elegance.service.EstadoService;


@RestController
@RequestMapping("/api/estado")
@CrossOrigin("http://localhost:3000")
public class EstadoController {

    @Autowired
    private EstadoService estadoService;
    
    @GetMapping("/")
    public ResponseEntity<List<Estado>> buscar(){
        List<Estado> buscarTodos = estadoService.buscarTodos();
        return ResponseEntity.ok(buscarTodos);
    }

    @PostMapping("/")
    public ResponseEntity<Estado> inserir(@RequestBody Estado estado){
        Estado novoEstado = estadoService.inserir(estado);
        return ResponseEntity.ok(novoEstado);        
    }

    @PutMapping("/")
    public ResponseEntity<Estado> alterar(@RequestBody Estado estado){
        Estado estadoAtualizado = estadoService.alterar(estado);
        return ResponseEntity.ok(estadoAtualizado); 
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable("id") Long id){
        estadoService.excluir(id);
        return ResponseEntity.ok().build();
    }

}
