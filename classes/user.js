/*
	Constructor needs to be redone.
	
	We need a user service that creates and retrieves/inits the user objectject seen below,
	otherwse we are assuming that we are creating a new user everytime with my code below.
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