import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes/routes.tsx";

const LoadingSpinner = lazy(() => import("./components/UI/LoadingSpinner.tsx"));

function App() {
	const routing = useRoutes(routes);
	return <Suspense fallback={<LoadingSpinner />}>{routing}</Suspense>;
}

export default App;
