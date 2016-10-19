var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
    create: function(request, response) {
        User.findOne({ name: request.body.name }, function(err, user) {
            if (err) {
                console.log(err);
                response.json(err);
            } else {
                console.log(user);
                if (user == null) {
                    User.create(request.body, function(err, result) {
                        if (err) {
                            console.log(err);
                        } else {
                            response.json(result);
                        }
                    })
                } else {
                    response.json(user);
                }
            }
        })
    }
}
