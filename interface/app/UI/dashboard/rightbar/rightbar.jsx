import styles from './rightbar.module.css'
import GraficoPaginas from './graficos/paginas/paginas'
import GraficoProdutos from './graficos/produtos/produtos'

const RightBar = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.containerRight}>
                <div className={styles.containerTitulo}>
                    <h2 className={styles.titulo}>Páginas com mais acessos</h2>
                </div>
                <GraficoPaginas/>
            </div>
            <div className={styles.containerRight}>
                <div className={styles.containerTitulo}>
                    <h2 className={styles.titulo}>Produtos Mais Vendidos</h2>
                </div>
                <GraficoProdutos/>
            </div>
        </div>
     );
}
 
export default RightBar;