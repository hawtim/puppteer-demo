var request = require('request')
var fs = require('fs')

// http://www.jianshu.com/p/a156729ce499 nodejs 之 request 模块 17000 的 star

/*
* url 网络文件地址
* filename 文件名
* callback 回调函数
*/
function downloadFile(uri, filename, callback) {
  var stream = fs.createWriteStream(filename)
  // TODO 这里应该是可以添加请求参数或者 cookies
  let totalLength = 0
  request(uri)
    .on("response", response => {
      console.log("response headers is: ", response.headers)
    })
    .on("data", chunk => {
      totalLength += chunk.length
      console.log("recevied data size: " + totalLength + "KB")
    })
    .on("close", callback)
    .pipe(stream)
}

var fileUrl =
  'http://www.runoob.com/wp-content/uploads/2015/09/event_loop.jpg'
var filename = './test.jpg'

downloadFile(fileUrl, filename, function() {
  console.log(filename + '下载完毕')
})
