const { default: PopupWidget } = require('./component/popuoWidget');
const { default: Popup } = require('./component/popup');

const button = document.querySelector('button');

const test = new PopupWidget(button, new Popup());
const Console = window.console;
Console.log(test);
