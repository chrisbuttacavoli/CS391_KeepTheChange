// Extend this class for other assertion methods
var MyAssert = function() {

}

MyAssert.prototype.equal = function(val1, val2) {
	if (val1 == val2) {
		console.log('Test passes!');
	}
	else {
		console.log('Test fails...');
	}
};