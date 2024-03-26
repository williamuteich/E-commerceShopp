import styles from './transacao.module.css'
import { FaUser } from 'react-icons/fa';

const Transacao = () => {
    return ( 
        <div className={styles.container}>
            <h2 className={styles.titulo}>Atividades Recentes</h2>
            <div className={styles.tabela}>
                <div className={styles.info}>
                    <span className={styles.usuarioNome}>Nome</span>
                    <div className={styles.content}>
                        <div className={styles.containerPadrao}>
                            <div className={styles.containerUsuario}>
                                <img src="/noavatar.png"/>
                                <span>William Uteich</span>
                            </div>
                            <div className={styles.containerUsuario}>
                                <img src="/noavatar.png"/>
                                <span>Ana Silva</span>
                            </div>
                            <div className={styles.containerUsuario}>
                                <img src="/noavatar.png"/> 
                                <span>José Santos</span>
                            </div>
                            <div className={styles.containerUsuario}>
                                <img src="/noavatar.png"/>
                                <span>Maria Oliveira</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.info}>
                    <span className={styles.usuarioStatus}>Status</span>
                    <div className={styles.content}>
                        <div className={`${styles.containerPadrao} ${styles.estiloSpan}`}>
                            <span className={styles.aprovado}>Aprovado</span>
                            <span className={styles.pendente}>Pendente</span>
                            <span className={styles.finalizado}>Finalizado</span>
                            <span className={styles.cancelado}>Cancelado</span>
                        </div>
                    </div>
                </div>
                <div className={styles.info}>
                    <span className={styles.usuarioData}>Data/Hora</span>
                    <div className={styles.content}>
                        <div className={styles.containerPadrao}>
                            <span>23/02/2024</span>
                            <span>25/09/2023</span>
                            <span>28/07/2023</span>
                            <span>06/04/2023</span>
                        </div>
                    </div>
                </div>
                <div className={styles.info}>
                    <span className={styles.usuarioTotal}>Preço</span>
                    <div className={styles.content}>
                        <div className={styles.containerPadrao}>
                            <span>R$160,50</span>
                            <span>R$99,99</span>
                            <span>R$321,21</span>
                            <span>R$119,99</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Transacao;