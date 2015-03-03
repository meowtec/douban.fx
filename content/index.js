// 获取当前播放链接
function getCurrentLink () {
  var url = JSON.parse(localStorage.bubbler_song_info).url
  // 去掉 cid
  return url.replace(/&?cid=[^&]*/, '')
}

var html = (function () {/*
 <span class="fx-link-copy">
   <a href="#" >复制链接</a>
   <input>
   <span class="fx-success fx-hide"></span>
 </span>
   */}).toString().replace(/^function\s*\(\)\s*\{\s*\/\*\s*/, '').replace(/\s*\*\/\s*\}$/, '')

var section = document.querySelector('#fm-section2')
var node = _.node(html)

section.insertBefore(node, section.children[0])

var link = node.querySelector('a')
var input = node.querySelector('input')
var successIcon = node.querySelector('span')

link.addEventListener('click', function (e) {
  e.preventDefault()
  var url = getCurrentLink()
  input.value = url
  input.select()
  document.execCommand('copy')
  successIcon.classList.remove('fx-hide')

  setTimeout(function () {
    successIcon.classList.add('fx-hide')
  }, 1500)
})
