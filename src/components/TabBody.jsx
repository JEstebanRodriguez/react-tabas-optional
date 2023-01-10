import React from 'react'

export const TabBody = ({ id, body, state }) => {
	return (
		<div className={`tab-body ${state === id ? 'active' : ''}`}>
			<h3>{body}</h3>
		</div>
	)
}
