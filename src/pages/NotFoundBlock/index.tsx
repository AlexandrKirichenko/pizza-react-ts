import React from 'react';

import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
	return (
		<div className={styles.wrap}>
			<span>😕</span>
			<br />
			<h1>Страница не найдена :(</h1>
			<p>К сожалению данная страница отсутвует в нашем магазине</p>
		</div>
	);
};

export default NotFoundBlock;
