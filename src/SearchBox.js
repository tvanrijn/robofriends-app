import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchChange }) => {
	return (
		<div className='pa2'>
			<input 
				className='pa3 ba bw1 b--navy br-pill bg-washed-blue avenir b'
				type='search' 
				placeholder='Search robots'
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;