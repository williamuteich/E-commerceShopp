package com.dev.Elegance.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.dev.Elegance.entity.Pessoa;

public interface PessoaRepository extends JpaRepository<Pessoa, Long> {
    
    Pessoa findByEmail(String email);

    Pessoa findByEmailAndCodigoRecuperacaoSenha(String email, String codigoRecuperacaoSenha);
}
