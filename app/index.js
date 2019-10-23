const express = require("express");
const bodyParser = require("body-parser");
const unitsMap = require('./unitsMap');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.set("port", process.env.PORT_EX || 4117);

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

app.get("/units/si", (req, res) => {

	const {
		units
	} = req.query;

	const isMultiplication = units.includes('*');
	const isDivision = units.includes('/');

	const [first, second] = units.split(isMultiplication ? '*' : '/');

	let siUnitOne;
	let siUnitTwo;

	for (const [k, v] of unitsMap.entries()) {

		const {
			name,
			symbol
		} = k;
		if (first === name || first === symbol) {
			siUnitOne = v
		}
		if (second === name || second === symbol) {
			siUnitTwo = v
		}
	}

	console.log('siUnitOne: ', siUnitOne);
	console.log('siUnitTwo: ', siUnitTwo);

	res.end()
	// res.json(readers);
});

//404 catch-all handler
app.use(function (req, res) {
	res.type("text/plain");
	res.status(404);
	res.send("404 - Not Found");
});

//500 error handler
// app.use(function (err, req, res, next) {
// 	res.status(500).render("500");
// });

const port = app.get("port");

app.listen(port, () => {
	console.log(
		`Express started on http://localhost:${port}; press Ctrl-C to terminate.`
	);
});