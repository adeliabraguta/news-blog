import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const NewsPage = lazy(() => import("../pages/NewsPage.tsx"));
const MainLayout = lazy(() => import("../layouts/MainLayout.tsx"));

export const routes: RouteObject[] = [
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <NewsPage />,
			},
		],
	},
];
