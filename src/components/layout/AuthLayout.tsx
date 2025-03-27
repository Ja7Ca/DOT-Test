import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <section className="section-full d-flex justify-content-center align-items-center bg-primary">
            <div className="container">
                <Outlet />
            </div>
        </section>
    );
};

export default AuthLayout;
