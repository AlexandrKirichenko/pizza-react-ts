import React from 'react';
import { Routes, Route } from 'react-router-dom';

import StaticHeader from './layouts/StaticHeader';
import Home from './pages/Home';
import FullPizza from './pages/FullPizza';
import NotFoundBlock from './pages/NotFoundBlock';
import Cart from './pages/Cart';

import './scss/app.scss';

function App() {
	return (
		<Routes>
			<Route path="/" element={<StaticHeader />}>
				<Route path="/" element={<Home />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/pizza/:id" element={<FullPizza />} />
				<Route path="*" element={<NotFoundBlock />} />
			</Route>
		</Routes>
	);
}

export default App;
