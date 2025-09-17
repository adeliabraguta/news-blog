import { Navigate, Outlet } from "react-router-dom";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import { useGlobalStore } from "../store/globalStore.ts";

const MainProtectedLayout = () => {
	const { user } = useGlobalStore();

	if (!user) {
		return <Navigate to="/auth" />;
	}

	return (
		<>
			<HeaderComponent />
			<main>
				<Outlet />
			</main>
			<FooterComponent />
		</>
	);
};

export default MainProtectedLayout;
