import React, { useState, useRef, useCallback } from 'react';

import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';

import searchSvg from '../../assets/img/search.svg';
import closeSvg from '../../assets/img/close.svg';
import { setSearchValue } from '../../redux/slices/filterSlice';

import styles from './Search.module.scss';

const  Search = () => {
	const dispatch = useDispatch();
	const [value, setValue] = useState('');
	const inputRef = useRef();

	const updateSearchValue = useCallback(
		debounce((str) => {
			dispatch(setSearchValue(str));
		}, 350),
		[],
	);

	const onChangeInput = (e) => {
		setValue(e.target.value);
		updateSearchValue(e.target.value);
	};

	const onClickClear = () => {
		dispatch(setSearchValue(''))
		setValue('');
		inputRef.current.focus();
	};

	return (
		<div className={styles.root}>
			<img className={styles.icon} src={searchSvg} alt="search" />
			<input
				ref={inputRef}
				value={value}
				onChange={onChangeInput}
				className={styles.input}
				type="text"
				placeholder="Поиск пиццы..."
			/>
			{value && <img onClick={onClickClear} className={styles.clear} src={closeSvg} alt="close" />}
		</div>
	);
};

export default Search;
