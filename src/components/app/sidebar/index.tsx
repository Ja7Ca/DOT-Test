import styleSidebar from "./sidebar.module.css";
import { BiBox, BiCart, BiTask } from "react-icons/bi";
import SideLink from "./SideLink";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

type SidebarProps = {
    sidebarOpen: boolean;
    toggleSidebar: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, toggleSidebar }) => {
    return (
        <aside
            className={`${styleSidebar.sidebar} ${
                sidebarOpen && styleSidebar.active
            }`}>
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
                <h1 className={styleSidebar["nav-brand"]}>DOT</h1>
            </Link>
            <GiHamburgerMenu
                style={{ cursor: "pointer" }}
                className={styleSidebar.hamburger}
                onClick={toggleSidebar}
            />
            <div className={styleSidebar["side-menu"]}>
                <SideLink
                    name="Task"
                    to="task"
                    icon={<BiTask />}
                    sidebarActive={sidebarOpen}
                />
                <SideLink
                    name="Product"
                    to="product"
                    icon={<BiBox />}
                    sidebarActive={sidebarOpen}
                />
                <SideLink
                    name="Cart"
                    to="cart"
                    icon={<BiCart />}
                    sidebarActive={sidebarOpen}
                />
            </div>
        </aside>
    );
};

export default Sidebar;
