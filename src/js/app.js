// TODO: write code here

const { default: PopupWidget } = require('./component/popuoWidget');
const { default: Popup } = require('./component/popup');

const button = document.querySelector('button');

new PopupWidget(button, new Popup());
