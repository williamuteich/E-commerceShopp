package com.dev.Elegance.entity;

import java.util.Date;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AccessLevel;
import lombok.Data;
import lombok.Setter;

@Entity
@Table(name = "pessoa")
@Data
public class Pessoa {
  
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    
    private Long id;
    private String nome;
    @ManyToOne
    @JoinColumn(name = "idCidade")
    private Cidade cidade;
    private String cpf;
    private String email;
    private String senha;
    private Boolean ativo = true;
    private String telefone;
    private String codigoRecuperacaoSenha;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dataEnvioCodigo;
    private String endereco;
    private String numEndereco;
    private String bairro;
    private String complemento;
    private String cep;
    @OneToMany(mappedBy = "pessoa", orphanRemoval = true, cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @Setter(value = AccessLevel.NONE)
    private List<PermissaoPessoa> permissaoPessoas;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dataCriacao;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dataAtualizacao;

    public void setPermissaoPessoas(List<PermissaoPessoa> pp) {
        for (PermissaoPessoa p : pp) {
            p.setPessoa(this);
        }
        this.permissaoPessoas = pp;
    }
}
