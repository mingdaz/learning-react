//@flow

import React from 'react'
import PropTypes from 'prop-types'

type Slide = ( val: number) => void

export default function Slider({value, slide}: { value: number, slide: Slide}){
	const position = value * 100 /255
	const update = e => slide(Math.ceil(e.target.value/100*255))
	
	return (
		<div>
			<input type="range" value={position} onChange={update}/>
		</div>
	)
}

