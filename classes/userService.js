/*
	Responsible for adding, authenticating, and initializing users
*/

var UserService = function() {
	
}

UserService.prototype.getUser = function(id) {
	var user = new User();
	user.init(id);
	return user; //no error checking done, TODO
};

UserService.prototype.createUser = function(name, password) {
	if (name && password) {
		// Add user to db
	}
};

UserService.prototype.authorizeUser = function(data) {
	// Dooo the data athentication stuff
};