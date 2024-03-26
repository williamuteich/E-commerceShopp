package com.dev.Elegance.entity;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "permissao")
@Data
public class Permissao {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private Long id;
    private String nome;
    private Date dataCriacao;
    private Date dataAtualizacao;
}
