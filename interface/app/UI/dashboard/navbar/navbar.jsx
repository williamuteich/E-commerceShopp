"use client"

import { usePathname } from "next/navigation";
import styles from "./navbar.module.css"
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from "react-icons/md";


const Navbar = () => {
    const pathname = usePathname();

    return ( 
        <div className={styles.container}>
            <div className={styles.titulo}>{pathname.split("/").pop()}</div>
            <div className={styles.menuNavbar}>
                <div className={styles.pesquisa}>
                    <MdSearch/>
                    <input className={styles.inputPesquisar} type="text" placeholder="Pesquisar" />
                </div>
                <div className={styles.icones}>
                    <MdOutlineChat size={20}/>
                    <MdNotifications size={20}/>
                    <MdPublic size={20}/>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;