const http = require('http')
const fs = require('fs')
const httpPort = 80

http.createServer((req, res) => {
	let url = req.url
	if (/(\.\w+)$/gi.test(url)) {
		url = '../' + url
	} else {
		url = 'html5-history-mode.html'
	}

	fs.createReadStream(url).pipe(res)

	// fs.readFile(url, 'utf-8', (err, content) => {
	// 	if (err) {
	// 		consle.log('We cannot open "html5-history-mode.htlm" file')
	// 	}

	// 	res.writeHead(200, {
	// 		'Content-Type': 'text/html; charset=utf-8'
	// 	})

	// 	res.end(content)
	// })
}).listen(httpPort, () => {
	console.log('Server listening on: http://localhost:%s', httpPort)
})