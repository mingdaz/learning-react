import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from './actions'
import ColorBlock from './ColorBlock'
import Slider from './Slider'

export class RGB extends Component {
	render() {

		const {r,g,b, updateColor} = this.props
		const update = color =>val => updateColor(color, val)
		return (
			<center>
				<ColorBlock r={r} g={g} b={b}/>
					<Slider value={r} slide={update('r')}/>
					<Slider value={g} slide={update('g')}/>
					<Slider value={b} slide={update('b')}/>
			</center> 
			)
	}
}

export default connect(
    state => state.rgb,
    { updateColor: actions.updateColor}
)(RGB)
