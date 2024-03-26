package com.dev.Elegance.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.dev.Elegance.entity.Marca;

public interface MarcaRepository extends JpaRepository<Marca, Long> {
    
}
