var Charity = function(name, confidentiality) {
	this.name = name;
	this.confidential = false;
}

Charity.prototype.give = function(amount, user) {
	
	// Check if this is a valid amount to give
	if (ValidCurrency(amount)) {
		
		// Attempt to use payment service
		var payment = new PaymentService();
		payment.makeTransaction(user, this);
		
		return payment.checkState();
	}
	else {
		console.log('Invalid donation amount: ' + amount);
		return false;
	}
}