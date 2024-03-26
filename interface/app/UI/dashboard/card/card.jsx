import { MdSupervisedUserCircle } from 'react-icons/md';
import styles from './card.module.css'

const Card = () => {
    return ( 
        <div className={styles.container}>
            <MdSupervisedUserCircle size={24}/>
            <div className={styles.text}>
                <span className={styles.titulo}>Usuários</span>
                <span className={styles.quantidadeUser}>10.2023</span>
                <span className={styles.descricao}>
                    <span className={styles.positivo}>-10%</span> a mais que na semana passada
                </span>
            </div>
        </div>
     );
}
 
export default Card;