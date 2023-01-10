import React from 'react'

export const TabHeader = ({ id, name, state, handleFunction }) => {
	return (
		<li className='tab-list__item'>
			<a
				href='#'
				className={`tab-list__link ${state === id ? 'active' : ''}`}
				onClick={() => handleFunction(id)}>
				{name}
			</a>
		</li>
	)
}
