import React from 'react';

const Card = ({name, email, id}) => {
	return (
		<div className='tc bg-washed-red dib br4 pa3 ma2 grow bw2 shadow-5 avenir'>
			<img src={`https://robohash.org/${id}?200x200`} alt='robot'/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;