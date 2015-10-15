(function() {
  var recordViewer = document.querySelector('#record_viewer')

  // 定时尝试任务
  var interval = function () {
    var header = recordViewer.querySelector('.header')
    // 如果已经优化，则不操作。
    if (header.getAttribute('douban-fxed')) {
      return
    }
    // 置状态为已优化
    header.setAttribute('douban-fxed', true)

    var wrapers = [].slice.call(recordViewer.querySelectorAll('.info_wrapper'))

    wrapers.forEach(function (item) {
      // 歌曲 id
      var song = item.querySelector('.action').getAttribute('sid')
      var albumLink = item.querySelector('.song_info a').href
      var subjectMatches = albumLink.match(/subject\/(.+?)\//)

      if (subjectMatches) {
        // 专辑 id
        var subject = subjectMatches[1]
        // 添加链接
        var songTitle = item.querySelector('.song_title')
        var songName = songTitle.innerHTML
        songTitle.innerHTML = `<a href="http://douban.fm/?fx=${subject},${song}" target="_blank">${songName}</a>`
      }
    })
  }

  setInterval(interval, 400)
})()
