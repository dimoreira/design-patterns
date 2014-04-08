function User() {}
User.prototype.createOrUpdate = function() {
	console.log('Created a user record');
}

function Profile() {}
Profile.prototype.createOrUpdate = function() {
	console.log('Created a profile record');
}

function Account() {}
Account.prototype.newAccount = function() {
	var user = new User();
	user.createOrUpdate();

	var profile = new Profile();
	profile.createOrUpdate();
}

var account = new Account();
account.newAccount();
