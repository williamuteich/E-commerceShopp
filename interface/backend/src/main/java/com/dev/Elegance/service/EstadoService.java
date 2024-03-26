package com.dev.Elegance.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dev.Elegance.entity.Estado;
import com.dev.Elegance.repository.EstadoRepository;

@Service
public class EstadoService {

    @Autowired
    private EstadoRepository estadoRepository;

    public List<Estado> buscarTodos() {
        return estadoRepository.findAll();
    }

    public Estado inserir(Estado estado) {
        estado.setDataCriacao(new Date());
        return estadoRepository.saveAndFlush(estado);
    }

    public Estado alterar(Estado estado) {
        estado.setDataAtualizacao(new Date());
        return estadoRepository.saveAndFlush(estado);
    }

    @SuppressWarnings("null")
    public void excluir(Long id) {
        Estado estado = estadoRepository.findById(id).get();
        estadoRepository.delete(estado);
    }
}