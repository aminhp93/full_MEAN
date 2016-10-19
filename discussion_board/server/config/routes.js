var users = require('../controllers/users.js');
var topics = require('../controllers/topics.js');
var messages = require('../controllers/messages.js');
var comments = require('../controllers/comments.js');

module.exports = function(app) {
    app.post('/users', users.create);

    app.get('/topics', topics.index);
    app.get('/topics/:topic_id', topics.get_one_topic);
    app.post('/topics', topics.create);

    app.get('/messages/:topic_id', messages.index);
    app.post('/messages/:topic_id', messages.create);
    app.post('/comments/:message_id', comments.create);

    app.post('/messages/like/:topic_id', messages.like);
    app.post('/messages/dislike/:topic_id', messages.dislike);
}
