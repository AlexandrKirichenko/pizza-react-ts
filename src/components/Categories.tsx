import React from 'react';

const Categories = ({ categoryValue, onChangeCategory }) => {
	const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

	return (
		<div className="categories">
			<ul>
				{categories.map((item, i) => (
					<li
						key={i}
						onClick={() => onChangeCategory(i)}
						className={categoryValue === i ? 'active' : ''}>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Categories;
