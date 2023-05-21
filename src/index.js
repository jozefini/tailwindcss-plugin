// TailwindCss.
const plugin = require('tailwindcss/plugin')

// Utilities.
const direction = require('./styles/direction')
const display = require('./styles/display')
const flexbox = require('./styles/flexbox')
const sizes = require('./styles/sizes')
const position = require('./styles/position')
const misc = require('./styles/misc')

// Dynamic utilities.
const dynamic = {
	lh: (value) => ({
		lineHeight: value
	}),
	sq: (value) => ({
		width: value,
		height: value
	})
}

// Export.
module.exports = plugin(({ addUtilities, matchUtilities }) => {
	addUtilities({
		...direction,
		...display,
		...flexbox,
		...sizes,
		...position,
		...misc
	})
	matchUtilities(dynamic)
})
