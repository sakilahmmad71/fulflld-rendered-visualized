import React, { ChangeEvent, FunctionComponent } from 'react';

interface SearchPropsTypes {
	searchText: string;
	setSearchText: (value: string) => void;
}

const Search: FunctionComponent<SearchPropsTypes> = ({ searchText = '', setSearchText }) => {
	const handleSearchItems = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchText(event.target.value?.toLowerCase());
	};

	return (
		<div className='search'>
			<input
				placeholder='Search for'
				value={searchText}
				onChange={handleSearchItems}
				className='input'
				type='text'
			/>
		</div>
	);
};

export default Search;
