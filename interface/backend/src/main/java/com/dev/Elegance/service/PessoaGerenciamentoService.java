package com.dev.Elegance.service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dev.Elegance.entity.Pessoa;
import com.dev.Elegance.repository.PessoaRepository;

@Service
public class PessoaGerenciamentoService {
    
    @Autowired
    private PessoaRepository pessoaRepository;

    @Autowired
    private EmailService emailService;

    // Método para solicitar o código de recuperação de senha
    public String solicitarCodigo(String email){

        // Busca a pessoa pelo e-mail fornecido
        Pessoa pessoa = pessoaRepository.findByEmail(email);
        
        // Verifica se a pessoa foi encontrada
        if (pessoa != null) {
            pessoa.setCodigoRecuperacaoSenha(getCodigoRecuperacaoSenha(pessoa.getId()));
            pessoa.setDataEnvioCodigo(new Date());
            pessoaRepository.saveAndFlush(pessoa);
    
            // Calcula a data de expiração do código (30 minutos a partir da data de envio)
            Date dataExpiracao = new Date(pessoa.getDataEnvioCodigo().getTime() + (30 * 60 * 1000));
            SimpleDateFormat formato = new SimpleDateFormat("HH:mm:ss");
    
            // Envia o e-mail com o código de recuperação e a data de expiração
            emailService.enviarEmailTexto(
                pessoa.getEmail(),
                "Código De Recuperação de Senha.",
                String.format("Olá, o seu código de recuperação de senha é: %s. Por favor, utilize-o para redefinir sua senha. Este código expirará às %s.", pessoa.getCodigoRecuperacaoSenha(), formato.format(dataExpiracao))
            );
    
            return "Código Enviado com Sucesso";
        } else {
            // Se a pessoa não foi encontrada, retorna uma mensagem de erro
            return "Usuário não encontrado.";
        }
    }

    // Método para alterar a senha
    public String alterarSenha(Pessoa pessoa){
        // Busca a pessoa pelo e-mail fornecido
        Pessoa pessoaBanco = pessoaRepository.findByEmail(pessoa.getEmail());
        
        // Verifica se a pessoa foi encontrada
        if(pessoaBanco != null){
            // Verifica se o código de recuperação fornecido é válido
            if(pessoaBanco.getCodigoRecuperacaoSenha() != null && pessoaBanco.getCodigoRecuperacaoSenha().equals(pessoa.getCodigoRecuperacaoSenha())) {
                Date diferenca = new Date(new Date().getTime() - pessoaBanco.getDataEnvioCodigo().getTime());
                if(diferenca.getTime() / 1000 < 1800){
                    // Altera a senha da pessoa
                    pessoaBanco.setSenha(pessoa.getSenha());
                    // Limpa o código de recuperação
                    if (pessoaBanco.getSenha() != null && pessoaBanco.getSenha().length() >= 8) {
                        pessoaBanco.setCodigoRecuperacaoSenha(null);
                        // Salva as alterações no banco de dados
                        pessoaRepository.saveAndFlush(pessoaBanco);
                        // Envia um e-mail de confirmação para a pessoa
                        emailService.enviarEmailTexto(
                            pessoaBanco.getEmail(),
                            "Elegance: Senha Alterada",
                            String.format("Olá, %s<br> Sua nova senha foi cadastrada.", pessoaBanco.getNome())
                        );
        
                        return "Senha Alterada com Sucesso";
                    } else {
                        return "A senha deve conter pelo menos 8 caracteres.";
                    }

                } else{
                    return "Tempo Expirado. Solicite novamente um novo código válido.";
                }
            } else {
                return "Código de recuperação inválido.";
            }
        } else {
            return "Usuário não encontrado.";
        }
    }
    
    // Método para gerar o código de recuperação de senha
    private String getCodigoRecuperacaoSenha(Long id){
        DateFormat format = new SimpleDateFormat("ddMMyyyyHHmmss");
        return format.format(new Date()) + id;
    }
}
