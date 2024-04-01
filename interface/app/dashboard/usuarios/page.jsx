"use client";

import React, { useState, useEffect  } from "react";
import Paginacao from "../../UI/dashboard/paginacao/paginacao";
import styles from "../../UI/dashboard/usuarios/usuarios.module.css";
import Search from "../../UI/dashboard/usuarios/search/search";
import { toast, ToastContainer } from "react-toastify";
import CustomModal from "../../UI/dashboard/customModal/customModal";
import AdicionarUsuarioPage from "./addUsuario/page";
import { UsuarioService } from "../../../service/UsuarioService";
import { PermissaoService } from "../../../service/PermissaoService";
import { format } from "date-fns";
import Loading from "../../UI/dashboard/loading/loading";
import TabelaUsuarios from '../../UI/dashboard/usuarios/ListarUsuarios/TabelaUsuarioItem'
import ConfirmDelete from '../../UI/dashboard/deletarDados/deletarDados'

const UsuariosPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [usuarios, setUsuarios] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, seCurrentPage] = useState(1)
  const [userEditAndDelete, setuserEditAndDelete] = useState(null)
  const [action, setAction] = useState(null);

  const usuarioService = new UsuarioService();
  const permissaoService = new PermissaoService();

  const listarUsuarios =
    usuarios.filter(usuario => 
      usuario.nome.toLowerCase().includes(search.toLowerCase()) ||
      usuario.cpf.toLowerCase().includes(search.toLowerCase()) ||
      usuario.email.toLowerCase().includes(search.toLowerCase())
    ) 

  const formataData = (data) => {
    return format(new Date(data), "dd/MM/yy HH:mm");
  };
  const itemsPerPage = 10 //Quantiade por Pág
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const conteudoPagina = listarUsuarios.slice(startIndex, endIndex);

  useEffect(() => {
    fetchData();
  }, [modalIsOpen]);

  const fetchData = () => {
    setIsLoading(true); 
    setTimeout(() => {
      usuarioService
        .buscarTodos()
        .then((response) => {
          setUsuarios(response.data); 
          setIsLoading(false); 
        })
        .catch((error) => {
          setIsLoading(false); 
          console.error("Erro ao encontrar todos os usuários", error);
        });
    }, 500)
  };

  const confirmUserDelete = async (userId) => {
    try {
<<<<<<< HEAD
      const response = await permissaoService.deletar(userId); 
      if (response.status === 200) {
        setDeleteModalOpen(false); 
        setIsLoading(false); 
        toast.success('Usuário excluído com sucesso', {
          position: "top-right",
          autoClose: 2000,
        });
        fetchData(); 
      } else {
        console.error("Erro ao tentar deletar Usuário:", response.statusText);
      }
=======
       permissaoService.deletar(userId);
      fetchData();
      toast.success("Usuário excluído com sucesso");
      setDeleteModalOpen(false);
      setIsLoading(isLoading);
>>>>>>> 9d7c33545b38bc8a1bc5083fd5ba14a1d246ada6
    } catch (error) {
      console.error("Erro ao tentar deletar Usuário", error);
    }
  };

  const openModalDelete = (userId) => {
    setuserEditAndDelete(userId);
    setDeleteModalOpen(true);
  };

<<<<<<< HEAD
  const openModalEdit = (usuario, action) => {
    setuserEditAndDelete(usuario);
    setModalIsOpen(true);
    setAction(action);
  };


  const toggleModal = (action) => {
    setuserEditAndDelete(false);
    setModalIsOpen(!modalIsOpen);
  };

=======
  const openModalEdit = (usuario) => {
    setuserEditAndDelete(usuario);
    setModalIsOpen(true)
    return true;
  }


  const toggleModal = (novousuario) => {
    setuserEditAndDelete(false)
    setModalIsOpen(!modalIsOpen);
  };

>>>>>>> 9d7c33545b38bc8a1bc5083fd5ba14a1d246ada6
  return (
    <div className={styles.container}>
      <ToastContainer />
      <div className={styles.top}>
        <Search placeholder={"Procurar por Usuário"} value={search} setSearch={setSearch}/>
        <div className={styles.addNew}>
          <button onClick={() => toggleModal(true)} className={styles.addButton}>
            Novo Usuário
          </button>
        </div>
      </div>
      {!isLoading && listarUsuarios.length === 0 && (
        <p className={styles.naoEncontrado}>Nenhum Usuário encontrado</p>
      )}
      {isLoading && !modalIsOpen && <Loading />}
      {conteudoPagina && conteudoPagina.length > 0 && (

      //Lista todos os registro
      <TabelaUsuarios
        styles={styles}
        conteudoPagina={conteudoPagina}
        formataData={formataData}
        openModalDelete={openModalDelete}
<<<<<<< HEAD
        openModalEdit={(usuario, action) => openModalEdit(usuario, action)}
=======
        setDeleteModalOpen={setDeleteModalOpen}
        confirmUserDelete={confirmUserDelete}
        openModalEdit={(usuario) => openModalEdit(usuario)} // Alteração aqui
>>>>>>> 9d7c33545b38bc8a1bc5083fd5ba14a1d246ada6
      />
      )}

      {/* Paginação de registro/*/}
      <Paginacao 
        currentPage={currentPage}
        totalPages={Math.ceil(listarUsuarios.length / itemsPerPage)}
        onPageChange={seCurrentPage}
      />

      {/* Deleta registro/*/}
      <CustomModal isOpen={deleteModalOpen}>
          <ConfirmDelete
              isOpen={deleteModalOpen}
              closeModalDelete={() => setDeleteModalOpen(false)}
              onConfirm={confirmUserDelete}
              userId={userEditAndDelete}
          />
      </CustomModal>

      {/* Adiciona registro/*/}
<<<<<<< HEAD
      <CustomModal isOpen={modalIsOpen} toggleModal={toggleModal} openModalEdit={openModalEdit}>
        <AdicionarUsuarioPage  onCloseModal={toggleModal} usuario={userEditAndDelete} action={action}/>
=======
      <CustomModal isOpen={modalIsOpen} toggleModal={toggleModal} openModalEdit={openModalEdit} >
        <AdicionarUsuarioPage  onCloseModal={toggleModal} usuario={userEditAndDelete} />
>>>>>>> 9d7c33545b38bc8a1bc5083fd5ba14a1d246ada6
      </CustomModal>
    </div>
  );
};

export default UsuariosPage;