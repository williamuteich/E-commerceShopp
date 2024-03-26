import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { InputText } from 'primereact/inputtext';
import styles from './admin.module.css'; // Importando estilos do arquivo CSS

const Login = () => {
    return (
        <div className={`${styles.surfaceGround} px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center`}>
            <div className={`${styles.surfaceCard} p-4 shadow-2 border-round w-full lg:w-6`}>
                <div className="text-center mb-5">
                    <img src="images/blocks/logos/hyper.svg" alt="hyper" height="50" className="mb-3" />
                    <div className={`${styles.text900} ${styles.text3xl} ${styles.fontMedium} mb-3`}>Welcome Back</div>
                    <span className={`${styles.text600} ${styles.fontMedium} ${styles.lineHeight3}`}>Don't have an account?</span>
                    <button className={`${styles.pLink} ${styles.fontMedium} ${styles.noUnderline} ml-2 text-blue-500 cursor-pointer`}>Create today!</button>
                </div>

                <div>
                    <label htmlFor="email1" className={`${styles.block} ${styles.text900} ${styles.fontMedium} mb-2`}>Email</label>
                    <InputText id="email1" type="text" className={`w-full mb-3`} />

                    <label htmlFor="password1" className={`${styles.block} ${styles.text900} ${styles.fontMedium} mb-2`}>Password</label>
                    <InputText id="password1" type="password" className={`w-full mb-3`} />

                    <div className={`${styles.flex} ${styles.alignItemsCenter} ${styles.justifyContentBetween} mb-6`}>
                        <div className={`${styles.flex} ${styles.alignItemsCenter}`}>
                            <Checkbox inputId="rememberme1" binary className="mr-2" />
                            <label htmlFor="rememberme1">Remember me</label>
                        </div>
                        <button className={`${styles.pLink} ${styles.fontMedium} ${styles.noUnderline} ml-2 text-blue-500 text-right cursor-pointer`}>Forgot password?</button>
                    </div>

                    <Button label="Sign In" icon="pi pi-user" className="w-full" />
                </div>
            </div>
        </div>
    );
}

export default Login;
