// This payment service acts as an interface into some overly complex object that can be defined at a later date
var PaymentService = function() {
	// No properties set right now
}

// Placeholder functions, use these to test
PaymentService.prototype.makeTransaction = function(user, charity) {
	// Do complicated stuff...
	return true;
};

PaymentService.prototype.checkState = function() {
	return true;
};