import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import LoadingSpinner from "./components/UI/LoadingSpinner.tsx";
import { routes } from "./routes/routes.tsx";

function App() {
	const routing = useRoutes(routes);
	return <Suspense fallback={<LoadingSpinner />}>{routing}</Suspense>;
}

export default App;
