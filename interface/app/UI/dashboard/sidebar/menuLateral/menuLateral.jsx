"use client"

import Link from "next/link";
import { IoMdArrowDropdown } from "react-icons/io";
import styles from "../menuLateral/menuLateral.module.css";
import { usePathname } from "next/navigation";

const MenuLateral = ({ item }) => {

    const pathname = usePathname();
    return ( 
        <Link href={item.path} className={`${styles.container} ${pathname === item.path  && styles.active}`}>
            {item.icon}
            <span>{item.title}</span>
        </Link>
     );
}
 
export default MenuLateral;
