var _ = {
  node: function(str) {
    var div = this.__temp_elem__ || (this.__temp_elem__ = document.createElement('div'))
    div.innerHTML = str
    return div.children[0]
  }
}

Function.prototype.getInner = function () {
  return this.toString().replace(/^function\s*\(\)\s*\{\s*\/\*\s*/, '').replace(/\s*\*\/\s*\}$/, '')
}
