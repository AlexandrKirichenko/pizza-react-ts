import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import axios from 'axios';

const FullPizza = () => {
	const [pizza, setPizza] = useState();
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		async function fetchPizza() {
			try {
				const { data } = await axios.get(`https://6299d16c6f8c03a9784a67c2.mockapi.io/items/${id}`);
				setPizza(data);
			} catch (error) {
				alert('Ошибка при получении пиццы!');
				navigate('/')
			}
		}

		fetchPizza();
	}, []);

	if(!pizza) {
		return 'Загрузка...'
	}
	
	return (
		<div className="container">
			<img className="pizza-block__image" src={pizza.imageUrl}/>
			<h2>{pizza.title}</h2>
			<h4>{pizza.price}</h4>
		</div>
	);
};

export default FullPizza;