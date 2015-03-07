var fabric = require('./')
var nets = require('nets')

nets({url: 'miserables.json', json: true}, function(err, resp, graph) {
  fabric(graph)
})
