package com.dev.Elegance.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dev.Elegance.entity.Permissao;

public interface PermissaoRepository extends JpaRepository<Permissao, Long>{
    
      List<Permissao> findByNome(String nome);
}
