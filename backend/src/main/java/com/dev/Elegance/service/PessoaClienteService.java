package com.dev.Elegance.service;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dev.Elegance.dto.PessoaClienteRequestDTO;
import com.dev.Elegance.entity.Pessoa;
import com.dev.Elegance.repository.PessoaClienteRepository;

@Service
public class PessoaClienteService {
    @Autowired
    private PessoaClienteRepository pessoaClienteRepository;

    @Autowired
    private PermissaoPessoaService permissaoPessoaService;

    @Autowired
    private EmailService emailService;


    public Pessoa registrar(PessoaClienteRequestDTO pessoaClienteRequestDTO){
        Pessoa pessoa = new PessoaClienteRequestDTO().converter(pessoaClienteRequestDTO);
        pessoa.setDataCriacao(new Date());
        permissaoPessoaService.vincularPessoaPermissaoCliente(pessoa);
        emailService.enviarEmailTexto(pessoa.getEmail(), "Loja Elegance", "Sua inscrição foi concluída com sucesso. Em breve, você receberá sua senha de acesso por e-mail. Por favor, aguarde alguns instantes.");
        return pessoaClienteRepository.saveAndFlush(pessoa);
    }
}
