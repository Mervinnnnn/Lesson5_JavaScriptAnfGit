const http = require('http')
const fs = require('fs')


const server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        fs.readFile('index.html', (err, data) => {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            })
            res.write(data)
            res.end()
        })
        return
    } else if (req.url == "/contact" && req.method === "GET") {
        fs.readFile('contact.html', (err, data) => {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            })
            res.write(data)
            res.end()
        })
        return
    } else if (req.url === "/home" && req.method === "GET") {
        fs.readFile('test.html', (err, data) => {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            })
            res.write(data)
            res.end()
        })
        return
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html'
        })

        res.write(`
            <h1>404 Not Found</h1>
            <p>Pages Does not exist</p>
            `)
    }
    res.end()
})

server.listen(5501, () => {
    console.log("Server running on http://localhost:5501")
})