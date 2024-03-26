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

import com.dev.Elegance.entity.Permissao;
import com.dev.Elegance.service.PermissaoService;

@RestController
@RequestMapping("/api/permissao")
@CrossOrigin("http://localhost:3000")
public class PermissaoController {
    
    @Autowired
    private PermissaoService permissaoService;

    @GetMapping("/")
    public ResponseEntity<List<Permissao>> buscarTodos(){
        List<Permissao> buscarTodos = permissaoService.buscarTodos();
        return ResponseEntity.ok(buscarTodos);
    }

    @PostMapping("/")
    public ResponseEntity<Permissao> inserir(@RequestBody Permissao permissao){
        Permissao novaPermissao = permissaoService.inserir(permissao);
        return ResponseEntity.ok(novaPermissao);
    }

    @PutMapping("/")
    public ResponseEntity<Permissao> alterar(@RequestBody Permissao permissao){
        Permissao alterarPermissao = permissaoService.alterar(permissao);
        return ResponseEntity.ok(alterarPermissao);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable("id") Long id){
        permissaoService.excluir(id);
        return ResponseEntity.ok().build();
    }
}
