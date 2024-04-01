package com.dev.Elegance.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.dev.Elegance.entity.ImagemUser;
import com.dev.Elegance.entity.Pessoa;
import com.dev.Elegance.repository.ImagemUserRepository;
import com.dev.Elegance.repository.PessoaRepository;

@Service
public class ImagemUserService {

    @Autowired
    private ImagemUserRepository imagemUserRepository;

    @Autowired
    private PessoaRepository pessoaRepository;

    public List<ImagemUser> buscarTodos() {
        return imagemUserRepository.findAll(); // Corrigido para retornar List<ImagemUser>
    }

    public ImagemUser inserir(Long idPessoa, MultipartFile file) {
        Pessoa pessoa = pessoaRepository.findById(idPessoa).orElseThrow(() -> new RuntimeException("Pessoa não encontrada"));
        ImagemUser objeto = new ImagemUser();
        try {
            if (!file.isEmpty()) {
                byte[] bytes = file.getBytes();
                String nomeImagem = pessoa.getId() + "_" + file.getOriginalFilename();
                Path caminho = Paths.get("C:/Ecommerce-Shop/E-commerceShopp/interface/public/" + nomeImagem);
                Files.write(caminho, bytes);
                objeto.setImagemUser(nomeImagem);
                objeto.setPessoa(pessoa);
                objeto.setDataCriacao(new Date());
                objeto = imagemUserRepository.save(objeto);
            } else {
                throw new RuntimeException("Arquivo vazio");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return objeto;
    }

    public ImagemUser alterar(ImagemUser imagemUser) {
        if (imagemUser.getId() == null) {
            throw new RuntimeException("ID da imagem não fornecido");
        }

        imagemUser.setDataAtualizacao(new Date());
        return imagemUserRepository.save(imagemUser);
    }

    public void excluir(Long id) {
        ImagemUser imagemUser = imagemUserRepository.findById(id).orElse(null);
        if (imagemUser != null) {
            try {
                Path caminho = Paths.get("C:/public/" + imagemUser.getImagemUser());
                Files.deleteIfExists(caminho);
            } catch (IOException e) {
                e.printStackTrace();
            }
            imagemUserRepository.delete(imagemUser);
        } else {
            throw new RuntimeException("Imagem não encontrada para o ID fornecido");
        }
    }
}
