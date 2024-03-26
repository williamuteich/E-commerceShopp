import Card from "../UI/dashboard/card/card";
import style from '../UI/dashboard/dashboard.module.css'
import ResumoSemanal from "../UI/dashboard/resumoSemanal/resumoSemanal";
import RightBar from "../UI/dashboard/rightbar/rightbar";
import Transacao from "../UI/dashboard/transacao/transacao";

const DashboardPage = () => {
    return ( 
        <div className={style.wrapper}>
            <div className={style.main}>
                <div className={style.cards}>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                    <Transacao/>
                    <ResumoSemanal/>
                </div>
                <div className={style.side}>
                    <RightBar/>
                </div>
            </div>
    );
}
 
export default DashboardPage;