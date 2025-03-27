import toast from "react-hot-toast";
import { LogoutService } from "../../../service/LoginService";
import styleNavbar from "./navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

type NavbarProps = {
    toggleSidebar: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        try {
            const result = LogoutService();
            if (result.message) {
                toast.success(result.message);
                navigate("/auth/login");
            } else {
                toast.error("Logout Gagal");
            }
        } catch (error) {
            toast.error("Something Went Wrong");
            console.log(error);
        }
    };

    return (
        <nav className={styleNavbar.navbar}>
            <div className="d-flex justify-content-between align-items-center">
                <GiHamburgerMenu
                    style={{ cursor: "pointer" }}
                    onClick={toggleSidebar}
                />
                <p
                    style={{ cursor: "pointer", color: "red" }}
                    onClick={handleLogout}>
                    Log Out
                </p>
            </div>
        </nav>
    );
};

export default Navbar;
