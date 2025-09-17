import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const NewsPage = lazy(() => import("../pages/NewsPage.tsx"));
const SingleNewsPage = lazy(() => import("../pages/SingleNewsPage.tsx"));
const MainProtectedLayout = lazy(() => import("../layouts/MainProtectedLayout.tsx"));
const AuthPage = lazy(() => import("../pages/AuthPage.tsx"));

export const routes: RouteObject[] = [
	{
		path: "/",
		element: <MainProtectedLayout />,
		children: [
			{
				index: true,
				element: <NewsPage />,
			},
			{
				path: "/news/:id",
				element: <SingleNewsPage />,
			},
		],
	},
	{
		path: "/auth",
		element: <AuthPage />,
	},
];
