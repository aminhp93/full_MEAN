var messages = require('../controllers/messages.js')
var comments = require('../controllers/comments.js')

module.exports = function(app) {
    app.get('/messages', messages.index);
    app.post('/messages', messages.create);
    app.post('/messages/:id', comments.create);
}
