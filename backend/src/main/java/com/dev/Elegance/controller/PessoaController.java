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

import com.dev.Elegance.entity.Pessoa;
import com.dev.Elegance.service.PessoaService;

@RestController
@RequestMapping("/api/pessoa")
@CrossOrigin("http://localhost:3000")
public class PessoaController {
    @Autowired
    private PessoaService pessoaService;

    @GetMapping("/")
    public ResponseEntity<List<Pessoa>> buscarTodos(){
        List<Pessoa> buscarTodos = pessoaService.buscarTodos();
        return ResponseEntity.ok(buscarTodos);
    } 

    @PostMapping("/")
    public ResponseEntity<Pessoa> inserir(@RequestBody Pessoa pessoa){
        Pessoa novaPessoa = pessoaService.inserir(pessoa);
        return ResponseEntity.ok(novaPessoa);
    }

    @PutMapping("/")
    public ResponseEntity<Pessoa> alterar(@RequestBody Pessoa pessoa){
        Pessoa alterarPessoa = pessoaService.alterar(pessoa);
        return ResponseEntity.ok(alterarPessoa);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Pessoa> excluir(@PathVariable("id") long id){
        pessoaService.excluir(id);
        return ResponseEntity.ok().build();

    }
}
