import styles from './footer.module.css'

const FooterPage = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.logo}>Elegance</div>
            <div className={styles.text}>© Todos os direitos reservados</div>
        </div>
     );
}
 
export default FooterPage;