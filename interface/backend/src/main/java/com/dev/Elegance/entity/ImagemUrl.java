package com.dev.Elegance.entity;

import java.util.Date;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Data;

@Entity
@Table(name = "imagens")
@Data
public class ImagemUrl {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private Long id;
    private String imagemUrl;
    @ManyToOne
    @JoinColumn(name = "produto_id") 
    private Produto produto; // 
    @Temporal(TemporalType.TIMESTAMP)
    private Date dataCriacao;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dataAtualizacao;
}
