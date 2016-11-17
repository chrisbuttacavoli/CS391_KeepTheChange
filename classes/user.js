/*
	Init mocks up fake data, don't worry about the database for now
*/

var User = function() {
	
}

User.prototype.init = function(id) {
	// Get user properties from database
	this.id = id;
	this.name = 'Bob Bum';
	this.password = 'the p1nk f1aming0';
	this.confidential = false;
	this.charity = new Charity('Good Samaritan', false);
	this.money = 100;
}

User.prototype.donate = function(amount) {
	
	// Check if this is a valid amount to give
	if (ValidCurrency(amount) && this.money >= amount) {
		
		// Attempt to give the charity money, proceed if successful
		if (this.charity.give(amount, this)) {
			this.money = this.money - amount;
		}
		else {
			console.log('An error occurred donating to ' + this.charity.name);
		}
	}
	else {
		console.log(this.name + ' cannot donate $' + amount + '. Verify that ' + amount + ' is a valid currency.')
	}
};
