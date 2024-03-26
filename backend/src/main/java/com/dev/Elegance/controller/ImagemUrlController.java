package com.dev.Elegance.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.dev.Elegance.entity.ImagemUrl;
import com.dev.Elegance.service.ImagemUrlService;

@RestController
@RequestMapping("/api/imagemurl")
@CrossOrigin("http://localhost:3000")
public class ImagemUrlController {
    
    @Autowired
    private ImagemUrlService imagemUrlService;

    @GetMapping("/")
    public ResponseEntity<List<ImagemUrl>> buscarTodos(){
        List<ImagemUrl> buscarTodos = imagemUrlService.buscarTodos();
        return ResponseEntity.ok(buscarTodos);
    }

    @PostMapping("/")
    public ResponseEntity<ImagemUrl> inserir(@RequestParam("idProduto") Long idProduto, @RequestParam("file") MultipartFile file){
        ImagemUrl novaImagem = imagemUrlService.inserir(idProduto, file);
        return ResponseEntity.ok(novaImagem);
    }

    @PutMapping("/")
    public ResponseEntity<ImagemUrl> alterar(@RequestBody ImagemUrl imagemUrl){
        ImagemUrl alterarImagemUrl = imagemUrlService.alterar(imagemUrl);
        return ResponseEntity.ok(alterarImagemUrl);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable("id") Long id){
        imagemUrlService.excluir(id);
        return ResponseEntity.ok().build();
    }
    
}
