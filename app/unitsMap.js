const unitsMap = new Map();

unitsMap.set({
	name: 'minute',
	symbol: "min",
}, {
	type: "time",
	siUnit: 's',
	conversionFactor: "60"
})

unitsMap.set({
	name: 'hour',
	symbol: "h",
}, {
	type: "time",
	siUnit: 's',
	conversionFactor: "3600"
})

unitsMap.set({
	name: 'day',
	symbol: "d",
}, {
	type: "time",
	siUnit: 's',
	conversionFactor: "86400"
})

unitsMap.set({
	name: 'degree',
	symbol: "°",
}, {
	type: "plane angle",
	siUnit: 'rad',
	conversionFactor: "(π/180)"
})

unitsMap.set({
	name: 'angle',
	symbol: "'",
}, {
	type: "plane angle",
	siUnit: 'rad',
	conversionFactor: "(π/10800)"
})

unitsMap.set({
	name: 'second',
	symbol: '"',
}, {
	type: "plane angle",
	siUnit: 'rad',
	conversionFactor: "(π/648000)"
})

unitsMap.set({
	name: 'hectare',
	symbol: 'ha',
}, {
	type: "area",
	siUnit: 'm^2',
	conversionFactor: "10000"
})

unitsMap.set({
	name: 'litre',
	symbol: 'L',
}, {
	type: "volume",
	siUnit: 'm^3',
	conversionFactor: "0.001"
})

unitsMap.set({
	name: 'tonne',
	symbol: 't',
}, {
	type: "mass",
	siUnit: 'kg',
	conversionFactor: "10^3"
})

module.exports = unitsMap;