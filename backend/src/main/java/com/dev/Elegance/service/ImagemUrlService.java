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

import com.dev.Elegance.entity.ImagemUrl;
import com.dev.Elegance.entity.Produto;
import com.dev.Elegance.repository.ImagemUrlRepository;
import com.dev.Elegance.repository.ProdutoRepository;

@Service
public class ImagemUrlService {
    
    @Autowired
    private ImagemUrlRepository imagemUrlRepository;

    @Autowired
    private ProdutoRepository produtoRepository;

    public List<ImagemUrl> buscarTodos(){
        return imagemUrlRepository.findAll();
    }

    public ImagemUrl inserir(Long idProduto, MultipartFile file){
        // Busca o produto pelo ID fornecido
        Produto produto =  produtoRepository.findById(idProduto).get();
        // Cria um novo objeto ImagemUrl
        ImagemUrl objeto = new ImagemUrl();
        try {
            // Verifica se o arquivo não está vazio
            if (!file.isEmpty()){
                // Obtém os bytes do arquivo
                byte[] bytes = file.getBytes();
                // Define o nome do arquivo, incluindo o ID do produto
                String nomeImagem = produto.getId() + "_" + file.getOriginalFilename();
                // Define o caminho onde o arquivo será salvo
                Path caminho = Paths.get("C:/Ecommerce-Shop/E-commerceShopp/interface/imagens" + nomeImagem);
                // Escreve os bytes do arquivo no caminho especificado
                Files.write(caminho, bytes);
                // Define o nome da imagem no objeto ImagemUrl
                objeto.setImagemUrl(nomeImagem);
                // Define o produto associado à imagem
                objeto.setProduto(produto);
                // Define a data de criação como a data atual
                objeto.setDataCriacao(new Date());
                // Salva o objeto ImagemUrl no banco de dados e o retorna
                objeto = imagemUrlRepository.saveAndFlush(objeto);
            }
        } catch (IOException e){
            e.printStackTrace();
        }
        return objeto;
    }

    public ImagemUrl alterar(ImagemUrl imagemUrl){
        imagemUrl.setDataAtualizacao(new Date());
        return imagemUrlRepository.saveAndFlush(imagemUrl);
    }

    public void excluir(Long id){
        ImagemUrl imagemUrl = imagemUrlRepository.findById(id).orElse(null);
            if (imagemUrl != null) {
                try {
                    // Excluir o arquivo de imagem do sistema de arquivos
                    Path caminho = Paths.get("C:/imagens/" + imagemUrl.getImagemUrl());
                    Files.deleteIfExists(caminho);
                } catch (IOException e) {
                    e.printStackTrace();
                }
                // Excluir a entidade ImagemUrl do banco de dados
                imagemUrlRepository.delete(imagemUrl);
            }
        }
    }