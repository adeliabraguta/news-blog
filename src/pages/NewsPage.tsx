import NewsData from "../data/News.json";

const NewsPage = () => {
	const news = NewsData.news;

	return (
		<div className="h-full px-4 py-8">
			<h1 className="text-3xl mb-6 text-center">News</h1>
			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{news.map((item) => (
					<div
						key={item.title}
						className="cursor-pointer bg-white rounded shadow overflow-hidden hover:shadow-lg transition-shadow duration-300"
					>
						<img
							src={item.photo}
							alt={item.title}
							className="w-full h-36 object-cover"
							loading="lazy"
						/>
						<div className="p-4">
							<h2 className="text-l font-semibold mb-2">{item.title}</h2>
							<p className="text-gray-600 line-clamp-2 text-sm">{item.shortDesc}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default NewsPage;
