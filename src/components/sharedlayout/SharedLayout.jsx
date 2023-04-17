import { Outlet } from "react-router-dom";
import Navbar from "../navbar/NavBar";

function SharedLayout() {
    return (
        <div>
            <Navbar />
            <Outlet />

        </div>
    );
}

export default SharedLayout;