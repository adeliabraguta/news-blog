import { Link } from "react-router-dom";

export interface NewsProps {
	item: {
		id: number;
		title: string;
		photo: string;
		shortDesc: string;
		longDesc: string;
	};
}

const NewsComponent: React.FC<NewsProps> = ({ item }) => {
	return (
		<Link
			to={`news/${item.id}`}
			key={item.title}
			className="cursor-pointer bg-white rounded shadow overflow-hidden hover:shadow-lg transition-shadow duration-300"
		>
			<img src={item.photo} alt={item.title} className="w-full h-36 object-cover" loading="lazy" />
			<div className="p-4">
				<h2 className="text-l font-semibold mb-2">{item.title}</h2>
				<p className="text-gray-600 line-clamp-2 text-sm">{item.shortDesc}</p>
			</div>
		</Link>
	);
};

export default NewsComponent;
