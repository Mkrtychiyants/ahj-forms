/**
 * @jest-environment jsdom
 */

const { default: PopupWidget } = require('../component/popuoWidget');
const { default: Popup } = require('../component/popup');

test('popup test', () => {
  document.body.innerHTML = '<div class="form">'
     + '<button type="submit" class="btn" data-content="And here\'s some amazing contetnt. It\'s very engaging">Ok</button>'
     + '<button type="reset" class="btn">Reset</button></div>';

  const result = '<div class="form"><button type="submit" class="btn" data-content="And here\'s some amazing contetnt. It\'s very engaging">Ok</button>'
    + '<button type="reset" class="btn">Reset</button></div>'
    + '<div class="popUpElement" style="left: 10px; top: -75px;" data-content="PopUp Title">And here\'s some amazing contetnt. It\'s very engaging</div>';
  const button = document.querySelector('button');
  PopupWidget(button, Popup());
  button.click();
  expect(document.body.innerHTML).toEqual(result);
});
