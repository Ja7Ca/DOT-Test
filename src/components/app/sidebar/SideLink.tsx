import styleSidebar from "./sidebar.module.css"
import { Link } from "react-router-dom";

type SideLinkProps = {
  name: string;
  to: string;
  icon: React.ReactNode;
  sidebarActive: boolean;
}

const SideLink: React.FC<SideLinkProps> = ({name, to, icon, sidebarActive}) => {
    return (
        <Link to={to} className={`${styleSidebar["side-link"]}`}>
            {icon}
            {sidebarActive && <p>{name}</p>}
        </Link>
    );
};

export default SideLink;
