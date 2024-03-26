import style from './loading.module.css'

const Loading = () => {
    return ( 
        <div className={style.containerLoading}>
            <span className={style.loadingObjeto}></span>
            <span>Processando...</span>
        </div>
     );
}
 
export default Loading;