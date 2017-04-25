## 在 a 标签上直接设置 href, download

```html
<a href="./README.md" download>download</a>
```

这种方法适合静态文件的下载，此外设置 `download="file.json"` 可以设置文件名

## 动态生成文件

```js
var downloadFile = (aLink, fileName, content) => {
    aLink.download = fileName;
    aLink.href = "data:text/plain," + content;
}
```

换句话说我们把图像档案的内容内置在 HTML 档案中，节省了一个 HTTP 请求。
