import { lazy } from "react";
import NewsData from "../data/News.json";

const NewsComponent = lazy(() => import("../components/NewsComponent.tsx"));

const NewsPage = () => {
	const news = NewsData.news;

	return (
		<div className="h-full px-4 py-8">
			<h1 className="text-3xl mb-6 text-center">News</h1>
			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{news.map((item) => (
					<NewsComponent item={item} key={item.title} />
				))}
			</div>
		</div>
	);
};

export default NewsPage;
