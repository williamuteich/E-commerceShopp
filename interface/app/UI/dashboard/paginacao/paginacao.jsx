import styles from './paginacao.module.css'

const paginacao = ({currentPage, totalPages, onPageChange}) => {
    const handlePreviousPage = () =>{
        if(currentPage > 1){
            onPageChange(currentPage -1);
        }
    }
    const handleNextPage = () => {
        if(currentPage < totalPages) {
            onPageChange(currentPage +1)
        }
    }
    return ( 
        <div className={styles.container}>
            <button className={`${styles.button} ${styles.voltar}}`} onClick={handlePreviousPage}>Voltar</button>
            <button className={`${styles.button} ${styles.avançar}}`} onClick={handleNextPage}>Próximo</button>
        </div>
     );
}


export default paginacao;