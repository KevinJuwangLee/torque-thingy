let form = document.querySelector("#form");
let inputs = document.querySelectorAll("input");
let validChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];

let solution = document.querySelector("#solution");

if (location.protocol != 'https:') {
 location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
}

form.onsubmit = function(e) {
  e.preventDefault();
  solution.innerHTML = "";
  let values = [];
  let heavier;
  let lighter;
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value.split(".").length > 2) {
      alert("Please enter a valid number.");
      return true;
    }
    for (let j = 0; j < inputs[i].value.length; j++) {
      if (!validChar.includes(inputs[i].value[j])) {
        alert("Please enter a valid number.");
        return true;
      }
    }
  }
  if (inputs[4].value > inputs[2].value / 2) {
    alert("Please enter a valid distance.");
    return true;
  }
  if (!(0 <= inputs[5].value && inputs[5].value <= 100)) {
    alert("Please enter a valid rule.");
    return true;
  }

  for (let i = 0; i < inputs.length; i++) {
    values.push(parseFloat(inputs[i].value));
  }
  if (values[0] >= values[1]) {
    heavier = values[0];
    lighter = values[1];
  } else {
    heavier = values[1];
    lighter = values[0];
  }

  solution.innerHTML += "<li>Left Torque = Right Torque</li>";
  solution.innerHTML += `<li>${lighter}(${values[2] - 2 * values[4]} - x) + ${
    values[3]
  }(${(values[2] - 2 * values[4]) / 2} - x) = ${heavier}x</li>`;
  solution.innerHTML += `<li>${lighter *
    (values[2] - 2 * values[4])} - ${lighter}x + ${values[3] *
    ((values[2] - 2 * values[4]) / 2)} - ${values[3]}x = ${heavier}x</li>`;
  solution.innerHTML += `<li>${lighter *
    (values[2] - 2 * values[4])} + ${values[3] *
    ((values[2] - 2 * values[4]) / 2)} = ${heavier}x + ${lighter}x + ${
    values[3]
  }x</li>`;
  solution.innerHTML += `<li>${lighter * (values[2] - 2 * values[4]) +
    values[3] * ((values[2] - 2 * values[4]) / 2)} = ${heavier +
    lighter +
    values[3]}x</li>`;
  solution.innerHTML += `<li>x = ${(lighter * (values[2] - 2 * values[4]) +
    values[3] * ((values[2] - 2 * values[4]) / 2)) /
    (heavier + lighter + values[3])}cm</li>`;
  let ans =
    (lighter * (values[2] - 2 * values[4]) +
      values[3] * ((values[2] - 2 * values[4]) / 2)) /
    (heavier + lighter + values[3]);
  solution.innerHTML += `<br><li>Long Side: ${values[2]} - ${ans} - ${
    values[4]
  } = ${values[2] - ans - values[4]}cm</li>`;
  let long = values[2] - ans - values[4];
  solution.innerHTML += `<li>Short Side: ${ans}</li>`;
  solution.innerHTML += `<br><li>Check ${values[5]}% Rule</li>`;
  solution.innerHTML += `<li>${values[5]}% of ${values[2]} = ${(values[2] *
    values[5]) /
    100}cm</li>`;
  solution.innerHTML += `<li>${long} - ${ans} = ${long - ans}</li>`;
  if (long - ans > (values[2] * values[5]) / 100) {
    solution.innerHTML +=
      "<li>" +
      (long - ans) +
      " > " +
      `${(values[2] * values[5]) / 100}, good to go.`;
  } else {
    solution.innerHTML +=
      "<li>" + (long - ans) + " < " + `${(values[2] * values[5]) / 100}, nope!`;
  }
};
