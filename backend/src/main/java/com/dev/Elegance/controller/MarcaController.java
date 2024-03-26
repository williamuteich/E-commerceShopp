package com.dev.Elegance.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.dev.Elegance.entity.Marca;
import com.dev.Elegance.service.MarcaService;

@RestController
@RequestMapping("/api/marca")
@CrossOrigin("http://localhost:3000")
public class MarcaController {
    @Autowired

    private MarcaService marcaService;

    @GetMapping("/")
    public ResponseEntity<List<Marca>> buscar(){
        List<Marca> buscarTodos = marcaService.buscarTodos();
        return ResponseEntity.ok(buscarTodos);
    }

    @PostMapping("/")
    public ResponseEntity<Marca> inserir(@RequestBody Marca marca){
        Marca novaMarca = marcaService.inserir(marca);
        return ResponseEntity.ok(novaMarca);
    }

    @PutMapping("/")
    public ResponseEntity<Marca> alterar(@RequestBody Marca marca){
        Marca alterarMarca = marcaService.alterar(marca);
        return ResponseEntity.ok(alterarMarca);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable("id") Long id){
        marcaService.excluir(id);
        return ResponseEntity.ok().build();

    }
}
