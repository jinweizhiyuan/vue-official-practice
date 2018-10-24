const http = require('http')
const fs = require('fs')
const httpPort = 80

http.createServer((req, res) => {
  let url = req.url
  if (/(\.\w+)$/gi.test(url)) {
    url = '../' + url
  } else {
    url = 'pushState2.html'
  }

  fs.createReadStream(url).pipe(res)
}).listen(httpPort, () => {
  console.log('Server listening on: http://localhost:%s', httpPort)
})