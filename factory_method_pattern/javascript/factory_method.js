var util = require('util');

function Button() {
	this.html = "";
}
Button.prototype.getHtml = function() {
	return this.html;
}

function ImageButton() {
	this.html = '<button type="image">Image</button>';
}
util.inherits(ImageButton, Button);

function InputButton() {
	this.html = '<button type="input">Input</button>';
}
util.inherits(InputButton, Button);

function FlashButton() {
	this.html = '<button type="flash">Flash</button>';
}
util.inherits(FlashButton, Button);

function ButtonFactory() {};
ButtonFactory.prototype.createButton = function(type) {
	var button;
	if (type === 'image') {
		button = new ImageButton();
	} else if (type === 'input') {
		button = new InputButton();
	} else if (type === 'flash') {
		button = new FlashButton();
	} else {
		var message = "Button type ("+type+") cannot be initialized";
		throw message;
	}

	return button;
}

var factory = new ButtonFactory();
var button = factory.createButton('drone');
console.log(button.getHtml());
