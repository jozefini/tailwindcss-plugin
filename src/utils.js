const round = (num) =>
	num
		.toFixed(7)
		.replace(/(\.[0-9]+?)0+$/, '$1')
		.replace(/\.0$/, '')

const inRem = (px) => `${round(px / 16)}rem`

const inEm = (px, base) => `${round(px / base)}em`

const convertSizes = (sizes) =>
	Object.entries(sizes).reduce((styles, [key, value]) => {
		styles[`.w-${key}`] = { width: value }
		styles[`.h-${key}`] = { height: value }
		return styles
	}, {})

const convertSquareSizes = (sizes) =>
	Object.entries(sizes).reduce((styles, [key, value]) => {
		styles[`.sq-${key}`] = {
			width: value,
			height: value
		}
		return styles
	}, {})

module.exports = {
	inRem,
	inEm,
	round,
	convertSizes,
	convertSquareSizes
}
