import { Outlet } from "react-router-dom";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";

const MainLayout = () => {
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

export default MainLayout;
