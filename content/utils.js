(function() {
  var _ = {
    node: function(str) {
      var div = this.__temp_elem__ || (this.__temp_elem__ = document.createElement('div'))
      div.innerHTML = str
      return div.children[0]
    }
  }

  window._ = _  
})()
