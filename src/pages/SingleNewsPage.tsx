import { useNavigate, useParams } from "react-router-dom";
import NewsData from "../data/News.json";

const SingleNewsPage = () => {
	const navigate = useNavigate();
	const { id } = useParams<{ id: string }>();
	const newsId = Number(id);

	const newsItem = NewsData.news.find((item) => item.id === newsId);

	const onNavigateBack = () => {
		navigate(-1);
	};

	return (
		<div className="max-w-4xl mx-auto p-4">
			<h1 className="p-3 text-3xl mb-4 text-center">{newsItem?.title}</h1>
			<img
				src={newsItem?.photo}
				alt={newsItem?.title}
				className="w-full h-80 object-cover mb-4"
				loading="eager"
			/>
			<p className="text-gray-700 text-justify">{newsItem?.longDesc}</p>

			<button
				className={"pt-5 cursor-pointer text-blue-700"}
				type={"button"}
				onClick={() => onNavigateBack()}
			>
				Back
			</button>
		</div>
	);
};

export default SingleNewsPage;
