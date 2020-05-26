import { removeTrip } from "../removeTrip";


  test('Test remove trip', () => {
    document.body.innerHTML =
    '<div><strong>Typical weather for then is: </strong>' +
      '<span>High - <span id="highT"></span> Low -' +
      '<span id="lowT"></span></span>' +
    '</div>';

    expect(removeTrip()).toBe("");
  });
