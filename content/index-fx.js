(function() {
  // 封装 get
  // 如果 callback 为 false，则为同步 ajax
  function get(url, callback) {
    var async = callback !== false

    var xhr = new XMLHttpRequest()
    xhr.open('get', url, async)
    xhr.send()

    if (async) {
      xhr.onload = function() {
        callback && callback(xhr.responseText)
      }
      return xhr
    } else {
      return xhr.responseText
    }
  }

  // 从 URL 中获取专辑 id 和歌曲 id
  var keys = document.location.href.match(/fx=([^&]+)/)[1].split(',')
  var albumid = keys[0]
  var songid = keys[1]
  // 专辑页面源码
  var html = get('http://music.douban.com/subject/' + albumid + '/', false)

  var reg = new RegExp('id="' + songid + '"\\s+data\\-ssid="(.+?)"')
  var matches = html.match(reg)
  if (!matches) {
    return
  }
  // 对应歌曲 ssid
  var ssid = matches[1]

  window.location = 'http://douban.fm/?start=' + songid + 'g' + ssid + 'g'

})()
