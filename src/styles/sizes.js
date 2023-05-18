const { inRem, convertSizes } = require('../utils')

modile.exports = convertSizes({
	'4\\.5': inRem(18),
	'5\\.5': inRem(22),
	'6\\.5': inRem(26),
	'7\\.5': inRem(30),
	'8\\.5': inRem(34),
	'9\\.5': inRem(38),
	13: inRem(52),
	15: inRem(60),
	18: inRem(72)
})
