//打开默认浏览器
function openDefaultBrowser(url) {
    var cp = require('child_process');
        cp.exec('start ' + url);
  }
  openDefaultBrowser('https://www.baidu.com')