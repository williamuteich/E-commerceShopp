import styles from "../sidebar/sidebar.module.css"
import { 
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdPlace,
    MdBusiness,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout 
} from 'react-icons/md'; // Importe o ícone corretamente
import MenuLateral from "./menuLateral/menuLateral";

const menuItem = [
    {
        title: "Home",
        list: 
        [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard/> 
            },
           
        ],
    },
    {
        title: "Cadastros",
        list: [
            {
                title: "Usuários",
                path: "/dashboard/usuarios",
                icon: <MdSupervisedUserCircle/>
            },
            {
                title: "Produtos",
                path: "/dashboard/produtos",
                icon: <MdShoppingBag/>
            },
            {
                title: "Marcas",
                path: "/dashboard/marcas",
                icon: <MdSupervisedUserCircle/>
            },
            {
                title: "Categoria",
                path: "/dashboard/categorias",
                icon: <MdSupervisedUserCircle/>
            },
        ],
    },
    {
        title: "Analytics",
        list: [
            {
                title: "Faturamento",
                path: "/dashboard/faturamento",
                icon: <MdWork/>
            },
            {
                title: "Desempenho",
                path: "/dashboard/desempenho",
                icon: <MdAnalytics/>
            },
            {
                title: "Transações",
                path: "/dashboard/transações",
                icon: <MdAttachMoney/>
            },
        ],
    },
    {
        title: "Usuário",
        list: [
            {
                title: "Configurações",
                path: "/dashboard/configuracoes",
                icon: <MdOutlineSettings/>
            },
            {
                title: "Ajuda",
                path: "/dashboard/ajuda",
                icon: <MdHelpCenter/>
            },
        ],
    },
];

const Sidebar = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.usuario}>
                <img className={styles.imagemUsuario} src="/noavatar.png" alt="Imagem do usuário" title="teste"/>
                <div className={styles.detalheUsuario}>
                    <span className={styles.nomeUsuario}>William Uteich</span>
                    <span className={styles.nomeGerenciamento}>Aministrador</span>
                </div>
            </div>
            <ul className={styles.lista}>
            {menuItem.map(item => (
                <li key={item.title}>
                    <span className={styles.itemMenu}>{item.title}</span>
                    <div className={styles.listaLink}>
                        {item.list.map((item) => (
                            <MenuLateral key={item.title} item={item} />
                        ))}
                    </div>
                </li>
            ))}
            </ul>
            <button className={styles.logout}>
                <MdLogout size={20}/>
                Logout
            </button>
        </div>
     );
}
 
export default Sidebar;
