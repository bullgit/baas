const http = require('http')
const url = require('url')
const config = require('./config.js')

const writeHeaders = (res) => {
	res.setHeader('Content-Type', 'application/json')
	res.setHeader('X-Made-by', 'bullgit')
	res.writeHead(200, {'Content-Type': 'application/json'})

	return res
}

/**
 * randomBool
 * Retuns a random boolean based on some good math. Trust me!
 */
const randomBool = (min, max) => {
	avg = max / 2
	return !((Math.floor(Math.random() * (max - min + 1)) + min) > avg)
}

/*
 * The HTTP Server. It returns the default home JSON for
 * every request expect the following
 * /true			returns true
 * /false 		returns false
 * /random 		returns a random boolean
 */
const server = http.createServer((req, res) => {
	let p = url.parse(req.url)
	let r = writeHeaders(res)
	let data = null
	// Remove slashes
	let clean_req_path = p.path.replace(/\//g, "")

	// Switch through the request path
	switch(clean_req_path) {
	case "true":
		data = {"boolean": true}
		break

	case "false":
		data = {"boolean": false}
		break

	case "random":
		data = {"boolean": randomBool(42, 420)  }
		break

	default:
		data = {
			"baas": "boolean as a service",
			"endpoints": {
				"/true": "returns true",
				"/false": "returns false",
				"/random": "returns random boolean"
			},
			"boolean": "none",
		}
	}
	// Sent the JSON
	r.end(JSON.stringify(data))
});

server.listen(config.port);
