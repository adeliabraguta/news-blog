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
		<div className={"bg-neutral-200 h-dvh"}>
			<div className="h-dvh bg-amber-50 w-full max-w-6xl px-4 mx-auto">
				<HeaderComponent />
				<main className="py-8">
					<Outlet />
				</main>
				<FooterComponent />
			</div>
		</div>
	);
};

export default MainProtectedLayout;
