var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');
var bcrypt = require('bcrypt');

module.exports = {
    login: function(request, response) {
        Friend.findOne({ email: request.body.email_login }, function(err, result) {
            if (err) {
                console.log('test1');
                console.log(err);
            } else {
                console.log('test2');
                console.log(request.body.email_login);
                console.log(request.body.password_login);
                console.log('test3');
                console.log(result);
                if (request.body.password_login) {
                    // if (request.body.password_login == result.password){
                    // 	response.json(result);
                    // }
                    console.log(bcrypt.compareSync(request.body.password_login, result.password));
                    if (bcrypt.compareSync(request.body.password_login, result.password) == true) {
                        response.json(result);
                    }
                } else {
                    response.json({ errors: { user_login: 'Invalid email or password' } });
                }
            }
        })
    },
    // resgister: function(request, response){
    // 	var friend = new Friend(request.body);
    // 	friend.save(function(err, result){
    // 		if (err){
    // 			response.json(err);
    // 		} else {
    // 			response.json({_id: request._id});
    // 		}
    // 	})
    // },
    index: function(request, response) {
        Friend.find({}, function(err, result) {
            if (err) {
                console.log(err);
            } else {
                response.json(result);
            }
        })
    },
    show: function(request, response) {
        Friend.find({ _id: request.params.id }, function(err, result) {
            if (err) {
                console.log(err);
            } else {
                response.json(result);
            }
        })
    },
    create: function(request, response) {
        // console.log(request.body);
        Friend.create(request.body, function(err, result) {
            // console.log(request);
            if (err) {
                console.log(err.errors);
                response.json(err);
            } else {
                response.json(result);
            }
        })
    },
    update: function(request, response) {
        Friend.findOne({ _id: request.params.id }, function(err, friend) {
            if (err) {
                console.log(err);
            } else {
                friend.first_name = request.body.first_name;
                friend.last_name = request.body.last_name;
                friend.birthday = request.body.birthday;
                friend.phone = request.body.phone;
                friend.gender = request.body.gender;
                friend.email = request.body.email;
                friend.password = request.body.password;
                friend.save(function(err, result) {
                    if (err) {
                        console.log(err);
                    } else {
                        response.json(result);
                    }
                })
            }
        })
    },
    delete: function(request, response) {
        Friend.remove({ _id: request.params.id }, function(err) {
            if (err) {
                console.log(err);
            } else {
                response.json({ message: "Delete successfully." });
            }
        })
    }


}
