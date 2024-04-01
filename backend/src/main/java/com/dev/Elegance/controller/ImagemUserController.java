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

import com.dev.Elegance.entity.ImagemUser;
import com.dev.Elegance.service.ImagemUserService;

@RestController
@RequestMapping("/api/imagemUser")
@CrossOrigin("http://localhost:3000")
public class ImagemUserController {
    
    @Autowired
    private ImagemUserService imagemUserService;

    @GetMapping("/")
    public ResponseEntity<List<ImagemUser>> buscarTodos(){
        List<ImagemUser> buscarTodos = imagemUserService.buscarTodos();
        return ResponseEntity.ok(buscarTodos);
    }

    @PostMapping("/")
    public ResponseEntity<ImagemUser> inserir(@RequestParam("idPessoa") Long idPessoa, @RequestParam("file") MultipartFile file){
        ImagemUser novaImagem = imagemUserService.inserir(idPessoa, file);
        return ResponseEntity.ok(novaImagem);
    }

    @PutMapping("/")
    public ResponseEntity<ImagemUser> alterar(@RequestBody ImagemUser imagemUser){
        ImagemUser alterarImagemUser = imagemUserService.alterar(imagemUser);
        return ResponseEntity.ok(alterarImagemUser);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable("id") Long id){
        imagemUserService.excluir(id);
        return ResponseEntity.ok().build();
    }
    
}
