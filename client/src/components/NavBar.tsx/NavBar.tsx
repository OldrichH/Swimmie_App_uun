import { IconButton } from "@mui/material";
import { useAuth } from "../../hooks/useAuth";
import LogoutIcon from "@mui/icons-material/Logout";

const NavBar = () => {
    const { logout, userInfo } = useAuth();
    return (
        <div style={{ display: "flex", gap: "1rem" }}>
            <h4>{userInfo().email}</h4>
            <IconButton aria-label="logout">
                <LogoutIcon onClick={logout} />
            </IconButton>
        </div>
    );
};

export default NavBar;
