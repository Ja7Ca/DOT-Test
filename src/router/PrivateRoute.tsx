import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    const user = localStorage.getItem("user");
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    return <>{children}</>;
};

export default PrivateRoute;
