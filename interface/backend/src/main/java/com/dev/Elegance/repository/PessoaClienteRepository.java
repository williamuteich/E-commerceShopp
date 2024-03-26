package com.dev.Elegance.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dev.Elegance.entity.Pessoa;

public interface PessoaClienteRepository extends JpaRepository<Pessoa, Long> {

}
