function User(name, address, mobile, userid) {
	if (userid == null) {
		console.log('Created a new user record');
	} else {
		console.log('Updated a user record');
	}
}

var user = new User('Diego', 'Endereço', '12345');
var user2 = new User('Diego', 'Endereço', '12345', '1');
