// TailwindCss.
const plugin = require('tailwindcss/plugin')

// Utilities.
const direction = require('./styles/direction')
const display = require('./styles/display')
const flexbox = require('./styles/flexbox')
const sizes = require('./styles/sizes')
const misc = require('./styles/misc')

// Export.
module.exports = plugin(({ addUtilities }) => {
	addUtilities({
		...direction,
		...display,
		...flexbox,
		...sizes,
		...misc
	})
})
