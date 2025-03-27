import { Outlet } from "react-router-dom";
import Sidebar from "../app/sidebar";
import Navbar from "../app/navbar";
import { useState } from "react";

const DashboardLayout = () => {
  const [sidebarStatus, setSidebarStatus] = useState(false);

    return (
        <section className="section-full d-flex">
            <Sidebar sidebarOpen={sidebarStatus} toggleSidebar={() => setSidebarStatus(!sidebarStatus)} />
            <div style={{ flexGrow: 1, position: "relative", zIndex: 1 }}>
                <Navbar toggleSidebar={() => setSidebarStatus(!sidebarStatus)}/>
                <Outlet />
            </div>
        </section>
    );
};

export default DashboardLayout;
