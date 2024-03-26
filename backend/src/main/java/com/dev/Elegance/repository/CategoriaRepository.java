package com.dev.Elegance.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.dev.Elegance.entity.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria, Long> {
    
}
