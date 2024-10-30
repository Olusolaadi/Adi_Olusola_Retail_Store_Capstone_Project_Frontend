import Category from "../components/Category";

const categories = [
	{ href: "/Men's Clothing", title: "Men's Clothing", imageUrl: "/Men.jpg" },
	{ href: "/Women's Clothing", title: "Women's Clothing", imageUrl: "/Women.jpg" },
	{ href: "/Children's Clothing", title: "Children's Clothing", imageUrl: "/Children.jpg" },
];

const HomePage = () => {
	return (
		<div className='relative min-h-screen text-white overflow-hidden'>
			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<h1 className='text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4'>
					Explore Our Categories
				</h1>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
					{categories.map((category) => (
						<Category category={category} key={category.title} />
					))}
				</div>
			</div>
		</div>
	);
};

export default HomePage;