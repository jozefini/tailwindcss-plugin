const direction = require('./styles/direction')
const display = require('./styles/display')
const flexbox = require('./styles/flexbox')
const sizes = require('./styles/sizes')
const position = require('./styles/position')
const misc = require('./styles/misc')

const logger = (styles) => {
	const separator = '-------------------------------------'
	const objNames = Object.keys(styles)
	const createdClasses = {}

	for (const objName of objNames) {
		const objClasses = styles[objName]
		const classes = Object.keys(objClasses)

		let created = 0
		for (const className of classes) {
			//console.log(`${objName}: ${className}`)
			created++
		}

		createdClasses[objName] = created
	}

	const createdObjects = Object.keys(createdClasses)
	const totalClasses = Object.values(createdClasses).reduce((a, b) => a + b, 0)
	const longestName = createdObjects.reduce((a, b) => (a.length > b.length ? a : b)).length

	console.log(separator)
	console.log('📦: TailwindCSS Utilities')
	console.log(separator)
	for (const createdObject of createdObjects) {
		const spaces = longestName - createdObject.length
		const number = createdClasses[createdObject]

		console.log(`${createdObject}${' '.repeat(spaces)} ➡️ ${number}`)
	}

	console.log(separator)
	console.log(`✅: ${totalClasses} utilities created`)
	console.log(separator)
	console.log('')
}

logger({
	display,
	direction,
	flexbox,
	sizes,
	position,
	misc
})
