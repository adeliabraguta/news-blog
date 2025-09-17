import {useGlobalStore} from "../store/globalStore.ts";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

const HeaderComponent = () => {
    const navigate = useNavigate()
    const {user, setUser} = useGlobalStore()

    const onLogout = () => {
        setUser('')
        navigate("/auth")
    }

    return (
        <div className={"p-3 border-b border-sky-500 flex justify-between items-center gap-5"}>
            <h2 className={"text-xl text-sky-900 italic"}>Hews Today</h2>
            <div className={"flex justify-between items-center gap-4"}>
                <p>Welcome, <span className={"text-sky-700"}>{user}</span>!</p>
                <Button onClick={() => onLogout()} type={"button"} variant="outlined">Log Out</Button>
            </div>
        </div>
    );
};

export default HeaderComponent;
