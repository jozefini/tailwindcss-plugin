const round = (num) =>
	num
		.toFixed(7)
		.replace(/(\.[0-9]+?)0+$/, '$1')
		.replace(/\.0$/, '')

const inRem = (px) => `${round(px / 16)}rem`

const inEm = (px, base) => `${round(px / base)}em`

const convertSizes = (sizes, value) =>
	Object.entries(sizes).reduce((styles, [key, value]) => {
		styles[`.w-${key}`] = { width: value }
		styles[`.h-${key}`] = { height: value }
		return styles
	}, {})

module.exports = {
	inRem,
	inEm,
	round,
	convertSizes
}
