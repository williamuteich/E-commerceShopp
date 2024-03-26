package com.dev.Elegance.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dev.Elegance.entity.Pessoa;
import com.dev.Elegance.service.PessoaGerenciamentoService;

@RestController
@RequestMapping("/api/pessoa-gerenciamento")
@CrossOrigin("http://localhost:3000")
public class PessoaGerenciamentoController {
    
    @Autowired
    private PessoaGerenciamentoService pessoaGerenciamentoService;

    @PostMapping("/solicitar-codigo")
    public String recuperarCodigo(@RequestBody Pessoa pessoa){
    return pessoaGerenciamentoService.solicitarCodigo(pessoa.getEmail());
    }

    @PostMapping("/senha-alterar")
    public String alterarSenha(@RequestBody Pessoa pessoa){
        return pessoaGerenciamentoService.alterarSenha(pessoa);
    }
}
