(function() {
  var songs = [].slice.call(document.querySelectorAll('.song-items li'))

  songs.forEach(function (song) {
    var playButton = _.node('<div class="col fx-play-button"><a target="_blank"></a></div>')

    var play = playButton.children[0]
    play.href = 'http://douban.fm/?start=' + song.id + 'g' + song.getAttribute('data-ssid') + 'g'

    song.insertBefore(playButton, song.querySelector('.dl-btn'))

  })
  
})()
