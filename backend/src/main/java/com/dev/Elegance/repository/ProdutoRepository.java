package com.dev.Elegance.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.dev.Elegance.entity.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, Long>{
    
}
