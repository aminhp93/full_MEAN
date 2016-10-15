var mongoose = require('mongoose');
var bcrypt = require('bcrypt')

var FriendSchema = new mongoose.Schema({
	first_name: {type: String, required: [true, 'First name can not be blank'], trim: true, unique: true},
	last_name: {type: String, required: [true, 'Last name can not be blank'], trim: true},
	birthday: {type: String, required: [true, 'Birthday can not be blank'], trim: true},
	phone: {
		type: String,
		validate: [{ 
			validator: function(number){
				return /\d{3}-\d{3}-\d{4}/.test(number);
			}, 
			message: '{VALUE} is not a valid phone number'
		// },
		// {
		// 	validator: function(number){
		// 		return false;
		// 	},
		// 	message: "{VALUE} failed this validator"
		}
		],
		required: [true, 'Customer phone number required']
	},
	gender: {
		type: String,
		enum: ['MALE', 'FEMALE'],
		default: "MALE",
	},
	email: {
		type: String, 
		required: [true, 'Email can not be blank'], 
		validate: [{
			validator: function(email){
				return /@/.test(email);
			},
			message: '{VALUE} is not a valid email'
		}],
		trim: true
	},
	password: {
		type: String,
		minlength: 8,
		maxlength: 32,
		validate: {
			validator: function(value){
				return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
			},
			message: "Password failed validation, you must have at least 1 number, uppercase and special character"
		},
		required: [true, 'Password can not be blank'],
		trim: true
	},
}, {timestamps: true});

FriendSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

// checking if password is valid
// FriendSchema.methods.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.password);
// };

FriendSchema.pre('save', function(done) {
    this.password = this.generateHash(this.password);
    done();
});

mongoose.model('Friend', FriendSchema);