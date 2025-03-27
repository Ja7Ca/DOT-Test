import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import PrivateRoute from "./PrivateRoute";
import AuthLayout from "../components/layout/AuthLayout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import DashboardLayout from "../components/layout/DashboardLayout";
import Home from "../pages/dashboard/Home";
import Task from "../pages/dashboard/Task";
import Product from "../pages/dashboard/Product";
import ProductDetail from "../pages/dashboard/ProductDetail";
import Cart from "../pages/dashboard/Cart";

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Navigate to="/auth/login"/>} />
                <Route
                    path="auth"
                    element={
                        <ProtectedRoute>
                            <AuthLayout />
                        </ProtectedRoute>
                    }>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register/>} />
                </Route>
                <Route
                    path="dashboard"
                    element={<PrivateRoute><DashboardLayout/></PrivateRoute>}>
                    <Route index element={<Home/> } />
                    <Route path="task" element={<Task/> } />
                    <Route path="product">
                        <Route index element={<Product/>} />
                        <Route path=":slug" element={<ProductDetail/> } />
                    </Route>
                    <Route path="cart" element={<Cart/> } />
                </Route>
                <Route path="login" element={<Navigate to="/auth/login" />} />
                <Route
                    path="register"
                    element={<Navigate to="/auth/register" />}
                />
                <Route path="*" element={"404 - Not Found"} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoute;
