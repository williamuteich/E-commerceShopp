"use client"

import styles from '../../../UI/dashboard/marca/addMarca/addMarca.module.css';
import { FaCheck } from "react-icons/fa";

const AdicionarMarcaPage = ({onSubmit, onCloseModal}) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formDataObject = Object.fromEntries(formData.entries());
        onSubmit(formDataObject);
    };

    return ( 
        <div className={styles.container} id="root">
            <h1 className={styles.titulo}>Adicionar Marca</h1>
            <form action='' onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputWrapper}>
                    <input type="text" name='Nome' placeholder='' required />
                    <label>Nome</label>
                </div>
                <div className={`${styles.inputWrapper} ${styles.textareaWrapper}`}>
                    <textarea name='Descrição' id='desc' rows="8" placeholder=''></textarea>
                    <label>Desc. Produto</label>
                </div>
                <div className={styles.contentButton}>
                    <div className={styles.divButtons}>
                        <span>X</span>
                        <button onClick={onCloseModal}>Cancelar</button>
                    </div>
                    <div className={styles.divButtons}>
                        <FaCheck size={21}/>
                        <button type="submit" >Salvar</button>
                    </div>
                </div>    
            </form>
        </div>
    );
}
 
export default AdicionarMarcaPage;
