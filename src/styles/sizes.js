const { inRem, convertSizes, sizes, convertSquareSizes } = require('../utils')

const extraWidthHeightSizes = convertSizes({
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
const maxWidthSizes = {
	'.max-w-8xl': {
		'max-width': inRem(1440)
	},
	'.max-w-9xl': {
		'max-width': inRem(1600)
	}
}
const squareSizes = convertSquareSizes({
	0: '0px',
	px: '1px',
	'0\\.5': inRem(2),
	1: inRem(4),
	'1\\.5': inRem(6),
	2: inRem(8),
	'2\\.5': inRem(10),
	3: inRem(12),
	'3\\.5': inRem(14),
	4: inRem(16),
	'4\\.5': inRem(18),
	5: inRem(20),
	'5\\.5': inRem(22),
	6: inRem(24),
	'6\\.5': inRem(26),
	7: inRem(28),
	'7\\.5': inRem(30),
	8: inRem(32),
	'8\\.5': inRem(34),
	9: inRem(36),
	'9\\.5': inRem(38),
	10: inRem(40),
	11: inRem(44),
	12: inRem(48),
	13: inRem(52),
	14: inRem(56),
	15: inRem(60),
	16: inRem(64),
	18: inRem(72),
	20: inRem(80),
	24: inRem(96),
	28: inRem(112),
	32: inRem(128),
	36: inRem(144),
	40: inRem(160),
	44: inRem(176),
	48: inRem(192),
	52: inRem(208),
	56: inRem(224),
	60: inRem(240),
	64: inRem(256),
	72: inRem(288),
	80: inRem(320),
	96: inRem(384)
})

module.exports = {
	...squareSizes,
	...extraWidthHeightSizes,
	...maxWidthSizes
}
