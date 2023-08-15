export default class Popup {
  deletPopUp() {
    this.popup.remove();
  }

  showPopUp(title, element) {
    const popUpElement = document.createElement('div');
    popUpElement.classList.add('popUpElement');
    popUpElement.textContent = element.dataset.content;
    document.body.appendChild(popUpElement);
    const { top, width } = element.getBoundingClientRect();
    popUpElement.style.left = `${width / 2 + 10}px`;
    popUpElement.style.top = `${top - 75}px`;
    popUpElement.dataset.content = `${title}`;
    this.popup = popUpElement;
  }
}
