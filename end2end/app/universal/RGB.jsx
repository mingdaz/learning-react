import React, {Component} from 'react'
import ColorBlock from './ColorBlock'
import Slider from './Slider'

export default class RGB extends Component {

	state = {
		r: 244,
		g: 158,
		b: 66
	}


	render() {

		const {r,g,b} = this.state
		const update = color =>val => this.setState({ [color]:val })
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