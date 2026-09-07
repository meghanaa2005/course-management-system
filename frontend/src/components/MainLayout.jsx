import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function MainLayout() {
    return (
        <div className="app-layout">

            <Navbar />

            <div className="main-layout">

                <Sidebar />

                <main className="page-content">
                    <Outlet />
                </main>

            </div>

        </div>
    );
}

export default MainLayout;