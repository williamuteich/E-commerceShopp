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

import com.dev.Elegance.entity.Cidade;
import com.dev.Elegance.service.CidadeService;

@RestController
@RequestMapping("/api/cidade")
@CrossOrigin("http://localhost:3000")
public class CidadeController {

    @Autowired
    private CidadeService cidadeService;

    @GetMapping("/")
    public ResponseEntity<List<Cidade>> buscar(){
        List<Cidade> cidades = cidadeService.buscarTodos();
        return ResponseEntity.ok(cidades);
    }

    @PostMapping("/")
    public ResponseEntity<Cidade> inserir(@RequestBody Cidade cidade){
        Cidade novaCidade = cidadeService.inserir(cidade);
        return  ResponseEntity.ok(novaCidade);
    }

    @PutMapping("/")
    public ResponseEntity<Cidade> alterar(@RequestBody Cidade cidade){
        Cidade alterarCidade = cidadeService.alterar(cidade);
        return ResponseEntity.ok(alterarCidade);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable("id") Long id){
        cidadeService.excluir(id);
        return ResponseEntity.ok().build();
    }

}
