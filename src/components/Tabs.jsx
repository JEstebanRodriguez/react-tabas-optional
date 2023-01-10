import React, { useState } from 'react'
import { tabs } from '../helpers/tabsList'
import { TabBody } from './TabBody'
import { TabHeader } from './TabHeader'

export const Tabs = () => {
	const [isActive, setIsActive] = useState(1)

	return (
		<div className='container'>
			<ul className='tab-list'>
				{tabs.map((t) => (
					<TabHeader
						key={t.id}
						{...t}
						state={isActive}
						handleFunction={setIsActive}
					/>
				))}
			</ul>
			{tabs.map((t) => (
				<TabBody {...t} state={isActive} key={t.id} />
			))}
		</div>
	)
}
