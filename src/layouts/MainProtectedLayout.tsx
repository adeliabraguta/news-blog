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
		<div className={"bg-neutral-200 min-h-screen flex flex-col"}>
			<div className="bg-white w-full max-w-6xl px-4 mx-auto">
				<HeaderComponent />
			</div>
			<main className="flex-1 bg-white w-full max-w-6xl px-4 mx-auto">
				<Outlet />
			</main>
			<div className={"bg-white w-full max-w-6xl px-4 mx-auto"}>
				<FooterComponent />
			</div>
		</div>
	);
};

export default MainProtectedLayout;
