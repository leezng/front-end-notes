## http

```js
var http = require('http')
http.creatServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.write('hello, node')
  res.end()
}).listen(3000)
```

`process.env.PORT`?

> URL高级处理, 下方代码片段来自[http://javascript.ruanyifeng.com/nodejs/http.html](http://javascript.ruanyifeng.com/nodejs/http.html)

```js
var http = require('http')

http.createServer(function(req, res) {

  // 主页
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" })
    res.end("Welcome to the homepage!")
  }

  // About页面
  else if (req.url == "/about") {
    res.writeHead(200, { "Content-Type": "text/html" })
    res.end("Welcome to the about page!")
  }

  // 404错误
  else {
    res.writeHead(404, { "Content-Type": "text/plain" })
    res.end("404 error! File not found.")
  }

}).listen(8080, "localhost")
```
