function MyApp() {
	if (!MyApp.instance) {
		MyApp.instance = this;
	}

	return MyApp.instance;
}

var instance = new MyApp();
console.log(instance === new MyApp());
