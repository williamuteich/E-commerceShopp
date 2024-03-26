import Navbar from "../UI/dashboard/navbar/navbar";
import Sidebar from "../UI/dashboard/sidebar/sidebar";
import styles from "../UI/dashboard/dashboard.module.css"
import Footer from '../UI/dashboard/footer/footer'

const Layout = ({ children }) => {
    return ( 
        <div className={styles.container}>
            <div className={styles.menu}>
                <Sidebar/>
            </div>
            <div className={styles.content}>
                <Navbar/>
                {children}
                <Footer/>
            </div>
        </div>
     );
}
 
export default Layout;