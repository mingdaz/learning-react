import React from 'react'

export default function ColorBlock({r,g,b}){
	return (
		<div className="color-block" style={{ backgroundColor: `rgb(${r},${g},${b})`}}/>
		)
}