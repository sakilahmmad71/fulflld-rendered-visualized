import React, { ChangeEvent, useEffect, useState } from 'react';

import './App.css';
import Header from './components/Header';
import { VirtualizedList } from './components/List';
import Search from './components/Search';
import useDebounce from './hooks/useDebounce';
import { useDictionary } from './hooks/useDictionary';

function App() {
	const [items, setItems] = useState([]);
	const [search, setSearch] = useState('');

	const debouncedValue = useDebounce<string>(search, 300);
	const dictionary = useDictionary();

	useEffect(() => {
		if (dictionary) {
			setItems(dictionary);
		}

		return () => setItems([]);
	}, [dictionary]);

	useEffect(() => {
		/**
		 * Can be search in different ways like endsWith, contains
		 */

		if (debouncedValue) {
			const foundItems = items.filter((item) => item.startsWith(debouncedValue));
			setItems(foundItems);
		} else {
			setItems(dictionary);
		}
	}, [debouncedValue]);

	return (
		<div className='app'>
			<Header />
			<Search searchText={search} setSearchText={setSearch} />

			<div className='content'>
				<VirtualizedList items={items} />
			</div>
		</div>
	);
}

export default App;
