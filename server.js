const http = require('http')
const fs = require('fs')
const _ = require('lodash')

const server = http.createServer((req, res) => {
    //lodash
    const num = _.random(0, 20)
   const c = _.countBy(['one', 'two', 'three'], 'length');

    console.log(num)
    console.log(c)

    const greet = _.once(() => {
        console.log('Hello');

    })
    greet()
    greet()
    //set header content type
    res.setHeader('Content-Type', 'text/html')
    let path = '../views/'
    switch (req.url) {
        case '/':
            path += 'index.html'
            res.statusCode = 200
            break
        case '/about':
            path += 'about.html'
            res.statusCode = 200
            break
        case '/about-me':
            res.statusCode = 301
            res.setHeader('Location', '/about')
            res.end()
            break
        default:
            path += '404.html'
            res.statusCode = 404
            break
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            // res.write(data)
            // res.end()
            res.end(data)
        }
    })
    // res.write('Hello, <b> Honore </b>')
    // res.write('<header> <link rel="stylesheet" href="#"> </header>')
    // res.write('<p>Hello again, <b> Honore </b></p>')
    // res.end()
    //console.log('request made');
})
server.listen(3000, 'localhost', () => {
    console.log('Listening for server')
}) 