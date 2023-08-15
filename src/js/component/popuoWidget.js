export default class PopupWidget {
  constructor(element, popupHandler) {
    this.element = element;
    this.popupHandler = popupHandler;
    this.popupEnvoked = false;
    this.popover = this.popover.bind(this);
    this.element.addEventListener('click', this.popover);
  }

  popover() {
    if (!this.popupEnvoked) {
      this.popupHandler.showPopUp('PopUp Title', this.element);
      this.popupEnvoked = true;
    } else {
      this.popupHandler.deletPopUp();
      this.popupEnvoked = false;
    }
  }
}
