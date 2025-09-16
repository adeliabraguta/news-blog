import "./App.css";
import { lazy } from "react";
import { Route, Routes } from "react-router";

const HelloWorld = lazy(() => import("./HelloWorld.tsx"));

function App() {
	return (
		<Routes>
			<Route path={"/"} element={<HelloWorld />} />
		</Routes>
	);
}

export default App;
