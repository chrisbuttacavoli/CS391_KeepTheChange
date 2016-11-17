// This claass gives us donation info based on transaction id
var DonationTransaction = function() {
	this.id = 0;
	this.confidentiality = false;
	this.amount = 0;
}

// Here we'd retrieve information from the database and populate this object's properties
DonationTransaction.prototype.init = function(id) {
	this.id = id;
	this.confidentiality = false;
	this.amount = false
}