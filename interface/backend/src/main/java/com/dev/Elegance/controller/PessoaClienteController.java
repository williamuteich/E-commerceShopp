package com.dev.Elegance.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dev.Elegance.dto.PessoaClienteRequestDTO;
import com.dev.Elegance.entity.Pessoa;
import com.dev.Elegance.service.PessoaClienteService;

@RestController
@RequestMapping("/api/cliente")
@CrossOrigin("http://localhost:3000")
public class PessoaClienteController {
    @Autowired
    private PessoaClienteService pessoaService;

    @PostMapping("/")
    public ResponseEntity<Pessoa> registrar(@RequestBody PessoaClienteRequestDTO pessoaClienteRequestDTO){
        Pessoa registrarPessoa = pessoaService.registrar(pessoaClienteRequestDTO);
        return ResponseEntity.ok(registrarPessoa);
    }
}
