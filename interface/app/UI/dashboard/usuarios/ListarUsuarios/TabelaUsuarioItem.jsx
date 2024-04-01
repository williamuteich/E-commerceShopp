import React, { useState, useEffect } from "react";
import { UsuarioImagemService } from "../../../../../service/UsuarioImagemService";

const TabelaUsuarios = ({ styles, conteudoPagina, formataData, openModalDelete, openModalEdit }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <td>ID</td>
          <td>Nome</td>
          <td>CPF</td>
          <td>Email</td>
          <td>Criado</td>
          <td>Tipo</td>
          <td>Status</td>
          <td>Ação</td>
        </tr>
      </thead>
      <tbody>
        {conteudoPagina.map((usuario) => {
          return (
            <tr key={usuario.id}>
              <td className={styles.estiloTable}>{usuario.id}</td>
              <td className={styles.estiloTable}>
                <div className={styles.usuario}>
                    <img
                      src="/noproduct.png"
                      alt="avatar"
                      width={40}
                      height={40}
                      className={styles.avatar}
                    />
                  {usuario.nome.charAt().toUpperCase() + usuario.nome.slice(1).toLowerCase()}
                </div>
              </td>
              <td className={styles.estiloTable}>{usuario.cpf}</td>
              <td className={styles.estiloTable}>{usuario.email}</td>
              <td className={styles.estiloTable}>
                {formataData(usuario.dataCriacao)}
              </td>
              <td className={styles.estiloTable}>{usuario.permissaoPessoas[0].permissao.nome}</td>
              <td className={styles.estiloTable}>
                {usuario.ativo && usuario.ativo === true ? (
                  <span>Ativo</span>
                ) : (
                  <span>Inativo</span>
                )}
              </td>
              <td className={styles.estiloTable}>
                <div className={styles.buttons}>
                  <button className={`${styles.buttonUser} ${styles.visualizar}`} onClick={() => openModalEdit(usuario, true)}>
                    Editar
                  </button>
                  <button className={`${styles.buttonUser} ${styles.excluir}`} onClick={() => openModalDelete(usuario.id)}>
                    Excluir
                  </button>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TabelaUsuarios;
