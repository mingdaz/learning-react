export default function classNames(conditionals, ...knownClasses) {
	return Object.keys(conditionals).reduce((allClasses, name) => 
		conditionals[name] ? allClasses.contact(name): allClasses,
		knownClasses
	).join(' ')
}